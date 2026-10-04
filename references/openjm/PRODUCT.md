# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary.** People who are still building their relationship with artificial intelligence. What connects them is not age, profession, country or employer but adoption maturity: they know AI exists and have not yet turned it into something they use in their studies, work or daily life. This includes people with no AI experience, people who tried a tool once and never returned to it, and professionals or entrepreneurs looking for a practical way to begin.

Their situation when they arrive: curious but uncertain, often unsure what to ask an AI for, and wary of a product that will either overwhelm them with technical framing or talk down to them. Their job on this page is to decide whether OpenJM is a place they can start, and then start.

**Secondary.** Organisations that want to introduce AI gradually, in a way compatible with their resources and processes. On this surface they are addressed after individuals, never ahead of them.

**Explicitly not the priority audience.** Visitors whose only criterion is access to the absolute frontier of model performance and who evaluate any AI product exclusively through benchmarks. The page does not compete for them and does not need to.

## Product Purpose

OpenJM is an artificial intelligence platform developed by CrimsonTide AI in Jamaica. Its core is a conversational experience built on language models.

It exists to reduce the distance between what AI can already do and the people and organisations who have not yet been able to incorporate that capability into their reality. The problem it addresses is not the absence of AI, and not access to the most advanced model available — it is the gap between what the technology can already do and a person's practical ability to turn that into a useful result. That gap comes from unfamiliarity, fear of getting it wrong, perceived complexity, limited resources, or simply never having met an experience that starts where the person actually is.

**North Star:** bring the potential of artificial intelligence closer to those who have not yet been able to fully incorporate it into their reality.

**Promise:** starting and progressing with AI will feel closer, more understandable and more useful. The promise is explicitly _not_ omniscience, absolute accuracy, or universal technological superiority.

The landing explains that purpose; its visitor journey and conversion strategy belong to the [assembled-page brief](.impeccable/surfaces/src-app-page-tsx.md).

## Positioning

OpenJM is an accessible and versatile AI platform for people and organisations that need to turn AI into practical value without starting from a high level of technological experience.

The differentiated territory is the experience around adoption — accessibility, contextual empathy, guidance, progression and practical utility — not raw model superiority. OpenJM competes to be a better entry point and a better adoption companion, not to be the smartest AI in the market.

The local positioning decision is to begin with a visitor's practical needs and support progression from a first useful conversation. This is a direction for OpenJM's communication, not evidence about how competing platforms are designed.

Consequences that bind every piece of communication:

- Explain outcomes and usefulness before technical architecture, model names or implementation detail.
- Do not attack or claim superiority over global platforms. Acknowledging that more powerful or more specialised tools exist in certain areas is permitted and does not weaken the position.
- Jamaica is origin, capability and evidence of local technological ability. It is not a tourism aesthetic, a regional stereotype, a market boundary, or a reason to buy on its own.
- CrimsonTide backs; OpenJM leads. "Powered by CrimsonTide.AI" may function as a trust seal. CrimsonTide's voice never competes with OpenJM's in the same piece.

## Operating Context

**This repository is the OpenJM marketing landing site**, not the product itself. The implemented scope is a single landing page. Privacy and terms routes remain pending authoritative policy content and approved destinations; they are not implemented. Anything beyond that is a future decision, not an assumed requirement.

**Destinations this page converts into:**

- The product: `https://openjm.ai` — the established product destination in this repository; its live behavior is not verified by this landing's tests. The current four registration CTAs link to the registration URL below.
- Registration: `https://openjm.ai/register` — the current registration CTA destination; live registration is not verified here.

**Where this landing is hosted is undecided.** It may replace the `openjm.ai` root with the app moving to a subdomain or path, or it may sit on a separate host. Build against the absolute destinations above, and do not hard-code an assumption about which of the two arrangements wins.

**Visitor context.** Most arrivals are cold: no prior relationship with the brand, no knowledge of CrimsonTide, and in many cases no confident mental model of what a conversational AI is for. Mobile share should be assumed high. The page carries the entire burden of explanation — there is no sales motion behind it for the individual audience.

## Capabilities and Constraints

The stable product description is: **a conversational artificial intelligence platform based on language models.**

### Established capability description

This repository carries the following established product description. It is the local communication baseline, not a claim that an unspecified external brief or this landing has verified the live product. Illustrative demos and public tests establish landing behavior only. New or more specific promises require authoritative product evidence.

- Free access to start using the product.
- Working with uploaded documents and files inside a conversation.
- Web search within a conversation.
- Image generation.
- Music generation.
- Code generation.
- Python execution.
- File generation.

The [page brief](.impeccable/surfaces/src-app-page-tsx.md) owns how these capabilities become a visitor-facing narrative.

### Claims awaiting authoritative evidence

