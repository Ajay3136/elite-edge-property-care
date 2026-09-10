import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Droplets,
  Flower2,
  Leaf,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Shovel,
  Snowflake,
  Sparkles,
  Sun,
  Wind,
  X,
} from "lucide-react";
import "./App.css";

const seasons = {
  summer: {
    icon: Sun,
    eyebrow: "Outdoor care, sharpened to the last blade",
    headline: "Precision Lawn Care. Elite Curb Appeal.",
    description:
      "A healthier lawn and a cleaner first impression, handled by a local crew that shows up on time and leaves your property better than we found it.",
    toggle: "Switch to Winter Mode",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=90",
    imageAlt: "Bright landscaped garden with a carefully maintained lawn",
    imageLabel: "SUMMER DETAIL",
    imageCaption: "A sharp finish changes the whole property.",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1100&q=85",
        alt: "Landscaped garden and maintained lawn",
        label: "Garden refresh",
        detail: "Westwood residence",
      },
      {
        image:
          "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1100&q=85",
        alt: "Healthy green lawn in a residential yard",
        label: "Weekly lawn care",
        detail: "Maple Heights residence",
      },
      {
        image:
          "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1100&q=85",
        alt: "Fresh grass with crisp mowing lines",
        label: "Curb appeal",
        detail: "North Commons residence",
      },
    ],
    beforeAfter: {
      before:
        "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=85",
      after:
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=85",
      beforeAlt: "Lawn before seasonal detail work",
      afterAlt: "Landscaped lawn after seasonal detail work",
      detail: "One visit. A completely different first impression.",
    },
    services: [
      {
        icon: Leaf,
        title: "Grass Cutting",
        description:
          "Consistent mowing, crisp lines, and a lawn that looks freshly finished every week.",
      },
      {
        icon: Sparkles,
        title: "Lawn Edging",
        description:
          "Sharp borders along walks, beds, and driveways for that unmistakable elite finish.",
      },
      {
        icon: Wind,
        title: "Core Aeration",
        description:
          "Open compacted soil, improve drainage, and help your grass grow thicker from the roots.",
      },
      {
        icon: Flower2,
        title: "Flowerbed Care",
        description:
          "Seasonal detail work, weeding, and cleanup that keeps every bed looking intentional.",
      },
    ],
    options: [
      "Weekly Mowing",
      "Grass Cutting",
      "Weed Removal",
      "Lawn Edging",
      "Core Aeration",
      "Flowerbed Care",
      "Spring/Fall Cleanup",
    ],
    cardNote: "Most seasonal cleanups booked within 48 hours.",
  },
  winter: {
    icon: Snowflake,
    eyebrow: "Snow response that keeps your day moving",
    headline: "Reliable Snow Clearing. Never Get Snowed In.",
    description:
      "From the first flake to the final thaw, our winter crew keeps driveways, sidewalks, and commercial lots safe, open, and ready for business.",
    toggle: "Switch to Summer Mode",
    image:
      "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=1600&q=90",
    imageAlt: "Fresh snow covering a quiet residential landscape",
    imageLabel: "WINTER RESPONSE",
    imageCaption: "Clear paths. Calm mornings. Every storm.",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=1100&q=85",
        alt: "Fresh snow covering a quiet landscape",
        label: "After the storm",
        detail: "Westwood commercial lot",
      },
      {
        image:
          "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1100&q=85",
        alt: "Snow cleared from a winter roadway",
        label: "Route clearing",
        detail: "Maple Heights drive",
      },
      {
        image:
          "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1100&q=85",
        alt: "Snowy trees beside a cleared path",
        label: "Safe walkways",
        detail: "North Commons plaza",
      },
    ],
    beforeAfter: {
      before:
        "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=900&q=85",
      after:
        "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=900&q=85",
      beforeAlt: "Snow covered access route before clearing",
      afterAlt: "Accessible route after snow clearing",
      detail: "Clear access. Safer starts. Every storm.",
    },
    services: [
      {
        icon: Shovel,
        title: "Driveway & Lot Plowing",
        description:
          "Dependable routes and clean pushes keep your home or business accessible after every storm.",
      },
      {
        icon: Snowflake,
        title: "Sidewalk Shoveling",
        description:
          "Clear, walkable paths for residents, customers, and teams before the morning rush.",
      },
      {
        icon: Droplets,
        title: "Salting & De-icing",
        description:
          "Proactive ice control applied where it matters most, with careful attention to surfaces.",
      },
      {
        icon: Clock3,
        title: "24/7 Storm Response",
        description:
          "Overnight storms do not wait for business hours, and neither does our response team.",
      },
    ],
    options: [
      "Driveway Plowing",
      "Lot Plowing",
      "Sidewalk Shoveling",
      "Salting & De-icing",
      "24/7 Storm Response",
    ],
    cardNote:
      "Storm routes are prioritized by arrival time, not property size.",
  },
};

