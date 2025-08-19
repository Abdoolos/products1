import React from "react";
import { motion } from "framer-motion";
import {
    Coffee,
    Shirt,
    Palette,
    Package,
    Factory,
    Ship,
    Plane,
    Car,
    Clock,
    Globe,
    Award,
    CheckCircle,
    ArrowRight,
} from "lucide-react";

const SourcingAgentsLanding = () => {
    // البيانات النرويجية
    const services = [
        {
            id: 1,
            icon: Coffee,
            title: "Kaffe",
            description:
                "Import av høykvalitets kaffe fra de beste kaffedyrkende regionene.",
        },
        {
            id: 2,
            icon: Shirt,
            title: "Tekstiler",
            description:
                "Tekstilimport fra pålitelige leverandører med fokus på kvalitet og bærekraft.",
        },
        {
            id: 3,
            icon: Palette,
            title: "Hardicafis",
            description:
                "Spesialiserte håndverksprodukter og kunsthåndverk av høy kvalitet.",
        },
        {
            id: 4,
            icon: Package,
            title: "Råmaterialer",
            description:
                "Import av råvarer og materialer for industri og produksjon.",
        },
        {
            id: 5,
            icon: Factory,
            title: "Industri",
            description:
                "Industrielle produkter og utstyr for norske bedrifter.",
        },
        {
            id: 6,
            icon: Ship,
            title: "Import",
            description:
                "Komplett importtjenester med fokus på effektivitet og kvalitet.",
        },
    ];

    const features = [
        {
            id: 1,
            title: "Globalt nettverk",
            description:
                "Etablerte relasjoner med pålitelige leverandører verden over",
        },
        {
            id: 2,
            title: "Erfart team",
            description:
                "Spesialister med dyp kunnskap om internasjonale markeder",
        },
        {
            id: 3,
            title: "Kvalitet i hvert ledd",
            description: "Grundig kontroll og verifisering av alle produkter",
        },
        {
            id: 4,
            title: "Rask levering",
            description: "Effektive prosesser for raskest mulig leveransetid",
        },
        {
            id: 5,
            title: "Sertifisering & samsvar",
            description:
                "Sikrer at alle produkter møter norske og internasjonale standarder",
        },
        {
            id: 6,
            title: "Konkurransedyktige vilkår",
            description:
                "Best mulige priser gjennom sterke forhandlingsrelasjoner",
        },
    ];

    const countries = [
        { name: "India", specialties: "Tekstiler & Krydder", flag: "🇮🇳" },
        { name: "Brasil", specialties: "Kaffe & Sukker", flag: "🇧🇷" },
        { name: "Etiopia", specialties: "Kaffe & Korn", flag: "🇪🇹" },
        { name: "Bangladesh", specialties: "Tekstiler", flag: "🇧🇩" },
        { name: "Vietnam", specialties: "Ris & Elektronikk lett", flag: "🇻🇳" },
        { name: "Kenya", specialties: "Te & Kaffe", flag: "🇰🇪" },
    ];

    const shippingMethods = [
        {
            id: 1,
            icon: Ship,
            title: "Sjøtransport",
            description: "Kostnadseffektiv for volum",
        },
        {
            id: 2,
            icon: Plane,
            title: "Luftfrakt",
            description: "Rask levering for hastebehov",
        },
        {
            id: 3,
            icon: Car,
            title: "Landtransport",
            description: "Fleksibel regional distribusjon",
        },
        {
            id: 4,
            icon: Clock,
            title: "Express",
            description: "24–48 timers levering der mulig",
        },
    ];

    return (
        <div className="sourcing-agents-landing">
            {/* Header */}
            <header className="header-area sticky-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-6 col-6">
                            <div className="logo d-flex align-items-center">
                                <a href="#home">
                                    <div className="prohuset-logo default">
                                        <div className="logo-icon">
                                            <div className="icon-square"></div>
                                        </div>
                                        <div className="logo-text">
                                            <span className="brand-name">
                                                ProHuset
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 d-none d-lg-block">
                            <nav className="main-menu">
                                <ul>
                                    <li>
                                        <a href="#tjenester">Tjenester</a>
                                    </li>
                                    <li>
                                        <a href="#produkter">Produkter</a>
                                    </li>
                                    <li>
                                        <a href="#om-oss">Om Oss</a>
                                    </li>
                                    <li>
                                        <a href="#nettverk">Nettverk</a>
                                    </li>
                                    <li>
                                        <a href="#kontakt">Kontakt</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6">
                            <div className="header-right text-end">
                                <a href="#kontakt" className="btn btn-primary">
                                    Få et tilbud
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section
                id="home"
                className="hero-area section-pt-140 section-pb-140 bg-light"
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <motion.div
                                className="hero-content"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="hero-title">
                                    Presis innkjøp. <br />
                                    <span className="text-primary">
                                        Pålitelig levering
                                    </span>
                                    .
                                </h1>
                                <p className="hero-subtitle mt-4 mb-5">
                                    Vi hjelper norske bedrifter med å sikre
                                    riktige produkter til riktig pris – med
                                    kvalitet og etterlevelse i fokus.
                                </p>
                                <div className="hero-buttons">
                                    <motion.a
                                        href="#kontakt"
                                        className="btn btn-primary btn-lg me-3"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Få et tilbud
                                        <ArrowRight
                                            className="ms-2"
                                            size={20}
                                        />
                                    </motion.a>
                                    <motion.a
                                        href="#tjenester"
                                        className="btn btn-outline-dark btn-lg"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Se våre tjenester
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-lg-6">
                            <motion.div
                                className="hero-image text-center"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="./images/slider/slide2.png"
                                    alt="Norwegian Sourcing"
                                    className="img-fluid"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section
                id="tjenester"
                className="services-area section-pt-100 section-pb-70"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-title text-center mb-5">
                                <h2>Våre tjenester</h2>
                                <p>
                                    Komplett løsning for norske bedrifters
                                    innkjøpsbehov
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className="col-lg-4 col-md-6 mb-4"
                            >
                                <motion.div
                                    className="service-card h-100 p-4 bg-white rounded shadow-sm"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.02,
                                        boxShadow:
                                            "0 10px 30px rgba(0,0,0,0.1)",
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <motion.div
                                        className="service-icon mb-3"
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: 3,
                                            transition: { duration: 0.3 },
                                        }}
                                    >
                                        <service.icon
                                            size={48}
                                            className="text-primary"
                                        />
                                    </motion.div>
                                    <h4 className="service-title mb-3">
                                        {service.title}
                                    </h4>
                                    <p className="service-description text-muted">
                                        {service.description}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-area section-pt-100 section-pb-70 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-title text-center mb-5">
                                <h2>Hvorfor velge oss?</h2>
                                <p>
                                    Vår styrke ligger i erfaring, nettverk og
                                    dedikasjon til kvalitet
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {features.map((feature, index) => (
                            <div
                                key={feature.id}
                                className="col-lg-4 col-md-6 mb-4"
                            >
                                <motion.div
                                    className="feature-item text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <div className="feature-icon mb-3">
                                        <CheckCircle
                                            size={48}
                                            className="text-primary"
                                        />
                                    </div>
                                    <h5 className="feature-title mb-3">
                                        {feature.title}
                                    </h5>
                                    <p className="feature-description text-muted">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Countries/Network Section */}
            <section
                id="nettverk"
                className="network-area section-pt-100 section-pb-70"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-title text-center mb-5">
                                <h2>Vårt globale nettverk</h2>
                                <p>
                                    Etablerte relasjoner med
                                    kvalitetsleverandører over hele verden
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {countries.map((country, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4">
                                <motion.div
                                    className="country-card p-4 bg-white rounded shadow-sm text-center"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{ y: -5 }}
                                    viewport={{ once: true }}
                                >
                                    <div
                                        className="country-flag mb-3"
                                        style={{ fontSize: "3rem" }}
                                    >
                                        {country.flag}
                                    </div>
                                    <h5 className="country-name mb-2">
                                        {country.name}
                                    </h5>
                                    <p className="country-specialties text-muted">
                                        {country.specialties}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shipping/Logistics Section */}
            <section className="shipping-area section-pt-100 section-pb-70 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-title text-center mb-5">
                                <h2>Fleksible leveringsløsninger</h2>
                                <p>
                                    Vi tilpasser transportmetoden etter dine
                                    behov og tidsfrister
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {shippingMethods.map((method, index) => (
                            <div
                                key={method.id}
                                className="col-lg-3 col-md-6 mb-4"
                            >
                                <motion.div
                                    className="shipping-card p-4 bg-white rounded shadow-sm text-center h-100"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{ y: -5 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="shipping-icon mb-3">
                                        <method.icon
                                            size={48}
                                            className="text-primary"
                                        />
                                    </div>
                                    <h5 className="shipping-title mb-3">
                                        {method.title}
                                    </h5>
                                    <p className="shipping-description text-muted">
                                        {method.description}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                id="kontakt"
                className="cta-area section-pt-100 section-pb-100 bg-primary text-white"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <motion.div
                                className="cta-content"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <motion.h2
                                    className="cta-title mb-4"
                                    whileHover={{
                                        scale: 1.05,
                                        textShadow:
                                            "2px 2px 4px rgba(0,0,0,0.3)",
                                    }}
                                    style={{
                                        fontSize: "2.5rem",
                                        fontWeight: "bold",
                                        color: "#ffffff",
                                        textShadow:
                                            "1px 1px 2px rgba(0,0,0,0.2)",
                                    }}
                                >
                                    Klar til å starte?
                                </motion.h2>
                                <motion.p
                                    className="cta-subtitle mb-5"
                                    whileHover={{
                                        scale: 1.02,
                                        color: "#ffffff",
                                    }}
                                    style={{
                                        fontSize: "1.2rem",
                                        color: "rgba(255,255,255,0.9)",
                                        textShadow:
                                            "1px 1px 2px rgba(0,0,0,0.1)",
                                    }}
                                >
                                    La oss skreddersy en løsning for din
                                    bedrift. Ta kontakt i dag for en
                                    uforpliktende samtale.
                                </motion.p>
                                <div className="cta-buttons">
                                    <motion.a
                                        href="mailto:post@norsource.no"
                                        className="btn btn-lg me-3"
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "1.1rem",
                                            padding: "12px 30px",
                                            borderRadius: "8px",
                                            backgroundColor: "#ffffff",
                                            color: "#212529",
                                            border: "2px solid #ffffff",
                                            boxShadow:
                                                "0 4px 15px rgba(0,0,0,0.2)",
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow:
                                                "0 6px 25px rgba(0,0,0,0.3)",
                                            backgroundColor: "#212529",
                                            color: "#ffffff",
                                            borderColor: "#212529",
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Få et tilbud
                                    </motion.a>
                                    <motion.a
                                        href="tel:+4722334455"
                                        className="btn btn-outline-light btn-lg"
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "1.1rem",
                                            padding: "12px 30px",
                                            borderRadius: "8px",
                                            borderWidth: "2px",
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor:
                                                "rgba(255,255,255,0.2)",
                                            borderColor: "#ffffff",
                                            color: "#ffffff",
                                            boxShadow:
                                                "0 4px 15px rgba(255,255,255,0.2)",
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Kontakt oss
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-area section-pt-70 section-pb-40 bg-dark text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="footer-widget">
                                <h5 className="widget-title mb-4">NorSource</h5>
                                <p className="widget-text">
                                    Din pålitelige partner for innkjøp og import
                                    til Norge. Vi sikrer kvalitet, etterlevelse
                                    og konkurransedyktige priser.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4">
                            <div className="footer-widget">
                                <h6 className="widget-title mb-4">Tjenester</h6>
                                <ul className="widget-links">
                                    <li>
                                        <a href="#tjenester">Produktinnkjøp</a>
                                    </li>
                                    <li>
                                        <a href="#tjenester">
                                            Kvalitetskontroll
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#tjenester">
                                            Leverandørrevisjon
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#tjenester">Logistikk</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4">
                            <div className="footer-widget">
                                <h6 className="widget-title mb-4">Produkter</h6>
                                <ul className="widget-links">
                                    <li>
                                        <a href="#nettverk">Tekstiler</a>
                                    </li>
                                    <li>
                                        <a href="#nettverk">Kaffe & Te</a>
                                    </li>
                                    <li>
                                        <a href="#nettverk">Elektronikk</a>
                                    </li>
                                    <li>
                                        <a href="#nettverk">Matvarer</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="footer-widget">
                                <h6 className="widget-title mb-4">Kontakt</h6>
                                <div className="contact-info">
                                    <p>
                                        <strong>E-post:</strong>{" "}
                                        post@norsource.no
                                    </p>
                                    <p>
                                        <strong>Telefon:</strong> +47 22 33 44
                                        55
                                    </p>
                                    <p>
                                        <strong>Adresse:</strong> Oslo, Norge
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-bottom text-center pt-4 border-top border-secondary">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <p className="copyright-text mb-0">
                                            © 2024 NorSource. Alle rettigheter
                                            forbeholdt. |
                                            <button
                                                type="button"
                                                className="btn btn-link text-light p-0 ms-2 me-2"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                Personvern
                                            </button>{" "}
                                            |
                                            <button
                                                type="button"
                                                className="btn btn-link text-light p-0 ms-2"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                Vilkår
                                            </button>
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="designer-credit d-flex align-items-center justify-content-md-end justify-content-center mt-3 mt-md-0">
                                            <img
                                                src="./images/team/rounded-img1.png"
                                                alt="Abdullah Alawiss"
                                                className="designer-avatar me-2"
                                                style={{
                                                    width: "32px",
                                                    height: "32px",
                                                    borderRadius: "50%",
                                                    border: "2px solid rgba(89, 227, 167, 0.3)",
                                                }}
                                            />
                                            <small className="text-muted">
                                                Design by{" "}
                                                <span className="text-primary fw-bold">
                                                    Abdullah Alawiss
                                                </span>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default SourcingAgentsLanding;