The following have no authoritative supporting evidence in this repository. Do not add them as factual promises or infer them from an illustration, plan row or retained copy:

- conversation retention, storage, and history persistence;
- use of data for training;
- privacy, security and encryption specifics;
- infrastructure location;
- third-party integrations;
- speed, accuracy, and usage limits, including the details in retained plan rows;
- any performance or savings comparison against competitors.

### Current-copy retention decision

The approved documentation task preserves all currently rendered copy, including pricing, limits, support, availability, history and FAQ statements. Retention permits those statements to remain; it does not validate their commercial or technical claims or approve publication. The plan cards and FAQ use different capacity terminology (weekly work hours versus monthly tokens and active conversations); reconciliation requires a product-owner decision, not an inferred documentation correction or a silent copy edit.

The data-handling FAQ keeps its in-page editorial-status note until privacy, storage and retention policies are approved. The note states an unresolved publication requirement; it is not a deployment gate implemented in code. The [plans brief](.impeccable/surfaces/src-features-landing-components-planssection-tsx.md) and [FAQ brief](.impeccable/surfaces/src-features-landing-components-faqsection-tsx.md) identify the retained content owners.

### Truth constraints

- Language-model output can be incorrect, incomplete or outdated. The product must never be presented as guaranteed truth, and verification expectations should rise with the impact of the decision.
- For high-impact domains — health, finance, legal, safety — OpenJM may help explain, organise, summarise or prepare questions. It must never be positioned as an automatic substitute for a qualified professional.
- Human agency stays central. AI assists, guides, organises, analyses and accelerates; people define goals, supply context, review results, decide, and remain responsible for how output is used. Workforce replacement is never a benefit.
- A claim is any statement a reader could take as a verifiable promise about capability, performance, security, privacy, price, availability, compatibility, support or outcome. Aspirational brand language is permitted only when it cannot be read as a technical fact.

### Language

International English is the external language. Spanish is planned as an additional language and must preserve the same personality rather than rely on literal translation — copy should be written so it can survive translation without collapsing into stiffness. Patois is not a component of the brand voice and must not be used as one.

## Brand Commitments

**Definition.** An accessible and versatile artificial intelligence platform developed in Jamaica by CrimsonTide.

**Essence.** Advanced technology, turned into accessible capability.

**One sentence to remember it by.** OpenJM helps people and organisations turn advanced artificial intelligence into a capability they can actually begin to use.

**Voice — five traits that survive every context:** clear, close, useful, respectful, trustworthy.

**Personality.** Approachable, empathetic, useful, reliable, dynamic, professional, optimistic, respectful, technologically competent. Its essential quality is availability: _you can start here; I will help you move forward._ It behaves like the versatile colleague you can ask for help without fear of being judged for not knowing.

**Tone for this surface (general marketing).** Formality medium. Warmth high. Energy medium-high. Technical depth low to medium. Objective: generate interest and demonstrate usefulness without hype.

**Closeness comes from reducing distance, not from slang, memes or jokes.** Humour is not part of the core personality. Energy reads as willingness and agility, not exclamation marks.

**Writing mechanics.** Short to medium sentences. One main idea per sentence. Scannable structure, reduced noise — the verbal equivalent of visual space and hierarchy.

**Vocabulary to favour:** help, guide, start, learn, understand, work, explore, organise, practical, accessible, useful, clear, flexible, continue, grow, capability, confidence, context, support.

**Vocabulary to handle with care:** _simple_ and _easy_ (never promise the absence of effort), _secure_ and _private_ (require a verifiable policy), _local_ (never exclusivity), _expert_, _automate_ (clarify what is automated and who stays in control), _accurate_ (no absolutes).

**Vocabulary banned by default:** revolutionary, game-changing, unstoppable, ultimate, perfect, infallible, always right, replace your team, no human needed, the smartest AI, AI for people who know nothing, guaranteed, 100% secure, completely private.

**CTA vocabulary.** Reduce friction and match the visitor's level of decision: _Start for free_, _Try OpenJM_, _See how it works_, _Explore what you can do_, _Talk to our team_, _Contact us_. Never manufacture urgency, pressure or superiority — no "Don't get left behind", no "Unlock unstoppable AI".

**What OpenJM is not.** Not a contest for the world's most powerful AI. Not a local copy of a global platform. Not an infantilised tool for beginners. Not a brand built on national symbols. Not a product that sells replacing people. Not a cold corporate voice. Not a meme-driven youth personality. Not a promise of perfect answers. Not a brand that invents certainty it does not have.

## Evidence on Hand

**Available in this repository:**

