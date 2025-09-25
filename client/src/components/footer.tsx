import { Link } from "wouter";
import { useState } from "react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import bpcLogo from "@assets/image_1758570352685.png";

export default function Footer() {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleAdminLogin = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Login realizado",
          description: "Redirecionando para o painel administrativo...",
        });
        setShowAdminLogin(false);
        window.location.href = '/admin';
      } else {
        toast({
          title: "Erro",
          description: "Senha incorreta",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao fazer login",
        variant: "destructive",
      });
    }
    setIsLoading(false);
    setPassword("");
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img 
                src={bpcLogo} 
                alt="BPC Planejamento e Consultoria em Planos de Saúde" 
                className="h-16 w-auto brightness-0 invert"
                data-testid="img-footer-logo"
              />
            </div>
            <p className="text-background/70 text-sm">
              Desde 2018 oferecendo consultoria especializada em planos de saúde, com transparência e comprometimento total.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/planos-saude" data-testid="link-footer-planos" className="hover:text-primary transition-colors">
                  Planos de Saúde
                </Link>
              </li>
              <li>
                <Link href="/seguro-vida" data-testid="link-footer-seguro" className="hover:text-primary transition-colors">
                  Seguro de Vida
                </Link>
              </li>
              <li>
                <Link href="/contato" data-testid="link-footer-consultoria" className="hover:text-primary transition-colors">
                  Consultoria
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/sobre" data-testid="link-footer-sobre" className="hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/blog" data-testid="link-footer-blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" data-testid="link-footer-contato" className="hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p data-testid="text-footer-email">bpcplanejamento@outlook.com</p>
              <p data-testid="text-footer-horario">Segunda a Sexta: 8h às 18h</p>
              <p data-testid="text-footer-atendimento">Atendimento online</p>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 flex justify-between items-center">
          <p className="text-background/70 text-sm" data-testid="text-copyright">
            © 2025 BPC Planejamento e Consultoria em Planos de Saúde. Todos os direitos reservados.
          </p>
          <button
            onClick={() => setShowAdminLogin(true)}
            className="text-background/30 hover:text-background/50 transition-colors p-1"
            data-testid="button-admin-access"
            title="Acesso administrativo"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>

        {/* Admin Login Dialog */}
        <Dialog open={showAdminLogin} onOpenChange={setShowAdminLogin}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Acesso Administrativo</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-password">Senha</Label>
                <Input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAdminLogin()}
                  placeholder="Digite a senha administrativa"
                  data-testid="input-admin-password"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowAdminLogin(false);
                    setPassword("");
                  }}
                  data-testid="button-cancel-login"
                >
                  Cancelar
                </Button>
                <Button
                  onClick={handleAdminLogin}
                  disabled={!password || isLoading}
                  data-testid="button-submit-login"
                >
                  {isLoading ? "Entrando..." : "Entrar"}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </footer>
  );
}
