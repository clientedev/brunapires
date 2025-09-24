import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  Calendar,
  User,
  ExternalLink
} from "lucide-react";
import { type Contact } from "@shared/schema";

interface ContactViewerProps {
  contacts: Contact[];
  isLoading: boolean;
}

export default function ContactViewer({ contacts, isLoading }: ContactViewerProps) {
  const getServiceLabel = (service: string) => {
    switch (service) {
      case "plano-saude":
        return "Plano de Saúde";
      case "seguro-vida":
        return "Seguro de Vida";
      case "ambos":
        return "Ambos os serviços";
      default:
        return service;
    }
  };

  const getServiceColor = (service: string) => {
    switch (service) {
      case "plano-saude":
        return "bg-blue-100 text-blue-800";
      case "seguro-vida":
        return "bg-green-100 text-green-800";
      case "ambos":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleEmailContact = (contact: Contact) => {
    const subject = `Resposta sobre ${getServiceLabel(contact.service)}`;
    const body = `Olá ${contact.name},\n\nObrigado por entrar em contato conosco!\n\n`;
    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
  };

  const handleWhatsAppContact = (contact: Contact) => {
    const message = `Olá ${contact.name}! Recebemos sua mensagem sobre ${getServiceLabel(contact.service).toLowerCase()} e estamos prontos para ajudar!`;
    const phone = contact.phone.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/55${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
        <p className="mt-2 text-muted-foreground">Carregando contatos...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Mensagens de Contato</h2>
        <Badge variant="outline">{contacts.length} mensagens</Badge>
      </div>

      {contacts.length === 0 ? (
        <Card>
          <CardContent className="text-center py-8">
            <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Nenhuma mensagem</h3>
            <p className="text-muted-foreground">
              Ainda não há mensagens de contato para revisar.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <Card key={contact.id} data-testid={`contact-card-${contact.id}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span>{contact.name}</span>
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge className={getServiceColor(contact.service)}>
                      {getServiceLabel(contact.service)}
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(contact.createdAt).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{contact.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{contact.phone}</span>
                  </div>
                </div>

                {/* Message */}
                {contact.message && (
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium text-sm mb-2">Mensagem:</h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                      {contact.message}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEmailContact(contact)}
                    data-testid={`button-email-${contact.id}`}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Responder por Email
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleWhatsAppContact(contact)}
                    className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                    data-testid={`button-whatsapp-${contact.id}`}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}