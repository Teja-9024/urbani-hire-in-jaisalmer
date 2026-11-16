import { Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

const TopBar = () => {
    return (
        <div className="hidden md:block bg-[#fbf8ef] text-foreground py-2 border-b border-border/40">
            <div className="container-custom px-4 flex justify-between items-center text-xs font-medium tracking-wide">
                {/* Left Side: Call & WhatsApp */}
                <div className="flex items-center gap-6">
                    <a
                        href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                        className="flex items-center gap-1.5 hover:text-primary transition-colors duration-300"
                    >
                        <MessageCircle className="w-3.5 h-3.5 text-primary" />
                        <span>{CONTACT_INFO.phoneDisplay}</span>
                    </a>
                    <a
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="flex items-center gap-1.5 hover:text-primary transition-colors duration-300"
                    >
                        <Phone className="w-3.5 h-3.5 text-primary" />
                        <span>{CONTACT_INFO.phoneDisplay}</span>
                    </a>
                </div>

                {/* Right Side: Email & Socials */}
                <div className="flex items-center gap-6">
                    <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="flex items-center gap-1.5 hover:text-primary transition-colors duration-300"
                    >
                        <Mail className="w-3.5 h-3.5 text-primary" />
                        <span>{CONTACT_INFO.email}</span>
                    </a>
                    <div className="flex items-center gap-3 pl-2 border-l border-border/50">
                        <a
                            href={CONTACT_INFO.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-primary transition-colors duration-300"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-3.5 h-3.5" />
                        </a>
                        <a
                            href={CONTACT_INFO.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-primary transition-colors duration-300"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
