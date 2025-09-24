import bpcCircularLogo from "@assets/image_1758569899954.png";

export default function About() {
  return (
    <div className="pt-20">
      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img 
                src={bpcCircularLogo} 
                alt="BPC Logo" 
                className="h-24 w-24 opacity-80"
                data-testid="img-about-logo"
              />
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-foreground mb-8" data-testid="text-about-title">
              Sobre a BPC
            </h1>
            
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed" data-testid="text-about-history">
                Desde 2017, a BPC Planejamento e Consultoria oferece soluções em seguros de vida e planos de saúde, unindo experiência de mercado e visão estratégica. Nosso trabalho é consultivo e personalizado, com foco em proteger pessoas, fortalecer empresas e garantir resultados sustentáveis.
              </p>
            </div>
              

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-muted rounded-2xl p-8" data-testid="diferencial-experiencia">
                <div className="text-5xl mb-6">💼</div>
                <h4 className="text-xl font-display font-semibold text-foreground mb-4">EXPERIÊNCIA SÓLIDA</h4>
                <p className="text-muted-foreground leading-relaxed">
                  desde 2005 no mercado financeiro e desde 2017 empreendendo no setor de seguros e saúde.
                </p>
              </div>
              <div className="bg-muted rounded-2xl p-8" data-testid="diferencial-transparencia">
                <div className="text-5xl mb-6">🔍</div>
                <h4 className="text-xl font-display font-semibold text-foreground mb-4">TRANSPARÊNCIA</h4>
                <p className="text-muted-foreground leading-relaxed">
                  construímos relacionamentos de longo prazo baseados em clareza e ética.
                </p>
              </div>
              <div className="bg-muted rounded-2xl p-8" data-testid="diferencial-protecao">
                <div className="text-5xl mb-6">🛡️</div>
                <h4 className="text-xl font-display font-semibold text-foreground mb-4">PROTEÇÃO COMPLETA</h4>
                <p className="text-muted-foreground leading-relaxed">
                  atuamos em planos de saúde e seguros de vida, sempre com visão de planejamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-8" data-testid="text-mission-title">
                Nossa Essência
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-mission-description">
                Os princípios que guiam nossa consultoria e definem nosso compromisso com a excelência no atendimento
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-background rounded-2xl p-8 shadow-lg text-center" data-testid="card-missao">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Levar proteção e planejamento em saúde e vida com soluções consultivas e sustentáveis.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-lg text-center" data-testid="card-visao">
                <div className="text-5xl mb-6">🔮</div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência em consultoria de benefícios, unindo cuidado com pessoas e resultados para empresas.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-lg text-center" data-testid="card-valores">
                <div className="text-5xl mb-6">⭐</div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Valores</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transparência, proximidade, sustentabilidade, excelência e cuidado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