- `public/logos/openjm-word.svg` — wordmark alone, light-on-dark.
- `public/logos/openjm-word+text.svg` — wordmark with descriptor text.
- `public/logos/openjm-icon+word-horizontal.svg` — icon and wordmark, horizontal lockup.
- `public/logos/openjm-icon+word-vertical.svg` — icon and wordmark, vertical lockup.
- `public/logos/openjm-icon+word+text.svg` — icon, wordmark and descriptor.
- `public/logos/crimsontideai-darkTheme.png` — CrimsonTide AI mark, dark-theme variant, for the endorsement seal.
- `public/openjm-hummingbird.glb` — retained user-supplied animated asset, with Flap and Glide clips; not used by the current landing. The benefits section uses the static `public/media/colibri.svg` mark.
- `public/fonts/` — Roboto variable fonts (OFL license) used by the landing.
- `public/icons/` — the retained SVG icon set used across sections and plan rows.
- `public/media/` — the hummingbird mark, header/footer logo PNG, illustrative generated beach image and bundled demo video.

The landing's header and footer use `public/media/openjm-logo-negative.png`. The hero and request stages are authored illustrations, with animation labels and the disclaimer "OpenJM can make mistakes. Check what matters." They are not captured product screenshots or live capability evidence. The bundled `openjm-demo.mp4` is retained media; this documentation refresh has not independently established its fidelity to the live product.

**Explicitly absent. Future work must not fabricate any of it:**

- No product screenshots or UI captures. Any depiction of the product must be an honest, clearly non-literal abstraction — never a mocked-up screenshot presented as the real interface.
- No customers, logos of users, testimonials, quotes, case studies or named organisations.
- No usage metrics, user counts, benchmark results, performance figures or awards. Retained plan rows are permitted copy, not independently verified metrics.
- No press coverage or third-party validation.
- No photography or illustration library beyond the retained assets listed above. Only the retained files above are current assets. Detailed historical provenance/removal records are unavailable and have not been reconstructed; their absence supplies no additional asset or product evidence.

## Launch prerequisites

These decisions remain open with the product/site owner. The documentation refresh neither settles them nor authorizes launch:

| Decision | Current state and evidence needed |
| --- | --- |
| Hosting and product routing | Choose the landing host and whether the app stays at the root or moves. Confirm absolute product/registration destinations and successful live registration before release. Keep `https://openjm.ai/register` unchanged until a decision authorizes replacement. |
| Privacy, storage, retention and training | Approve authoritative policies and data-handling claims, then reconcile the FAQ editorial note through a scoped copy change. Security, encryption and infrastructure claims need evidence too. |
| Pricing and limits | Approve currency, billing, prices, included capacity, credits, file limits, features, availability and support; reconcile plan/FAQ inconsistencies. The retained Free/Regular/Pro/Unlimited copy is not commercial approval. |
| Contact and social details | Confirm real email, phone, location and social profiles. Footer email `hola@openjm.example`, phone `+1 (876) 555-0148` and demo social handles are retained placeholders, not verified contact routes. Social rows currently have no links. |
| Legal destinations | Supply approved Terms of Service, Privacy Policy and AI Policy content and URLs. Footer legal links currently use `#`; privacy/terms routes are absent. No new route is assumed. |
| Publication readiness | Resolve the preceding content/destination decisions and separately authorize publication. Complete affected landing acceptance under the [surface briefs](.impeccable/surfaces.md), using [browser coverage and evidence limits](tests/e2e/README.md#evidence-gaps-and-future-verification); browser tests do not verify product promises. |

## Product Principles

1. **Design for adoption, not for demonstrations of power.** Every element earns its place by reducing the distance between the visitor and a first useful result, not by signalling technical sophistication.
2. **Treat inexperience as a starting point, never as a deficiency.** Reduce friction without reducing capability or precision; accessibility is not infantilisation.
3. **Keep the person as the protagonist.** AI amplifies what someone can do. It is never sold as a replacement for their judgement or their job.
4. **Usefulness before spectacle.** Show what a person can do before attempting to impress them with technology.
5. **Never invent certainty.** Acknowledge limits, avoid absolutes, and require a source of truth for anything a reader could treat as a technical promise.

## Accessibility & Inclusion

The page must be understandable to someone with low technological literacy and usable by someone who has never used an AI product.

- Clear labels and stable terminology; no assumption of prior AI knowledge.
- Never communicate important information through colour, icon or visual context alone.
- One primary action at a time wherever possible.
- Errors explained without blame and tied to the field or action they concern.
- Useful alternative text and captions; decorative artwork is marked as decorative.
- Everything essential reachable and understandable by keyboard and screen reader, and nothing essential dependent on hover.
- Language that assumes no gender, education level, profession or technological ability.
- Reduced-motion preferences remove non-essential movement without removing clarity.

Accessibility is part of the product's argument, not a compliance layer bolted on afterwards: a page that a hesitant visitor cannot navigate has already failed the positioning.
