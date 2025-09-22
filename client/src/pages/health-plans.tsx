import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Users, Building, User } from "lucide-react";

export default function HealthPlans() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-foreground mb-8" data-testid="text-health-plans-title">
              Planos de Saúde
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-2xl font-display font-medium text-foreground mb-6" data-testid="text-health-plans-subtitle">
              Nossa Especialidade Principal
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed" data-testid="text-health-plans-description">
              Com mais de 7 anos de experiência, analisamos seu perfil, comparamos todas as operadoras do mercado e encontramos a solução ideal para você, sua família ou empresa. Transparência total em cada etapa do processo.
            </p>
            <Link href="/contato">
              <Button size="lg" className="px-12 py-4 text-lg font-semibold shadow-xl" data-testid="button-consultoria-especializada">
                Falar com Especialista Agora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-8" data-testid="text-benefits-title">
                Nossa Metodologia Especializada
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-benefits-description">
                Processo estruturado que garante a melhor escolha em planos de saúde com total transparência e acompanhamento personalizado
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="bg-background rounded-2xl p-8 shadow-lg" data-testid="benefit-economia">
                <div className="mb-6">
                  <div className="text-6xl font-display font-bold text-primary mb-2">1</div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">Análise Personalizada</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Avaliamos seu perfil médico, necessidades familiares, orçamento disponível e preferências de rede credenciada para mapear exatamente o que você precisa.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-lg" data-testid="benefit-transparencia">
                <div className="mb-6">
                  <div className="text-6xl font-display font-bold text-primary mb-2">2</div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">Comparação Total</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Cotamos e comparamos todas as principais operadoras do mercado, apresentando opções claras com detalhamento completo de coberturas, carências e custos.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-lg" data-testid="benefit-acompanhamento">
                <div className="mb-6">
                  <div className="text-6xl font-display font-bold text-primary mb-2">3</div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">Suporte Integral</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Acompanhamos todo o processo: desde a contratação até o primeiro uso, garantindo que você saiba exatamente como utilizar seu plano de saúde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Types Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-8" data-testid="text-plans-comparison-title">
                Soluções para Cada Perfil
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-plans-comparison-description">
                Seja qual for sua necessidade, temos a expertise para encontrar a solução ideal no mercado de planos de saúde
              </p>
            </div>

            <div className="space-y-12">
              {/* Individual Plans */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-testid="section-plano-individual">
                <div className="order-2 lg:order-1">
                  <div className="bg-primary/5 rounded-2xl p-8">
                    <h3 className="text-3xl font-display font-bold text-foreground mb-6">Planos Individuais</h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Perfeito para profissionais autônomos, empreendedores e pessoas que buscam cobertura personalizada. 
                      Analisamos seu perfil de saúde e preferências para encontrar o plano com melhor custo-benefício.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div>
                        <div className="text-2xl font-bold text-primary mb-1">Flexível</div>
                        <div className="text-sm text-muted-foreground">Coberturas adaptáveis</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary mb-1">Nacional</div>
                        <div className="text-sm text-muted-foreground">Rede em todo Brasil</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary mb-1">Especializada</div>
                        <div className="text-sm text-muted-foreground">Médicos especialistas</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary mb-1">Completa</div>
                        <div className="text-sm text-muted-foreground">Todas as modalidades</div>
                      </div>
                    </div>
                    <Link href="/contato">
                      <Button size="lg" className="px-8 py-3 font-semibold" data-testid="button-cotacao-individual">
                        Solicitar Consultoria Individual
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="order-1 lg:order-2 text-center">
                  <div className="text-6xl mb-6">👤</div>
                  <h4 className="text-2xl font-display font-semibold text-foreground mb-4">Proteção Individual</h4>
                  <p className="text-muted-foreground">Cobertura personalizada para suas necessidades específicas</p>
                </div>
              </div>

              {/* Family Plans - Most Popular */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-muted rounded-3xl p-8" data-testid="section-plano-familiar">
                <div className="text-center">
                  <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">Mais Popular</div>
                  <div className="text-6xl mb-6">👨‍👩‍👧‍👦</div>
                  <h4 className="text-2xl font-display font-semibold text-foreground mb-4">Proteção Familiar</h4>
                  <p className="text-muted-foreground">Segurança completa para toda a família com economia escalonada</p>
                </div>
                <div>
                  <div className="bg-background rounded-2xl p-8 shadow-lg">
                    <h3 className="text-3xl font-display font-bold text-foreground mb-6">Planos Familiares</h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      A opção mais procurada! Cobertura completa para titular e dependentes com descontos progressivos. 
                      Incluímos pediatria especializada e facilitamos a gestão de múltiplos usuários.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">Economia Escalonada</h4>
                          <p className="text-muted-foreground text-sm">Desconto progressivo por dependente adicionado</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">Pediatria Especializada</h4>
                          <p className="text-muted-foreground text-sm">Cobertura completa para crianças e adolescentes</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">Gestão Simplificada</h4>
                          <p className="text-muted-foreground text-sm">Um único contrato para toda família</p>
                        </div>
                      </div>
                    </div>
                    <Link href="/contato">
                      <Button size="lg" className="px-8 py-3 font-semibold w-full" data-testid="button-cotacao-familiar">
                        Consultar Planos Familiares
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Corporate Plans */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-testid="section-plano-empresarial">
                <div className="order-2 lg:order-1">
                  <div className="bg-background rounded-2xl p-8 border border-border">
                    <h3 className="text-3xl font-display font-bold text-foreground mb-6">Planos Empresariais</h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Soluções corporativas completas para empresas de todos os tamanhos. Cuidamos de toda gestão administrativa 
                      e oferecemos relatórios detalhados para controle total dos benefícios oferecidos.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">PME</div>
                        <div className="text-sm text-muted-foreground">2-99 vidas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">Corporate</div>
                        <div className="text-sm text-muted-foreground">100+ vidas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">Startups</div>
                        <div className="text-sm text-muted-foreground">Soluções flexíveis</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">Gestão</div>
                        <div className="text-sm text-muted-foreground">Suporte completo</div>
                      </div>
                    </div>
                    <Link href="/contato">
                      <Button variant="outline" size="lg" className="px-8 py-3 font-semibold border-2" data-testid="button-cotacao-empresarial">
                        Consultoria Empresarial
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="order-1 lg:order-2 text-center">
                  <div className="text-6xl mb-6">🏢</div>
                  <h4 className="text-2xl font-display font-semibold text-foreground mb-4">Soluções Corporativas</h4>
                  <p className="text-muted-foreground">Benefícios estruturados para empresas com gestão administrativa completa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-8" data-testid="text-faq-title">
                Dúvidas Frequentes
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-faq-description">
                Nossa expertise em planos de saúde responde às principais questões dos nossos clientes
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" data-testid="faq-como-escolher">
                <AccordionTrigger className="text-left">Como escolher o plano ideal?</AccordionTrigger>
                <AccordionContent>
                  Nossa consultoria analisa seu perfil, necessidades médicas, orçamento e preferências para encontrar a melhor opção. Consideramos fatores como rede credenciada, cobertura, carências e custo-benefício.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" data-testid="faq-carencia">
                <AccordionTrigger className="text-left">Qual o prazo de carência?</AccordionTrigger>
                <AccordionContent>
                  Os prazos de carência variam conforme o procedimento e operadora. Urgência e emergência têm carência de 24h, consultas até 30 dias, exames até 30 dias, e cirurgias até 180 dias. Explicamos todos os prazos durante a consultoria.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" data-testid="faq-dependentes">
                <AccordionTrigger className="text-left">Posso incluir dependentes depois?</AccordionTrigger>
                <AccordionContent>
                  Sim, na maioria dos casos é possível incluir dependentes posteriormente, respeitando as carências. Analisamos as melhores condições para inclusão de dependentes e orientamos sobre documentação necessária.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" data-testid="faq-reajuste">
                <AccordionTrigger className="text-left">Como funciona o reajuste?</AccordionTrigger>
                <AccordionContent>
                  Os reajustes seguem diretrizes da ANS (Agência Nacional de Saúde Suplementar). Há reajuste anual autorizado pela ANS e reajuste por mudança de faixa etária. Explicamos todo o processo e acompanhamos os reajustes para garantir transparência.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" data-testid="faq-cobertura">
                <AccordionTrigger className="text-left">O que está coberto no plano?</AccordionTrigger>
                <AccordionContent>
                  A cobertura varia por tipo de plano, mas geralmente inclui consultas, exames, internações, cirurgias, urgência e emergência. Alguns planos incluem também obstetrícia, odontologia e terapias. Detalhamos toda a cobertura durante a consultoria.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" data-testid="faq-rede-credenciada">
                <AccordionTrigger className="text-left">Como consultar a rede credenciada?</AccordionTrigger>
                <AccordionContent>
                  Fornecemos acesso completo à rede credenciada de cada operadora, incluindo hospitais, clínicas, laboratórios e médicos. Ajudamos a verificar se seus médicos de preferência estão na rede e orientamos sobre como utilizá-la.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground mb-8" data-testid="text-cta-plans-title">
              Consultoria Gratuita e Sem Compromisso
            </h2>
            <div className="w-24 h-1 bg-primary-foreground/30 mx-auto mb-8"></div>
            <p className="text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="text-cta-plans-description">
              Agende uma conversa com nossos especialistas. Analisamos seu perfil, comparamos todas as opções do mercado e apresentamos as melhores alternativas para sua situação específica.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contato">
                <Button variant="secondary" size="lg" className="px-12 py-4 text-lg font-semibold shadow-xl" data-testid="button-consultoria-agora">
                  Agendar Consultoria Gratuita
                </Button>
              </Link>
              <div className="text-primary-foreground/70 text-sm">
                <div className="font-semibold">✓ Sem custo</div>
                <div className="font-semibold">✓ Sem compromisso</div>
                <div className="font-semibold">✓ Total transparência</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
