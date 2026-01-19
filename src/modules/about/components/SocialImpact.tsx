"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Award } from "lucide-react";
import { SOCIAL_IMPACT } from "../constants";

const iconMap = {
  Heart,
  Sparkles,
  Award,
};

export function SocialImpact() {
  return (
    <section className="py-20 md:py-32 bg-brand-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            {SOCIAL_IMPACT.title}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            {SOCIAL_IMPACT.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {SOCIAL_IMPACT.activities.map((activity, index) => {
            const Icon = iconMap[activity.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  {activity.title}
                </h3>
                
                <p className="text-white/80 leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
