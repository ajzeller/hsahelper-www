"use client";

import { useState, useMemo } from "react";
import { Icon } from "@/components/icon";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type ProjectionRow = {
  age: number;
  year: number;
  totalWealth: number;
  balanceDeferred: number;
  balanceNoInvest: number;
};

function formatWhole(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDollar(value: number) {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}k`;
  return `$${value.toFixed(0)}`;
}

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string | number;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-zinc-200 rounded-lg shadow-lg px-3 py-2.5 text-xs">
      <p className="font-semibold text-zinc-700 mb-1.5">Age {label}</p>
      {payload.map((p) => (
        <div key={p.name} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.color }} />
          <span className="text-zinc-500">{p.name}:</span>
          <span className="font-semibold text-zinc-900 tabular-nums">{formatWhole(p.value)}</span>
        </div>
      ))}
    </div>
  );
}

export function HSACalculator() {
  const currentYear = new Date().getFullYear();

  const [birthYear, setBirthYear] = useState("");
  const [startingBalance, setStartingBalance] = useState("5000");
  const [annualContribution, setAnnualContribution] = useState("4300");
  const [annualExpenses, setAnnualExpenses] = useState("2000");
  const [cagr, setCagr] = useState("7");
  const [ltcgRate, setLtcgRate] = useState("15");
  const [retirementAge, setRetirementAge] = useState("65");
  const [showDeferred, setShowDeferred] = useState(true);
  const [showNoInvest, setShowNoInvest] = useState(true);
  const [showTable, setShowTable] = useState(false);

  const projectionData = useMemo((): ProjectionRow[] => {
    const by = parseInt(birthYear);
    const rc = parseFloat(cagr) / 100;
    const ra = parseInt(retirementAge);
    const ac = parseFloat(annualContribution) || 0;
    const ae = parseFloat(annualExpenses) || 0;
    const ltcg = parseFloat(ltcgRate) / 100;
    const startBal = parseFloat(startingBalance) || 0;

    if (!by || isNaN(rc) || isNaN(ra) || ra <= 0 || rc < 0) return [];

    const currentAge = currentYear - by;
    if (currentAge < 0 || currentAge >= ra) return [];

    const rows: ProjectionRow[] = [];

    let hsaBase = startBal;
    let brokerageValue = 0;
    let brokerageBasis = 0;
    let hsaDeferred = startBal;

    for (let age = currentAge; age <= ra; age++) {
      const brokerageGains = Math.max(0, brokerageValue - brokerageBasis);
      const afterTaxBrokerage = brokerageBasis + brokerageGains * (1 - ltcg);

      rows.push({
        age,
        year: currentYear + (age - currentAge),
        totalWealth: Math.round(hsaBase + afterTaxBrokerage),
        balanceDeferred: Math.round(hsaDeferred),
        balanceNoInvest: Math.round(hsaBase),
      });

      const withdrawal = Math.min(ae, Math.max(0, hsaBase + ac));
      hsaBase = Math.max(0, hsaBase + ac - withdrawal) * (1 + rc);
      brokerageValue = (brokerageValue + withdrawal) * (1 + rc);
      brokerageBasis += withdrawal;

      hsaDeferred = (hsaDeferred + ac) * (1 + rc);
    }

    return rows;
  }, [birthYear, startingBalance, annualContribution, annualExpenses, cagr, ltcgRate, retirementAge, currentYear]);

  const retirementRow = projectionData[projectionData.length - 1];
  const hasDeferred = (parseFloat(annualExpenses) || 0) > 0;
  const xInterval = projectionData.length > 30 ? 4 : projectionData.length > 15 ? 3 : 1;
  const ready = projectionData.length > 1;

  return (
    <div>
      {/* Calculator inputs */}
      <div className="bg-white border border-zinc-200 rounded-xl px-5 py-4 mb-4">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-violet-500">Birth Year</label>
            <input
              type="number"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              placeholder={`e.g. ${currentYear - 35}`}
              min={1900}
              max={currentYear}
              className="edit-input !w-32"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-violet-500">Retirement Age</label>
            <input
              type="number"
              value={retirementAge}
              onChange={(e) => setRetirementAge(e.target.value)}
              placeholder="65"
              min={1}
              max={100}
              className="edit-input !w-32"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-violet-500">Starting HSA Balance</label>
            <div className="relative w-32">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-sm text-zinc-400 pointer-events-none">$</span>
              <input
                type="number"
                value={startingBalance}
                onChange={(e) => setStartingBalance(e.target.value)}
                placeholder="0"
                min={0}
                className="edit-input !w-full !pl-5"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-violet-500">Growth Rate (CAGR)</label>
            <div className="relative w-32">
              <input
                type="number"
                value={cagr}
                onChange={(e) => setCagr(e.target.value)}
                placeholder="7"
                min={0}
                max={30}
                step={0.1}
                className="edit-input !w-full !pr-6"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-sm text-zinc-400 pointer-events-none">%</span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-violet-500">Annual HSA Contribution</label>
            <div className="relative w-32">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-sm text-zinc-400 pointer-events-none">$</span>
              <input
                type="number"
                value={annualContribution}
                onChange={(e) => setAnnualContribution(e.target.value)}
                placeholder="4300"
                min={0}
                className="edit-input !w-full !pl-5"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-violet-500">Annual HSA-eligible Expenses</label>
            <div className="relative w-32">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-sm text-zinc-400 pointer-events-none">$</span>
              <input
                type="number"
                value={annualExpenses}
                onChange={(e) => setAnnualExpenses(e.target.value)}
                placeholder="2000"
                min={0}
                className="edit-input !w-full !pl-5"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-violet-500">Long-term Capital Gains Tax</label>
            <div className="relative w-32">
              <input
                type="number"
                value={ltcgRate}
                onChange={(e) => setLtcgRate(e.target.value)}
                placeholder="15"
                min={0}
                max={40}
                step={0.1}
                className="edit-input !w-full !pr-6"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-sm text-zinc-400 pointer-events-none">%</span>
            </div>
          </div>
        </div>
      </div>

      {!ready ? (
        <div className="text-center py-16 text-zinc-400">
          <Icon icon="query_stats" size={40} className="mx-auto mb-3 text-zinc-300" />
          <p className="text-sm">Enter your birth year to see the projection.</p>
        </div>
      ) : (
        <>
          {hasDeferred && (
            <p className="text-sm text-zinc-600 mb-4">
              By{" "}
              <span className="font-semibold text-emerald-700 bg-emerald-50 px-1 rounded">deferring reimbursements</span>{" "}
              and letting your HSA compound until age {retirementRow.age}, you could have{" "}
              <span className="font-semibold text-emerald-700 bg-emerald-50 px-1 rounded">
                {formatWhole(retirementRow.balanceDeferred - retirementRow.totalWealth)} more
              </span>{" "}
              than if you{" "}
              <span className="font-semibold text-blue-700 bg-blue-50 px-1 rounded">reimbursed immediately and invested the proceeds outside of an HSA</span>{" "}
              — the difference is the long-term capital gains tax you avoid by keeping growth inside the HSA.
              {" "}Compared to{" "}
              <span className="font-semibold text-red-700 bg-red-50 px-1 rounded">reimbursing and not investing</span>,
              {" "}deferring leaves you with{" "}
              <span className="font-semibold text-emerald-700 bg-emerald-50 px-1 rounded">
                {formatWhole(retirementRow.balanceDeferred - retirementRow.balanceNoInvest)} more
              </span>.
            </p>
          )}

          <div className={`grid gap-2 mb-4 ${hasDeferred ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2"}`}>
            {hasDeferred && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                  Defer Reimbursements Until Retirement
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold text-emerald-900 tabular-nums">
                    {formatWhole(retirementRow.balanceDeferred)}
                  </p>
                  <p className="text-xs text-emerald-500">HSA</p>
                </div>
                <p className="text-xs text-emerald-500 mt-0.5">
                  <span className="font-bold">+{formatWhole(retirementRow.balanceDeferred - retirementRow.totalWealth)} vs reimbursing immediately</span>
                </p>
              </div>
            )}
            <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-blue-400 mb-1">
                Reimburse + Invest Withdrawals in Brokerage
              </p>
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold text-blue-900 tabular-nums">
                  {formatWhole(retirementRow.totalWealth)}
                </p>
                <p className="text-xs text-blue-400">HSA + after-tax brokerage</p>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">
                Reimburse, Don&apos;t Invest
              </p>
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold text-red-900 tabular-nums">
                  {formatWhole(retirementRow.balanceNoInvest)}
                </p>
                <p className="text-xs text-red-400">HSA only after withdrawals</p>
              </div>
              {hasDeferred && (
                <p className="text-xs text-red-500 mt-0.5">
                  <span className="font-bold">{formatWhole(retirementRow.balanceNoInvest - retirementRow.balanceDeferred)} vs deferring</span>
                </p>
              )}
            </div>
          </div>

          <div className="bg-white border border-zinc-200 rounded-xl p-5 mb-4">
            <div className="flex flex-wrap items-center justify-between gap-y-2 mb-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Total Wealth at Retirement
              </p>
              <div className="flex flex-wrap items-center gap-1.5">
                {hasDeferred && (
                  <button
                    type="button"
                    onClick={() => setShowDeferred((v) => !v)}
                    className={`flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-semibold transition-all ${
                      showDeferred
                        ? "bg-white shadow-sm text-emerald-700"
                        : "text-zinc-400 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                    Defer
                  </button>
                )}
                <div className="flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-semibold bg-white shadow-sm text-blue-700">
                  <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                  Reimburse + Invest
                </div>
                {hasDeferred && (
                  <button
                    type="button"
                    onClick={() => setShowNoInvest((v) => !v)}
                    className={`flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-semibold transition-all ${
                      showNoInvest
                        ? "bg-white shadow-sm text-red-700"
                        : "text-zinc-400 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                    Don&apos;t Invest
                  </button>
                )}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={projectionData} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="gradProjected" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gradDeferred" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gradNoInvest" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" vertical={false} />
                <XAxis
                  dataKey="age"
                  tick={{ fontSize: 9, fill: "#a1a1aa" }}
                  axisLine={false}
                  tickLine={false}
                  dy={6}
                  interval={xInterval}
                />
                <YAxis
                  tickFormatter={formatDollar}
                  tick={{ fontSize: 9, fill: "#a1a1aa" }}
                  axisLine={false}
                  tickLine={false}
                  width={42}
                />
                <Tooltip content={<CustomTooltip />} />
                {hasDeferred && showDeferred && (
                  <Area
                    type="monotone"
                    dataKey="balanceDeferred"
                    name="Defer"
                    stroke="#10b981"
                    strokeWidth={2}
                    fill="url(#gradDeferred)"
                    dot={false}
                    activeDot={{ r: 4, strokeWidth: 0 }}
                  />
                )}
                <Area
                  type="monotone"
                  dataKey="totalWealth"
                  name="Reimburse + Invest"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fill="url(#gradProjected)"
                  dot={false}
                  activeDot={{ r: 4, strokeWidth: 0 }}
                />
                {hasDeferred && showNoInvest && (
                  <Area
                    type="monotone"
                    dataKey="balanceNoInvest"
                    name="Don't Invest"
                    stroke="#ef4444"
                    strokeWidth={2}
                    fill="url(#gradNoInvest)"
                    dot={false}
                    activeDot={{ r: 4, strokeWidth: 0 }}
                  />
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setShowTable((v) => !v)}
              className="w-full px-5 py-3 flex items-center justify-between hover:bg-zinc-50 transition-colors"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Year-by-Year Breakdown
              </p>
              <Icon icon={showTable ? "expand_less" : "expand_more"} size={16} className="text-zinc-400" />
            </button>
            {showTable && (
              <div className="border-t border-zinc-100 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-100">
                      <th className="text-left px-5 py-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Age</th>
                      <th className="text-left px-5 py-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Year</th>
                      {hasDeferred && (
                        <th className="text-right px-5 py-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Defer</th>
                      )}
                      <th className="text-right px-5 py-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Reimburse + Invest</th>
                      <th className="text-right px-5 py-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Don&apos;t Invest</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-50">
                    {projectionData.map((row) => {
                      const isCurrent = row.year === currentYear;
                      return (
                        <tr key={row.age} className={isCurrent ? "bg-blue-50/50" : "hover:bg-zinc-50/60"}>
                          <td className="px-5 py-2 text-zinc-700 font-medium tabular-nums">
                            {row.age}
                            {isCurrent && (
                              <span className="ml-1.5 text-[9px] font-bold uppercase tracking-wider text-blue-500">Now</span>
                            )}
                          </td>
                          <td className="px-5 py-2 text-zinc-500 tabular-nums">{row.year}</td>
                          {hasDeferred && (
                            <td className="px-5 py-2 text-right text-emerald-700 font-medium tabular-nums">
                              {formatWhole(row.balanceDeferred)}
                            </td>
                          )}
                          <td className="px-5 py-2 text-right text-blue-700 font-medium tabular-nums">
                            {formatWhole(row.totalWealth)}
                          </td>
                          <td className="px-5 py-2 text-right text-red-700 font-medium tabular-nums">
                            {formatWhole(row.balanceNoInvest)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