const testimonials = [
  {
    quote:
      "The cleanest lines on our street, every single week. They care about the details.",
    name: "Mara T.",
    neighborhood: "Westwood",
  },
  {
    quote:
      "We got a quote in the morning and the cleanup was finished that afternoon. Excellent crew.",
    name: "James R.",
    neighborhood: "Maple Heights",
  },
  {
    quote:
      "When the snow hit, Elite Edge had our lot open before our first employees arrived.",
    name: "Priya S.",
    neighborhood: "North Commons",
  },
];

const formatOntarioAddress = (result) => {
  const address = result.address || {};
  const street = [address.house_number, address.road]
    .filter(Boolean)
    .join(" ");
  const city =
    address.city || address.town || address.village || address.municipality;
  const province = address.state || "Ontario";

  return [street, city, province, address.postcode].filter(Boolean).join(", ");
};

function App() {
  const [season, setSeason] = useState("summer");
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const current = seasons[season];
  const SeasonIcon = current.icon;
  const changeSeason = () => {
    setSeason(season === "summer" ? "winter" : "summer");
    setGalleryIndex(0);
  };
  const moveGallery = (direction) =>
    setGalleryIndex(
      (galleryIndex + direction + current.gallery.length) %
        current.gallery.length,
    );
  const [address, setAddress] = useState("");
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [addressLookupError, setAddressLookupError] = useState("");
  const [submitStatus, setSubmitStatus] = useState("idle");
  const handleAddressChange = (event) => {
    const value = event.target.value;
    setAddress(value);
    setAddressLookupError("");
    if (value.trim().length < 3) setAddressSuggestions([]);
  };

  useEffect(() => {
    if (address.trim().length < 3) {
      return undefined;
    }

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      try {
        const endpoint = new URL("https://nominatim.openstreetmap.org/search");
        endpoint.searchParams.set(
          "q",
          `${address.trim()}, Ontario, Canada`,
        );
        endpoint.searchParams.set("format", "jsonv2");
        endpoint.searchParams.set("addressdetails", "1");
        endpoint.searchParams.set("countrycodes", "ca");
        endpoint.searchParams.set("limit", "5");
        const response = await fetch(endpoint, {
          headers: { Accept: "application/json" },
          signal: controller.signal,
        });
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("Amazon Location rejected this API key");
          }
          throw new Error("Address lookup failed");
        }
        const data = await response.json();
        const results = (Array.isArray(data) ? data : [])
          .filter(
            (result) => result.address?.state?.toLowerCase() === "ontario",
          )
          .map((result) => ({
            place_id: result.place_id,
            display_name: formatOntarioAddress(result),
          }))
          .filter((result) => result.display_name);
        setAddressSuggestions(results);
      } catch (error) {
        if (error.name !== "AbortError") {
          setAddressSuggestions([]);
          setAddressLookupError(error.message);
        }
      }
    }, 350);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [address]);

  const chooseAddress = (suggestion) => {
    setAddress(suggestion.display_name);
    setAddressSuggestions([]);
  };

  const handleQuoteSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append(
      "_subject",
      `New ${season} quote request from Elite Edge Property Care`,
    );
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/ajaynxpro@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        },
      );
      if (!response.ok) throw new Error("Quote request failed");
      form.reset();
      setAddress("");
      setAddressSuggestions([]);
      setAddressLookupError("");
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <div
      className={`site-shell ${season === "winter" ? "theme-winter" : "theme-summer"}`}
    >
      <div className="announcement-bar">
        <span>
          Locally owned. Proudly maintaining the places you call home.
        </span>
        <a href="#quote">
          Get a free estimate <ArrowRight size={14} />
        </a>
      </div>
      <header className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label="Elite Edge Property Care home"
        >
          <span className="brand-mark">
            <SeasonIcon size={19} strokeWidth={2.5} />
          </span>
          <span>
            <strong>ELITE EDGE</strong>
            <small>PROPERTY CARE</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">Our work</a>
          <a href="#why-us">Why us</a>
          <a href="#reviews">Reviews</a>
        </nav>
        <div className="header-actions">
          <button
            className="season-toggle"
            type="button"
            onClick={changeSeason}
          >
            <SeasonIcon size={16} /> {current.toggle}
          </button>
          <a className="call-button" href="tel:14167324653">
            <Phone size={16} /> <span>(800) 555-0199</span>
          </a>
          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav">
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#work" onClick={() => setMenuOpen(false)}>
              Our work
            </a>
            <a href="#why-us" onClick={() => setMenuOpen(false)}>
              Why us
            </a>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>
              Reviews
            </a>
          </nav>
        )}
      </header>
      <main id="top">
        <section className="hero-section page-width">
          <div className="hero-copy reveal-up">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              {current.eyebrow}
            </div>
            <h1 key={season}>{current.headline}</h1>
            <p>{current.description}</p>
            <div className="trust-badges">
              <span>
                <Check size={14} /> Licensed & Insured
              </span>
              <span>
                <Check size={14} /> Same-Day Free Quotes
              </span>
              <span>
                <Check size={14} /> No Binding Contracts
              </span>
            </div>
            <a className="hero-link" href="#services">
              Explore our services <ArrowRight size={17} />
            </a>
          </div>
          <div className="quote-wrap reveal-up" id="quote">
            <div className="hero-image">
              <img key={season} src={current.image} alt={current.imageAlt} />
              <div className="hero-image-shade"></div>
              <div className="hero-image-caption">
                <span>
                  <SeasonIcon size={14} />{" "}
                  {season === "summer"
                    ? "Seasonal lawn care"
                    : "24/7 storm response"}
                </span>
                <strong>
                  {season === "summer"
                    ? "The details make the difference."
                    : "Clear paths. Calm mornings."}
                </strong>
              </div>
            </div>
            <div className="quote-card">
              <div className="quote-heading">
                <div>
                  <span className="card-kicker">GET STARTED</span>
                  <h2>
                    Make your property
                    <br />
                    <em>the best on the block.</em>
                  </h2>
                </div>
                <span className="quote-icon">
                  <SeasonIcon size={22} />
                </span>
              </div>
              <p className="quote-intro">
                Tell us a little about your property. We will handle the rest.
              </p>
              <form onSubmit={handleQuoteSubmit}>
                <label>
                  Full Name
                  <input name="name" type="text" placeholder="Jane Smith" required />
                </label>
                <label>
                  Phone Number
                  <input name="phone" type="tel" placeholder="(416) 732-4653" required />
                </label>
                <label>
                  Email Address
                  <input name="email" type="email" placeholder="jane@example.com" required />
                </label>
                <label>
                  Property Address
                  <div className="address-field">
                    <input
                      name="address"
                      type="text"
                      value={address}
                      onChange={handleAddressChange}
                      onBlur={() => setTimeout(() => setAddressSuggestions([]), 150)}
                      placeholder="123 Main Street, Ontario"
                      autoComplete="street-address"
                      required
                    />
                    {addressSuggestions.length > 0 && (
                      <div className="address-suggestions" role="listbox" aria-label="Ontario address suggestions">
                        {addressSuggestions.map((suggestion) => (
                          <button key={suggestion.place_id} type="button" onMouseDown={(event) => event.preventDefault()} onClick={() => chooseAddress(suggestion)}>
                            {suggestion.display_name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {addressLookupError && (
                    <span className="address-error" role="status">
                      Address suggestions are unavailable right now. You can still type the full address manually.
                    </span>
                  )}
                </label>
                <label>
                  Service Needed
                  <div className="select-wrap">
                    <select name="service" defaultValue={current.options[0]} key={season}>
                      {current.options.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} />
                  </div>
                </label>
                <label>
                  More Details *<span aria-hidden="true"></span>
                  <textarea name="details" rows="3" placeholder="Tell us about the property or service you need." required />
                </label>
                <button className="submit-button" type="submit" disabled={submitStatus === "sending"}>
                  {submitStatus === "sending" ? "Sending request..." : "Request Free Quote"} {submitStatus !== "sending" && <ArrowRight size={17} />}
                </button>
              </form>
              <div className="quote-note">
                <ShieldCheck size={15} /> Your information stays private. No
                spam, ever.
              </div>
              {submitStatus === "success" && <p className="form-feedback success" role="status">Thanks. Your request was sent, and we will be in touch shortly.</p>}
              {submitStatus === "error" && <p className="form-feedback error" role="alert">We could not send that request. Please call us at (416) 732-4653.</p>}
            </div>
          </div>
        </section>
        <section
          className="seasonal-visual page-width"
          aria-label={`${season} service highlight`}
        >
          <img key={season} src={current.image} alt={current.imageAlt} />
          <div className="visual-shade"></div>
          <div className="visual-copy">
            <span className="visual-label">{current.imageLabel}</span>
            <strong>{current.imageCaption}</strong>
          </div>
          <span className="visual-season">
            <SeasonIcon size={16} />{" "}
            {season === "summer"
              ? "Made for the growing season"
              : "Ready for the next storm"}
          </span>
        </section>
        <section className="services-section page-width" id="services">
          <div className="section-heading">
            <div>
              <span className="card-kicker">WHAT WE DO</span>
              <h2>
                Care for every <em>season.</em>
              </h2>
            </div>
            <p>{current.cardNote}</p>
          </div>
          <div className="service-grid">
            {current.services.map(
              ({ icon: Icon, title, description }, index) => (
                <article className="service-card" key={title}>
                  <div className="service-number">0{index + 1}</div>
                  <div className="service-icon">
                    <Icon size={23} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href="#quote" aria-label={`Get a quote for ${title}`}>
                    <ArrowRight size={17} />
                  </a>
                </article>
              ),
            )}
          </div>
        </section>
        <section className="work-section page-width" id="work">
          <div className="section-heading work-heading">
            <div>
              <span className="card-kicker">A LOOK AT THE WORK</span>
              <h2>
                Good work is <em>visible.</em>
              </h2>
            </div>
            <div className="slider-controls">
              <button
                type="button"
                onClick={() => moveGallery(-1)}
                aria-label="Previous project"
              >
                <ChevronLeft size={19} />
              </button>
              <button
                type="button"
                onClick={() => moveGallery(1)}
                aria-label="Next project"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
          <div className="work-slider">
            <div
              className="work-track"
              style={{ transform: `translateX(-${galleryIndex * 100}%)` }}
            >
              {current.gallery.map((project) => (
                <article className="work-slide" key={project.label}>
                  <img src={project.image} alt={project.alt} />
                  <div className="work-slide-shade"></div>
                  <div className="work-slide-copy">
                    <span>{project.label}</span>
                    <strong>{project.detail}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="slider-footer">
            <div
              className="slider-dots"
              role="tablist"
              aria-label="Project gallery"
            >
              {current.gallery.map((project, index) => (
                <button
                  key={project.label}
                  className={index === galleryIndex ? "active" : ""}
                  type="button"
                  onClick={() => setGalleryIndex(index)}
                  aria-label={`Show ${project.label}`}
                  aria-selected={index === galleryIndex}
                  role="tab"
                />
              ))}
            </div>
            <span>
              Swipe to explore our recent work <ArrowRight size={14} />
            </span>
          </div>
        </section>
        <section className="before-after-section page-width">
          <div className="section-heading">
            <div>
              <span className="card-kicker">THE DIFFERENCE</span>
              <h2>
                See the <em>edge.</em>
              </h2>
            </div>
            <p>{current.beforeAfter.detail}</p>
          </div>
          <div className="before-after-grid">
            <figure>
              <img
                src={current.beforeAfter.before}
                alt={current.beforeAfter.beforeAlt}
              />
              <figcaption>
                Before <span>Starting point</span>
              </figcaption>
            </figure>
            <div className="before-after-divider" aria-hidden="true">
              <ArrowRight size={16} />
            </div>
            <figure>
              <img
                src={current.beforeAfter.after}
                alt={current.beforeAfter.afterAlt}
              />
              <figcaption>
                After <span>Elite Edge finish</span>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="proof-section" id="why-us">
          <div className="page-width">
            <div className="proof-intro">
              <span className="card-kicker">THE ELITE EDGE</span>
              <h2>
                A better standard
                <br />
                for <em>property care.</em>
              </h2>
              <p>
                We believe great service is more than a finished job. It is
                clear communication, reliable timing, and the confidence that
                someone is looking out for your property.
              </p>
            </div>
            <div className="proof-grid">
              <article>
                <span>
                  <Clock3 size={21} />
                </span>
                <h3>Reliable Schedule</h3>
                <p>
                  We show up when we say we will, with reminders before each
                  visit.
                </p>
              </article>
              <article>
                <span>
                  <ShieldCheck size={21} />
                </span>
                <h3>Fully Insured</h3>
                <p>
                  Professional work backed by full liability coverage and a
                  careful crew.
                </p>
              </article>
              <article>
                <span>
                  <Sparkles size={21} />
                </span>
                <h3>Transparent Pricing</h3>
                <p>
                  Clear quotes, simple plans, and no surprise charges after the
                  work is done.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="reviews-section page-width" id="reviews">
          <div className="section-heading">
            <div>
              <span className="card-kicker">KIND WORDS</span>
              <h2>
                Trusted by your <em>neighbors.</em>
              </h2>
            </div>
            <div className="rating-summary">
              <strong>4.9</strong>
              <span>
                <span className="stars">★★★★★</span>
                <small>from 120+ local reviews</small>
              </span>
            </div>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className="stars">★★★★★</div>
                <p>“{testimonial.quote}”</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.neighborhood}</span>
                </footer>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-width footer-grid">
          <div>
            <a className="brand footer-brand" href="#top">
              <span className="brand-mark">
                <SeasonIcon size={19} />
              </span>
              <span>
                <strong>ELITE EDGE</strong>
                <small>PROPERTY CARE</small>
              </span>
            </a>
            <p>
              Making local properties look their absolute best, one visit at a
              time.
            </p>
          </div>
          <div>
            <span className="footer-label">CONTACT</span>
            <a href="tel:4167324653">
              <Phone size={14} /> (416) 732-4653
            </a>
            <a href="mailto:hello@eliteedgecare.com">
              <Mail size={14} /> hello@eliteedgecare.com
            </a>
          </div>
          <div>
            <span className="footer-label">QUICK LINKS</span>
            <a href="#services">Our services</a>
            <a href="#why-us">Why Elite Edge</a>
            <a href="#quote">Get a free quote</a>
          </div>
        </div>
        <div className="footer-bottom page-width">
          <span>© 2025 Elite Edge Property Care. All rights reserved.</span>
          <span>Serving the greater metro area.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
