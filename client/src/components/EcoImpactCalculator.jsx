import React, { useState } from 'react';
import { Droplets, Wind, Trash2, DollarSign, Sparkles, RefreshCw } from 'lucide-react';

const EcoImpactCalculator = ({ initialGarments = 4, initialShoes = 1 }) => {
  const [garments, setGarments] = useState(initialGarments);
  const [shoes, setShoes] = useState(initialShoes);

  // Environmental Constants (backed by Ellen MacArthur Foundation & UNEP Textile Studies)
  // 1 garment reused = ~2,700 Liters of water, ~14.5 kg CO2e, ~1.1 kg textile waste, ~$38 saved vs fast fashion
  // 1 pair shoes reused = ~4,200 Liters of water, ~18.5 kg CO2e, ~1.8 kg waste, ~$55 saved
  const waterSavedLiters = garments * 2700 + shoes * 4200;
  const co2DivertedKg = (garments * 14.5 + shoes * 18.5).toFixed(1);
  const wasteDivertedKg = (garments * 1.1 + shoes * 1.8).toFixed(1);
  const moneySaved = garments * 38 + shoes * 55;

  // Real world campus analogies
  const showersSaved = Math.round(waterSavedLiters / 65); // 65 liters per 8-min shower
  const kmDrivenEquivalent = Math.round(Number(co2DivertedKg) * 5.2); // 1 kg CO2 = ~5.2 km in car

  return (
    <div className="bg-white border border-border rounded-3xl p-6 sm:p-8 shadow-card relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-forest-100/50 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-border">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-forest-700" />
              <span>UN SDG 12: Circular Campus Impact</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-dark-900 font-editorial">
              Campus Sustainability Calculator
            </h3>
            <p className="text-xs sm:text-sm text-muted-600 mt-1">
              Estimate the ecological footprint you eliminate by thrifting or swapping instead of buying brand new.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setGarments(4);
              setShoes(1);
            }}
            className="self-start sm:self-center text-xs font-medium text-muted-600 hover:text-forest-900 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border hover:bg-ivory-100 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-2.5 bg-ivory-50 p-4 rounded-2xl border border-border/80">
            <div className="flex justify-between items-center text-sm font-semibold text-dark-900">
              <span>Pre-Loved Garments & Tops</span>
              <span className="px-2.5 py-1 bg-forest-800 text-white rounded-lg text-xs font-bold">
                {garments} {garments === 1 ? 'item' : 'items'}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="20"
              value={garments}
              onChange={(e) => setGarments(parseInt(e.target.value, 10))}
              className="w-full accent-forest-800 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-muted-500">
              <span>0 items</span>
              <span>10 items</span>
              <span>20 items</span>
            </div>
          </div>

          <div className="space-y-2.5 bg-ivory-50 p-4 rounded-2xl border border-border/80">
            <div className="flex justify-between items-center text-sm font-semibold text-dark-900">
              <span>Footwear & Accessories</span>
              <span className="px-2.5 py-1 bg-forest-800 text-white rounded-lg text-xs font-bold">
                {shoes} {shoes === 1 ? 'pair' : 'pairs'}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              value={shoes}
              onChange={(e) => setShoes(parseInt(e.target.value, 10))}
              className="w-full accent-forest-800 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-muted-500">
              <span>0 pairs</span>
              <span>5 pairs</span>
              <span>10 pairs</span>
            </div>
          </div>
        </div>

        {/* Live Impact KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Water Conserved */}
          <div className="bg-sky-50/70 border border-sky-100 rounded-2xl p-4 transition-transform hover:-translate-y-0.5">
            <div className="flex items-center gap-2 mb-2 text-sky-800">
              <Droplets className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Water Saved</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-sky-950 font-editorial">
              {waterSavedLiters.toLocaleString()} L
            </p>
            <p className="text-[11px] text-sky-700/80 mt-1">
              ≈ <strong>{showersSaved}</strong> college showers saved
            </p>
          </div>

          {/* Carbon Diverted */}
          <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 transition-transform hover:-translate-y-0.5">
            <div className="flex items-center gap-2 mb-2 text-emerald-800">
              <Wind className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">CO₂e Diverted</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-emerald-950 font-editorial">
              {co2DivertedKg} kg
            </p>
            <p className="text-[11px] text-emerald-700/80 mt-1">
              ≈ <strong>{kmDrivenEquivalent} km</strong> car emissions avoided
            </p>
          </div>

          {/* Textile Landfill Saved */}
          <div className="bg-amber-50/70 border border-amber-100 rounded-2xl p-4 transition-transform hover:-translate-y-0.5">
            <div className="flex items-center gap-2 mb-2 text-amber-800">
              <Trash2 className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Landfill Saved</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-amber-950 font-editorial">
              {wasteDivertedKg} kg
            </p>
            <p className="text-[11px] text-amber-700/80 mt-1">
              Kept out of local municipal landfills
            </p>
          </div>

          {/* Financial Savings */}
          <div className="bg-forest-50/80 border border-forest-100 rounded-2xl p-4 transition-transform hover:-translate-y-0.5">
            <div className="flex items-center gap-2 mb-2 text-forest-800">
              <DollarSign className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Student Savings</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-forest-950 font-editorial">
              ${moneySaved}
            </p>
            <p className="text-[11px] text-forest-700/80 mt-1">
              Kept in student wallets this semester
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoImpactCalculator;
