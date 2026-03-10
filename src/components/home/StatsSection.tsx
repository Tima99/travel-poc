const stats = [
  { label: "Happy travellers", value: "50K+" },
  { label: "Curated itineraries", value: "320+" },
  { label: "Partner properties", value: "2.4K+" },
  { label: "Average rating", value: "4.8/5" },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-card sm:p-6">
      <div className="grid gap-5 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {stat.label}
            </div>
            <div className="text-xl font-semibold tracking-tight text-slate-900">
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

