import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Target, Zap, Award, TrendingUp, ArrowUpRight, CheckCircle } from "lucide-react";

const About = () => {
  const achievements = [
    { number: "500+", label: "Projetos", icon: Target },
    { number: "98%", label: "Satisfação", icon: Award },
    { number: "250%", label: "ROI Médio", icon: TrendingUp }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ninja-purple/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-ninja-cyan/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content Grid - Asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 bg-ninja-cyan/10 backdrop-blur-sm border border-ninja-cyan/20 rounded-full px-4 py-2 text-sm">
              <Shield className="w-4 h-4 text-ninja-cyan" />
              <span className="text-ninja-cyan font-medium">Nossa Filosofia</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Capacitando você a</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Dominar sua CX
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Acreditamos que o conhecimento é a chave para a excelência em CX. Nosso conteúdo no YouTube e em nosso podcast foi criado para que você possa <span className="text-ninja-purple font-semibold">diagnosticar e transformar</span> a sua própria operação de atendimento.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "Conteúdo prático e aplicável",
                "Análises de casos reais", 
                "Entrevistas com especialistas",
                "Foco em resultados"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-ninja-cyan flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-xl transform rotate-6"></div>
              <div className="relative bg-background/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/a60216fb-d9dc-4bf9-82cc-d6fef4223ae6.png" 
                  alt="CX Ninjas Team" 
                  className="w-full h-auto max-w-xs mx-auto animate-float object-contain"
                />
              </div>
            </div>

            {/* Floating Achievement Cards */}
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className={`absolute bg-white/10 backdrop-blur-sm border border-white/20 p-4 animate-fade-in ${
                  index === 0 ? '-top-8 -left-8' : 
                  index === 1 ? '-bottom-8 -right-8' : 
                  'top-1/2 -left-12'
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <achievement.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{achievement.number}</div>
                      <div className="text-xs text-muted-foreground">{achievement.label}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;