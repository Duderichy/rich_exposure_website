"use client";

import { useState } from "react";

type Photo = {
  file: string;
  path: string; // relative to /Users/rmbibeault/photography/
  description: string;
  why: string;
  treatment?: string;
  category: string;
  source: string;
  needsRelease?: boolean;
};

const SECTIONS = [
  "travel",
  "street",
  "portraits",
  "ballet",
  "architecture",
  "nature",
  "events",
  "night",
  "blizzard",
  "skip",
] as const;

type Section = (typeof SECTIONS)[number];

const curatedPhotos: Photo[] = [
  // === BALLET SERIES (Complete review) ===
  {
    file: "DSC04413.jpg",
    path: "photos_quick/2026_edits/2026-02-26_ballet/DSC04413.jpg",
    description: "Wolf character crawling, mask in profile, hands splayed",
    why: "Predatory and arresting close-up, razor-sharp focus",
    treatment: "B&W",
    category: "ballet",
    source: "ballet",
  },
  {
    file: "DSC04417.jpg",
    path: "photos_quick/2026_edits/2026-02-26_ballet/DSC04417.jpg",
    description: "Wolf dancer in dramatic S-curve backbend, tulle catching light",
    why: "Perfect peak action, definitive wolf prowling image",
    treatment: "B&W",
    category: "ballet",
    source: "ballet",
  },
  {
    file: "DSC04422.jpg",
    path: "photos_quick/2026_edits/2026-02-26_ballet/DSC04422.jpg",
    description: "Wolf crouched on floor, coiled predatory stillness",
    why: "Confrontational composition, demands attention",
    treatment: "B&W",
    category: "ballet",
    source: "ballet",
  },
  {
    file: "DSC04438.jpg",
    path: "photos_quick/2026_edits/2026-02-26_ballet/DSC04438.jpg",
    description: "Ballerina in deep lunge, hair mid-whip, eyes closed in ecstasy",
    why: "Impeccable timing, pure joy in movement, cinematic color",
    treatment: "Color",
    category: "ballet",
    source: "ballet",
  },
  {
    file: "DSC04444.jpg",
    path: "photos_quick/2026_edits/2026-02-26_ballet/DSC04444.jpg",
    description: "Ballerina on pointe, arms in V, others watching from wall",
    why: "Classical perfection, narrative depth from watching dancers",
    treatment: "Color",
    category: "ballet",
    source: "ballet",
  },
  {
    file: "DSC04448.jpg",
    path: "photos_quick/2026_edits/2026-02-26_ballet/DSC04448.jpg",
    description: "Ballerina mid-spin from behind, skirt fanning, on pointe",
    why: "THE dance photo — pure kinetic energy frozen perfectly",
    treatment: "B&W",
    category: "ballet",
    source: "ballet",
  },
  {
    file: "DSC04487.jpg",
    path: "photos_quick/2026_edits/2026-02-26_ballet/DSC04487.jpg",
    description: "Intimate pas de deux, hands intertwined, both smiling",
    why: "Chemistry between performers, striking color contrast",
    treatment: "Color",
    category: "ballet",
    source: "ballet",
  },
  {
    file: "DSC04539.jpg",
    path: "photos_quick/2026_edits/2026-02-26_ballet/DSC04539.jpg",
    description: "Three-person narrative: ballerina caught, wolf stalking behind",
    why: "Peak storytelling — entire fairy tale in one frame",
    treatment: "Color",
    category: "ballet",
    source: "ballet",
  },
  {
    file: "DSC04559.jpg",
    path: "photos_quick/2026_edits/2026-02-26_ballet/DSC04559.jpg",
    description: "Wolf vs grandmother in dramatic combat",
    why: "Raw physicality, angular aggressive body lines",
    treatment: "B&W",
    category: "ballet",
    source: "ballet",
  },
  {
    file: "L1071133.jpg",
    path: "photos_quick/2026_edits/2026-02-26_ballet/L1071133.jpg",
    description: "Ballerina in arabesque, dwarfed by studio, cast in doorway",
    why: "Cinematic — rehearsal as solitary art practiced in community",
    treatment: "Color",
    category: "ballet",
    source: "ballet",
  },
  {
    file: "L1071224.jpg",
    path: "photos_quick/2026_edits/2026-02-26_ballet/L1071224.jpg",
    description: "Overhead lift with fallen dancers on floor",
    why: "Fine art quality, extraordinary scale and narrative tension",
    treatment: "B&W",
    category: "ballet",
    source: "ballet",
  },
  {
    file: "R0004557.jpg",
    path: "photos_quick/2026_edits/2026-02-26_ballet/R0004557.jpg",
    description: "High kick at peak extension, Ricoh GR wide angle",
    why: "Documentary edge, Brassai-like stolen moment of beauty",
    treatment: "B&W",
    category: "ballet",
    source: "ballet",
  },

  // === NYC NIGHT / STREET (from 2025_edits) ===
  {
    file: "L1031230.jpg",
    path: "photos_quick/2025_edits/2026-01-07 hdr/L1031230.jpg",
    description: "Oculus wing, lone silhouette on wet pavement, colorful reflections",
    why: "EXCEPTIONAL — best architectural/street image in the archive",
    category: "architecture",
    source: "2025_edits",
  },
  {
    file: "L1031223.jpg",
    path: "photos_quick/2025_edits/2026-01-07 hdr/L1031223.jpg",
    description: "Oculus curves with lone figure, wet pavement, misty",
    why: "Publication-ready architectural photography",
    category: "architecture",
    source: "2025_edits",
  },
  {
    file: "L1031234.jpg",
    path: "photos_quick/2025_edits/2026-01-07 hdr/L1031234.jpg",
    description: "Oculus curving away, WTC towers in fog",
    why: "Atmospheric, moody architectural",
    category: "architecture",
    source: "2025_edits",
  },
  {
    file: "L1031245.jpg",
    path: "photos_quick/2025_edits/2026-01-07 hdr/L1031245.jpg",
    description: "Oculus interior, symmetrical and dramatic",
    why: "Strong architectural interior composition",
    category: "architecture",
    source: "2025_edits",
  },
  {
    file: "L1031048.jpg",
    path: "photos_quick/2025_edits/2026-01-07/L1031048.jpg",
    description: "Lone figure at Sabrett hot dog cart, pool of light",
    why: "Film-noir quality — outstanding night street",
    category: "night",
    source: "2025_edits",
  },
  {
    file: "L1031146.jpg",
    path: "photos_quick/2025_edits/2026-01-07 hdr/L1031146.jpg",
    description: "Color Sabrett cart glowing in darkness, vendor visible",
    why: "Warm atmospheric night street",
    category: "night",
    source: "2025_edits",
  },
  {
    file: "L1031315.jpg",
    path: "photos_quick/2025_edits/2026-01-07 hdr/L1031315.jpg",
    description: "Figure walking through illuminated holiday trees, wet golden reflections",
    why: "Beautiful light, cinematic night street",
    category: "night",
    source: "2025_edits",
  },
  {
    file: "L1031386.jpg",
    path: "photos_quick/2025_edits/2026-01-07 hdr/L1031386.jpg",
    description: "Restaurant through window, portrait paintings, blue scaffolding overlay",
    why: "Edward Hopper vibes — hauntingly cinematic",
    category: "night",
    source: "2025_edits",
  },
  {
    file: "L1031276.jpg",
    path: "photos_quick/2025_edits/2026-01-07 hdr/L1031276.jpg",
    description: "9/11 Memorial at night with flag",
    why: "Atmospheric memorial/architectural",
    category: "architecture",
    source: "2025_edits",
  },
  {
    file: "L1031084.jpg",
    path: "photos_quick/2025_edits/2026-01-07 hdr/L1031084.jpg",
    description: "Scaffolding tunnel perspective, leading lines",
    why: "Strong geometric street composition",
    category: "street",
    source: "2025_edits",
  },
  {
    file: "DSC04175.jpg",
    path: "photos_quick/2025_edits/DSC04175.jpg",
    description: "Capital Grille through-the-window, warm interior",
    why: "Cinematically gorgeous Edward Hopper vibes",
    category: "night",
    source: "2025_edits",
  },
  {
    file: "DSC04274.jpg",
    path: "photos_quick/2025_edits/DSC04274.jpg",
    description: "One WTC through narrow gap with steam rising",
    why: "Atmospheric nocturnal cityscape",
    category: "architecture",
    source: "2025_edits",
  },

  // === BLIZZARD ===
  {
    file: "L1070850.jpg",
    path: "photos_quick/2026_edits/2026-02-23_blizzard/L1070850.jpg",
    description: "Snowy NYC street at night with steam, Spring St sign",
    why: "OUTSTANDING — film-noir quality",
    category: "blizzard",
    source: "blizzard",
  },
  {
    file: "L1071075.jpg",
    path: "photos_quick/2026_edits/2026-02-23_blizzard/L1071075.jpg",
    description: "57th St subway platform, deep perspective, person with belongings",
    why: "EXCEPTIONAL street photo — stunning lines, human story",
    category: "street",
    source: "blizzard",
  },
  {
    file: "L1071056.jpg",
    path: "photos_quick/2026_edits/2026-02-23_blizzard/L1071056.jpg",
    description: "Times Square building in complete whiteout blizzard",
    why: "Dramatic, otherworldly atmospheric",
    category: "blizzard",
    source: "blizzard",
  },
  {
    file: "L1070868.jpg",
    path: "photos_quick/2026_edits/2026-02-23_blizzard/L1070868.jpg",
    description: "Row of snow figures / mini snowmen",
    why: "Charming and unique winter moment",
    category: "blizzard",
    source: "blizzard",
  },
  {
    file: "L1070926.jpg",
    path: "photos_quick/2026_edits/2026-02-23_blizzard/L1070926.jpg",
    description: "Snow-covered bikes",
    why: "Nice winter texture / urban still life",
    category: "blizzard",
    source: "blizzard",
  },

  // === TRAVEL / PORTRAIT (from 2025_edits root) ===
  {
    file: "DSC01448.jpg",
    path: "photos_quick/2025_edits/DSC01448.jpg",
    description: "Cypress tree tunnel, Point Reyes — two silhouetted figures",
    why: "STANDOUT — magnificent natural symmetry and depth",
    category: "travel",
    source: "2025_edits",
  },
  {
    file: "DSC02164.jpg",
    path: "photos_quick/2025_edits/DSC02164.jpg",
    description: "Woman in front of Unicorn Tapestry at Cloisters",
    why: "Stunning layering of subject and art",
    category: "portraits",
    source: "2025_edits",
  },
  {
    file: "DSC02113.jpg",
    path: "photos_quick/2025_edits/DSC02113.jpg",
    description: "Woman gazing at Cloisters arches, patterned dress",
    why: "Beautiful juxtaposition of subject and architecture",
    category: "portraits",
    source: "2025_edits",
  },
  {
    file: "DSC02508.jpg",
    path: "photos_quick/2025_edits/DSC02508.jpg",
    description: "Red-haired subject, fur collar, autumn golden hour",
    why: "Excellent environmental portrait with great light",
    category: "portraits",
    source: "2025_edits",
  },
  {
    file: "DSC01712.jpg",
    path: "photos_quick/2025_edits/DSC01712.jpg",
    description: "Red-haired woman in front of NYSE",
    why: "Cinematic color grading, strong street portrait",
    category: "street",
    source: "2025_edits",
  },
  {
    file: "DSC04967.jpg",
    path: "photos_quick/2025_edits/DSC04967.jpg",
    description: "Woman with cat-eye sunglasses, golden hour",
    why: "Strong street portrait, cinematic feel",
    category: "portraits",
    source: "2025_edits",
  },
  {
    file: "DSC05054.jpg",
    path: "photos_quick/2025_edits/DSC05054.jpg",
    description: "Woman reading on stone bench, foreground bokeh",
    why: "Beautifully voyeuristic, layered composition",
    category: "street",
    source: "2025_edits",
  },
  {
    file: "DSC03200.jpg",
    path: "photos_quick/2025_edits/DSC03200.jpg",
    description: "Eastern Bluebird on lichen-covered branch",
    why: "Lovely color pop against muted natural background",
    category: "nature",
    source: "2025_edits",
  },
  {
    file: "DSC03535.jpg",
    path: "photos_quick/2025_edits/DSC03535.jpg",
    description: "Subway candid — woman on phone vs man reading",
    why: "Strong street composition with narrative",
    category: "street",
    source: "2025_edits",
  },
  {
    file: "DSC03742.jpg",
    path: "photos_quick/2025_edits/DSC03742.jpg",
    description: "Sparrow in autumn foliage",
    why: "Intimate bird photo, nice colors",
    category: "nature",
    source: "2025_edits",
  },

  // === WINTER PARTY / LIGHT PAINTING ===
  {
    file: "R0001149.jpg",
    path: "photos_quick/2026_edits/2026-01-18_shor_winter_party/edit_pass_1/R0001149.jpg",
    description: "Light painting silhouette in red-lit window, apartment interior through",
    why: "EXCEPTIONAL composition — distinctive and striking",
    category: "events",
    source: "winter_party",
  },
  {
    file: "R0001161.jpg",
    path: "photos_quick/2026_edits/2026-01-18_shor_winter_party/edit_pass_1/R0001161.jpg",
    description: "Rainbow circles against red window",
    why: "Very strong light painting, bold color",
    category: "events",
    source: "winter_party",
  },
  {
    file: "R0001536.jpg",
    path: "photos_quick/2026_edits/2026-01-18_shor_winter_party/edit_pass_1/R0001536.jpg",
    description: "Williamsburg Bridge walkway at night",
    why: "EXCEPTIONAL leading lines, urban night",
    category: "night",
    source: "winter_party",
  },
  {
    file: "R0001085.jpg",
    path: "photos_quick/2026_edits/2026-01-18_shor_winter_party/edit_pass_1/R0001085.jpg",
    description: "Williamsburg Bridge / NYC skyline, teal grade",
    why: "Strong cityscape composition",
    category: "night",
    source: "winter_party",
  },
  {
    file: "R0001575.jpg",
    path: "photos_quick/2026_edits/2026-01-18_shor_winter_party/edit_pass_1/R0001575.jpg",
    description: "B&W architectural with globe lights",
    why: "Strong urban architectural",
    category: "architecture",
    source: "winter_party",
  },
  {
    file: "R0001624.jpg",
    path: "photos_quick/2026_edits/2026-01-18_shor_winter_party/edit_pass_1/R0001624.jpg",
    description: "Diner neon sign at night",
    why: "Great urban night shot",
    category: "night",
    source: "winter_party",
  },
  {
    file: "R0001193.jpg",
    path: "photos_quick/2026_edits/2026-01-18_shor_winter_party/R0001193.jpg",
    description: "Light painting with bridge backdrop",
    why: "Striking light painting composition",
    category: "events",
    source: "winter_party",
  },

  // === RAVE / NIGHTLIFE ===
  {
    file: "R0004319.jpg",
    path: "photos_quick/2026_edits/2026-02-22_rave/R0004319.jpg",
    description: "Rave warehouse, red light beams through haze, silhouettes",
    why: "Strong atmospheric event photography",
    category: "events",
    source: "rave",
  },
  {
    file: "R0004154.jpg",
    path: "photos_quick/2026_edits/2026-02-22_rave/R0004154.jpg",
    description: "Two figures separated by subway pillar, high contrast B&W",
    why: "Strong street composition (en route to rave)",
    category: "street",
    source: "rave",
  },
  {
    file: "R0004237.jpg",
    path: "photos_quick/2026_edits/2026-02-22_rave/R0004237.jpg",
    description: "Bar interior with Kodak lamp, warm tones",
    why: "Great atmospheric interior",
    category: "events",
    source: "rave",
  },

  // === IRELAND (new finds) ===
  {
    file: "L1071594.jpg",
    path: "photos_quick/2026_edits/2026-03-02_ireland/L1071594.jpg",
    description: "Ha'penny Bridge at night B&W",
    why: "Clean, elegant — potentially better than existing Dublin content",
    category: "travel",
    source: "ireland",
  },
  {
    file: "L1071865.jpg",
    path: "photos_quick/2026_edits/2026-03-02_ireland/L1071865.jpg",
    description: "Ivy-covered Gothic door with stained glass",
    why: "Fairytale quality, rich color, architectural detail",
    category: "travel",
    source: "ireland",
  },
  {
    file: "L1080552.jpg",
    path: "photos_quick/2026_edits/2026-03-02_ireland/L1080552.jpg",
    description: "Two starlings on wall against teal sky",
    why: "Clean, graphic composition, wonderful color contrast",
    category: "nature",
    source: "ireland",
  },
  {
    file: "L1080598.jpg",
    path: "photos_quick/2026_edits/2026-03-02_ireland/L1080598.jpg",
    description: "Three people sitting on bench at sea edge",
    why: "Great storytelling, contemplative mood",
    category: "street",
    source: "ireland",
  },
  {
    file: "L1071654.jpg",
    path: "photos_quick/2026_edits/2026-03-02_ireland/L1071654.jpg",
    description: "Night graffiti building, strong color, urban Dublin",
    why: "Strong urban character and mood",
    category: "street",
    source: "ireland",
  },
  {
    file: "L1080784.jpg",
    path: "photos_quick/2026_edits/2026-03-02_ireland/L1080784.jpg",
    description: "Couple with umbrella in rain B&W",
    why: "Atmospheric rainy street photography",
    category: "street",
    source: "ireland",
  },

  // === CLIENT FILES (need model release) ===
  {
    file: "DSC03669.jpg",
    path: "client_files/claire_kc_iceland/DSC03669.jpg",
    description: "Figure in snowy landscape at blue hour",
    why: "STUNNING travel/portrait — blue hour magic",
    category: "travel",
    source: "client: claire_kc_iceland",
    needsRelease: true,
  },
  {
    file: "DSC03812.jpg",
    path: "client_files/claire_kc_iceland/DSC03812.jpg",
    description: "Tattoo portrait against Icelandic mountains",
    why: "STUNNING — very distinctive, portfolio-defining",
    category: "portraits",
    source: "client: claire_kc_iceland",
    needsRelease: true,
  },
  {
    file: "DSC03850.jpg",
    path: "client_files/claire_kc_iceland/DSC03850.jpg",
    description: "Tattoo portrait against Icelandic mountains (alternate)",
    why: "STUNNING — distinctive portrait series",
    category: "portraits",
    source: "client: claire_kc_iceland",
    needsRelease: true,
  },
  {
    file: "L1070136.jpg",
    path: "client_files/claire_kc_iceland/L1070136.jpg",
    description: "B&W figure with pyramid mountain",
    why: "STUNNING landscape/portrait hybrid",
    category: "travel",
    source: "client: claire_kc_iceland",
    needsRelease: true,
  },
  {
    file: "DSC06736.jpg",
    path: "client_files/grace_pictures/DSC06736.jpg",
    description: "Night profile with bokeh",
    why: "STUNNING portrait — exceptional light and mood",
    category: "portraits",
    source: "client: grace_pictures",
    needsRelease: true,
  },
  {
    file: "DSC06828.jpg",
    path: "client_files/grace_pictures/DSC06828.jpg",
    description: "B&W profile portrait",
    why: "Gorgeous tonal range and composition",
    category: "portraits",
    source: "client: grace_pictures",
    needsRelease: true,
  },
  {
    file: "DSC06861.jpg",
    path: "client_files/grace_pictures/DSC06861.jpg",
    description: "Neon bar scene portrait, cinematic",
    why: "Cinematic atmosphere, beautiful light",
    category: "portraits",
    source: "client: grace_pictures",
    needsRelease: true,
  },
  {
    file: "DSC07462.jpg",
    path: "client_files/caleb_out/DSC07462.jpg",
    description: "Dark tunnel profile portrait",
    why: "Standout dramatic portrait with strong light",
    category: "portraits",
    source: "client: caleb_out",
    needsRelease: true,
  },
  {
    file: "DSC07628 2.jpg",
    path: "client_files/caleb_out/DSC07628 2.jpg",
    description: "Bookshop profile portrait",
    why: "Standout environmental portrait",
    category: "portraits",
    source: "client: caleb_out",
    needsRelease: true,
  },
  {
    file: "L1030895.jpg",
    path: "client_files/new years party/L1030895.jpg",
    description: "Couple looking up, NYE blue hour",
    why: "OUTSTANDING — genuine emotion, beautiful natural light",
    category: "events",
    source: "client: new years party",
    needsRelease: true,
  },
  {
    file: "L1030906.jpg",
    path: "client_files/new years party/L1030906.jpg",
    description: "Rooftop blue hour conversation",
    why: "Great ambient atmosphere, candid storytelling",
    category: "events",
    source: "client: new years party",
    needsRelease: true,
  },
  {
    file: "DSC09556.jpg",
    path: "client_files/new years party/DSC09556.jpg",
    description: "Individual portrait against graffiti wall",
    why: "Striking street-portrait work",
    category: "portraits",
    source: "client: new years party",
    needsRelease: true,
  },
  {
    file: "DSC08002.jpg",
    path: "client_files/silverset_november/DSC08002.jpg",
    description: "Guitarist in green stage light",
    why: "Strong live music event photography",
    category: "events",
    source: "client: silverset_november",
    needsRelease: true,
  },
  {
    file: "DSC08522.jpg",
    path: "client_files/silverset_november/DSC08522.jpg",
    description: "Singer in red stage light",
    why: "Strong live music event photography",
    category: "events",
    source: "client: silverset_november",
    needsRelease: true,
  },
  {
    file: "R0000192.jpg",
    path: "client_files/ricoh_nye/R0000192.jpg",
    description: "Corner storefront at night",
    why: "Strong NYC night street photography",
    category: "night",
    source: "client: ricoh_nye",
    needsRelease: true,
  },
  {
    file: "R0000207.jpg",
    path: "client_files/ricoh_nye/R0000207.jpg",
    description: "Market Hotel entrance at night",
    why: "Strong urban night / venue shot",
    category: "night",
    source: "client: ricoh_nye",
    needsRelease: true,
  },
  {
    file: "R0000074.jpg",
    path: "client_files/ricoh_nye/R0000074.jpg",
    description: "Fulton St subway, person sleeping",
    why: "Strong documentary street photography",
    category: "street",
    source: "client: ricoh_nye",
    needsRelease: true,
  },
  {
    file: "DSC07065.jpg",
    path: "client_files/james_mishra_out/DSC07065.jpg",
    description: "Strong headshot-style portrait",
    why: "Clean, professional headshot quality",
    category: "portraits",
    source: "client: james_mishra_out",
    needsRelease: true,
  },
  {
    file: "DSC08680.jpg",
    path: "client_files/camille/DSC08680.jpg",
    description: "Outdoor portrait with blue/green bokeh",
    why: "Strongest from the Camille portrait session",
    category: "portraits",
    source: "client: camille",
    needsRelease: true,
  },

  // === PORTFOLIO FOLDER (photographer's own curated picks - new finds) ===
  {
    file: "DSC08381.jpg",
    path: "portfolio/DSC08381.jpg",
    description: "Crescent moon framed between Gothic and modern buildings at night",
    why: "RATING 5 — Stunning architectural framing, perfect timing, genuinely unique",
    category: "night",
    source: "portfolio",
  },
  {
    file: "DSC04194.jpg",
    path: "portfolio/DSC04194.jpg",
    description: "Night food cart with golden fairy lights, silhouetted figures",
    why: "RATING 5 — Captures city night magic, bokeh fireworks, has soul",
    category: "night",
    source: "portfolio",
  },
  {
    file: "DSC05240.jpg",
    path: "portfolio/DSC05240.jpg",
    description: "Woman walking away at night, long coat billowing, warm sodium tones",
    why: "RATING 4 — Film-noir quality, cinematic mystery",
    category: "night",
    source: "portfolio",
  },
  {
    file: "DSC01526.jpg",
    path: "portfolio/DSC01526.jpg",
    description: "Man laughing in warm-lit hallway, beanie and dark coat",
    why: "RATING 4 — Genuine unforced emotion, beautiful directional light",
    category: "portraits",
    source: "portfolio",
  },
  {
    file: "DSC02658.jpg",
    path: "portfolio/DSC02658.jpg",
    description: "Two people at NYC crosswalk from behind, yellow cabs, red shirt",
    why: "RATING 4 — Classic NYC energy, strong color palette",
    category: "street",
    source: "portfolio",
  },
  {
    file: "DSC07776.jpg",
    path: "portfolio_prints/DSC07776.jpg",
    description: "Orange/peach roses against periwinkle blue house facade",
    why: "RATING 4 — Excellent complementary color pairing, beautiful isolation",
    category: "nature",
    source: "portfolio_prints",
  },
  {
    file: "DSC03378.jpg",
    path: "portfolio/DSC03378.jpg",
    description: "B&W long exposure of ghostly figures crossing street at night",
    why: "RATING 4 — Ethereal motion blur, strong graphic quality, urban transience",
    treatment: "B&W",
    category: "night",
    source: "portfolio",
  },
  {
    file: "DSC07910.jpg",
    path: "portfolio/DSC07910.jpg",
    description: "Mockingbird perched on branch, golden bokeh background",
    why: "RATING 4 — Sharp focus, beautiful backlit leaves, warm palette",
    category: "nature",
    source: "portfolio",
  },
  {
    file: "DSC04980.jpg",
    path: "portfolio/DSC04980.jpg",
    description: "Vivid blue/purple flower with fuzzy petals, emerald green background",
    why: "RATING 4 — Electric color, striking macro, orange stamen accent",
    category: "nature",
    source: "portfolio",
  },
  {
    file: "DSC05361.jpg",
    path: "portfolio/DSC05361.jpg",
    description: "Woman holding Bengal cat, both looking down, intimate close-up",
    why: "RATING 4 — Tender genuine moment, fine-art muted grade",
    category: "portraits",
    source: "portfolio",
  },
  {
    file: "DSC03875 2.jpg",
    path: "portfolio/DSC03875 2.jpg",
    description: "People on bridge with spectacular autumn foliage tapestry behind",
    why: "RATING 4 — Rich color saturation, layered autumn palette",
    category: "nature",
    source: "portfolio",
  },
  {
    file: "DSC02571.jpg",
    path: "portfolio/DSC02571.jpg",
    description: "People walking through graffiti-covered tunnel, vanishing point",
    why: "RATING 4 — Strong leading lines, urban texture, good framing",
    category: "street",
    source: "portfolio",
  },
  {
    file: "DSC04641.jpg",
    path: "portfolio/DSC04641.jpg",
    description: "Portrait in magenta/hot pink lighting, dramatic editorial pose",
    why: "RATING 4 — Bold creative lighting, otherworldly editorial mood",
    category: "portraits",
    source: "portfolio",
  },

  // === COMEDY SHOW (client files - all need model release) ===
  {
    file: "DSC00258.jpg",
    path: "client_files/comedy_show_sienna/DSC00258.jpg",
    description: "B&W: Host pointing at crowd, audience laughing hard — genuine open-mouthed laughter",
    why: "BEST in set — captures the fundamental transaction of live comedy, perfect timing",
    treatment: "B&W",
    category: "events",
    source: "client: comedy_show_sienna",
    needsRelease: true,
  },
  {
    file: "DSC00291.jpg",
    path: "client_files/comedy_show_sienna/DSC00291.jpg",
    description: "Two women side-stage in deep teal light, one leaning on other's shoulder, watching show",
    why: "Most visually striking — looks like a film still, transcends event photography",
    category: "events",
    source: "client: comedy_show_sienna",
    needsRelease: true,
  },
  {
    file: "DSC00234.jpg",
    path: "client_files/comedy_show_sienna/DSC00234.jpg",
    description: "Tight portrait of host with mic, NY cap, 'Sesh Comedy' neon sign glowing behind",
    why: "Best performer portrait — neon rim light, confident expression, moody teal grade",
    category: "events",
    source: "client: comedy_show_sienna",
    needsRelease: true,
  },
  {
    file: "DSC00254.jpg",
    path: "client_files/comedy_show_sienna/DSC00254.jpg",
    description: "B&W wide: comedian with mic, audience laughing on right, EXIT sign, hazy atmosphere",
    why: "Storytelling companion to DSC00258 — shows performer-crowd spatial relationship",
    treatment: "B&W",
    category: "events",
    source: "client: comedy_show_sienna",
    needsRelease: true,
  },
  {
    file: "DSC00189.jpg",
    path: "client_files/comedy_show_sienna/DSC00189.jpg",
    description: "Color: comedian in full teal stage wash, audience silhouettes in foreground layers",
    why: "Essential color version showing dramatic venue lighting design",
    category: "events",
    source: "client: comedy_show_sienna",
    needsRelease: true,
  },
  {
    file: "DSC00294.jpg",
    path: "client_files/comedy_show_sienna/DSC00294.jpg",
    description: "Two women side-stage lit by red/blue split lighting, watching with quiet intensity",
    why: "Visually arresting red/blue contrast — color counterpoint to teal-dominated shots",
    category: "events",
    source: "client: comedy_show_sienna",
    needsRelease: true,
  },
  {
    file: "DSC00205.jpg",
    path: "client_files/comedy_show_sienna/DSC00205.jpg",
    description: "Color establishing shot: full 'Sesh Comedy' neon sign, performer, haze catching light",
    why: "Definitive establishing shot — venue, performer, atmosphere all in one frame",
    category: "events",
    source: "client: comedy_show_sienna",
    needsRelease: true,
  },
  {
    file: "DSC00283.jpg",
    path: "client_files/comedy_show_sienna/DSC00283.jpg",
    description: "B&W: comedian close-up working the crowd, smiling audience visible behind",
    why: "Strong performer-crowd intimacy, connection between artist and audience",
    treatment: "B&W",
    category: "events",
    source: "client: comedy_show_sienna",
    needsRelease: true,
  },
  {
    file: "DSC00141.jpg",
    path: "client_files/comedy_show_sienna/DSC00141.jpg",
    description: "Environmental portrait: woman in red top, arms crossed, stone wall, directional light",
    why: "Genuinely good portrait — stands alone outside event context, confident and self-possessed",
    category: "portraits",
    source: "client: comedy_show_sienna",
    needsRelease: true,
  },
  {
    file: "DSC00138.jpg",
    path: "client_files/comedy_show_sienna/DSC00138.jpg",
    description: "Contemplative portrait: woman in houndstooth coat, looking down, pensive mood",
    why: "Unguarded and introspective — rare quality in event photography",
    category: "portraits",
    source: "client: comedy_show_sienna",
    needsRelease: true,
  },
  {
    file: "DSC00340.jpg",
    path: "client_files/comedy_show_sienna/DSC00340.jpg",
    description: "Audience reaction: front rows clapping and smiling, teal/magenta lighting on faces",
    why: "Best crowd reaction — diverse, engaged, well-lit faces readable",
    category: "events",
    source: "client: comedy_show_sienna",
    needsRelease: true,
  },
  {
    file: "R0000779.jpg",
    path: "client_files/comedy_show_sienna/R0000779.jpg",
    description: "Wide-angle packed house: full audience, performer on right, tin ceiling, stone walls",
    why: "Most comprehensive establishing shot — venue was packed, professional lighting, character",
    category: "events",
    source: "client: comedy_show_sienna",
    needsRelease: true,
  },
  {
    file: "L1031861.jpg",
    path: "client_files/comedy_show_sienna/L1031861.jpg",
    description: "Backstage: three women in conversation, stone cellar, arched doorway, Leica rendering",
    why: "Best behind-the-scenes shot — filmic Leica tones, atmospheric architecture",
    category: "events",
    source: "client: comedy_show_sienna",
    needsRelease: true,
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  ballet: "bg-pink-900/40 border-pink-500",
  architecture: "bg-blue-900/40 border-blue-500",
  night: "bg-indigo-900/40 border-indigo-500",
  street: "bg-amber-900/40 border-amber-500",
  travel: "bg-teal-900/40 border-teal-500",
  portraits: "bg-purple-900/40 border-purple-500",
  nature: "bg-green-900/40 border-green-500",
  events: "bg-red-900/40 border-red-500",
  blizzard: "bg-cyan-900/40 border-cyan-500",
  skip: "bg-gray-900/40 border-gray-600",
};

export default function CuratePage() {
  const [assignments, setAssignments] = useState<Record<string, Section>>(() => {
    const initial: Record<string, Section> = {};
    curatedPhotos.forEach((p) => {
      initial[p.path] = p.category as Section;
    });
    return initial;
  });

  const [filter, setFilter] = useState<string>("all");
  const [showReleaseOnly, setShowReleaseOnly] = useState(false);

  const assign = (path: string, section: Section) => {
    setAssignments((prev) => ({ ...prev, [path]: section }));
  };

  const categories = ["all", ...SECTIONS.filter((s) => s !== "skip")];
  const sources = ["all", ...Array.from(new Set(curatedPhotos.map((p) => p.source)))];

  const filtered = curatedPhotos.filter((p) => {
    if (showReleaseOnly && !p.needsRelease) return false;
    if (filter === "all") return true;
    if (SECTIONS.includes(filter as Section)) return assignments[p.path] === filter;
    return p.source === filter;
  });

  const counts: Record<string, number> = {};
  for (const p of curatedPhotos) {
    const s = assignments[p.path];
    if (s && s !== "skip") {
      counts[s] = (counts[s] || 0) + 1;
    }
  }

  const exportSelection = () => {
    const selected = curatedPhotos
      .filter((p) => assignments[p.path] && assignments[p.path] !== "skip")
      .map((p) => ({
        file: p.file,
        fullPath: `/Users/rmbibeault/photography/${p.path}`,
        assignedSection: assignments[p.path],
        description: p.description,
        needsRelease: p.needsRelease || false,
        source: p.source,
      }));

    const json = JSON.stringify(selected, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "curated-photos.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-white/10 px-6 py-4">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-2xl font-bold text-[#c9a96e]">Photo Curation</h1>
            <div className="flex gap-3 items-center">
              <label className="flex items-center gap-2 text-sm text-white/60">
                <input
                  type="checkbox"
                  checked={showReleaseOnly}
                  onChange={(e) => setShowReleaseOnly(e.target.checked)}
                  className="accent-[#c9a96e]"
                />
                Needs release only
              </label>
              <button
                onClick={exportSelection}
                className="px-4 py-2 bg-[#c9a96e] text-black font-medium rounded hover:bg-[#d4b87a] transition text-sm"
              >
                Export Selection ({Object.values(assignments).filter((v) => v !== "skip").length} photos)
              </button>
            </div>
          </div>

          {/* Section counts */}
          <div className="flex gap-2 flex-wrap mb-3">
            {SECTIONS.filter((s) => s !== "skip").map((s) => (
              <button
                key={s}
                onClick={() => setFilter(filter === s ? "all" : s)}
                className={`px-3 py-1 rounded text-xs font-medium border transition ${
                  filter === s ? "ring-2 ring-white/40" : ""
                } ${CATEGORY_COLORS[s]}`}
              >
                {s} ({counts[s] || 0})
              </button>
            ))}
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded text-xs font-medium border border-white/20 ${
                filter === "all" ? "bg-white/20 ring-2 ring-white/40" : "bg-white/5"
              }`}
            >
              all ({curatedPhotos.length})
            </button>
          </div>

          {/* Source filter */}
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs text-white/40 py-1">Source:</span>
            {sources.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(filter === s ? "all" : s)}
                className={`px-2 py-1 rounded text-xs border border-white/10 transition ${
                  filter === s ? "bg-white/20 ring-1 ring-white/30" : "bg-white/5 text-white/50 hover:text-white"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1800px] mx-auto px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((photo) => (
            <div
              key={photo.path}
              className={`rounded-lg overflow-hidden border transition ${
                CATEGORY_COLORS[assignments[photo.path] || photo.category]
              } ${assignments[photo.path] === "skip" ? "opacity-30" : ""}`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/api/photo?path=${encodeURIComponent(photo.path)}`}
                  alt={photo.description}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
                {photo.needsRelease && (
                  <div className="absolute top-2 right-2 bg-red-600/90 text-white text-[10px] font-bold px-2 py-1 rounded">
                    NEEDS RELEASE
                  </div>
                )}
                {photo.treatment && (
                  <div className="absolute top-2 left-2 bg-black/70 text-white/80 text-[10px] px-2 py-1 rounded">
                    {photo.treatment}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-3">
                <p className="text-sm font-medium text-white/90 mb-1">{photo.description}</p>
                <p className="text-xs text-[#c9a96e] mb-1">{photo.why}</p>
                <p className="text-[10px] text-white/30 mb-2 font-mono">{photo.file} — {photo.source}</p>

                {/* Section buttons */}
                <div className="flex flex-wrap gap-1">
                  {SECTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => assign(photo.path, s)}
                      className={`px-2 py-0.5 rounded text-[10px] font-medium border transition ${
                        assignments[photo.path] === s
                          ? `${CATEGORY_COLORS[s]} ring-1 ring-white/40`
                          : "border-white/10 text-white/30 hover:text-white/70"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
