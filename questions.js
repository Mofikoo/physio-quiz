// ============================================================
//  PHYSIOLOGY QUIZ — QUESTIONS DATABASE
//  Sources : I.1. Introduction | I.2. Cell Physiology
// ============================================================

const QUESTIONS = [

  // ══════════════════════════════════════════════════════════
  //  INTRODUCTION — HOMEOSTASIS & FEEDBACK
  // ══════════════════════════════════════════════════════════

  {
    id: 1,
    category: "Introduction & Homeostasis",
    question: "What is the literal definition of physiology?",
    answers: [
      { text: "The study of the chemical composition of living organisms", correct: false },
      { text: "The study of how the human body functions, from molecular mechanisms to whole-organism tasks", correct: true },
      { text: "The study of the structure of organs and tissues", correct: false },
      { text: "The study of diseases and their causes", correct: false }
    ],
    explanation: "Physiology (from Greek: Physis = Nature, Logos = Knowledge) is the study of biological FUNCTION — how the body works, from molecular mechanisms within cells to the actions of tissues, organs, and systems. Anatomy studies structure; pathology studies disease; biochemistry studies chemical composition."
  },

  {
    id: 2,
    category: "Introduction & Homeostasis",
    question: "Homeostasis refers to:",
    answers: [
      { text: "The complete absence of change in the internal environment", correct: false },
      { text: "Maintaining constancy of the internal environment despite changing external conditions", correct: true },
      { text: "The process by which organisms adapt permanently to new environments", correct: false },
      { text: "The elimination of all waste products from the body", correct: false }
    ],
    explanation: "Homeostasis (Greek: Homoios = 'the same', Stasis = 'stagnation') means maintaining a relatively stable internal environment despite variations in the external environment. It does NOT mean zero change — minimal fluctuations are normal and compensated by coordinated homeostatic processes. Every organ and tissue participates."
  },

  {
    id: 3,
    category: "Introduction & Homeostasis",
    question: "Which physiological values are maintained under homeostatic control? (Select all that apply — choose the MOST complete answer)",
    answers: [
      { text: "Temperature (37°C) and pH (7.4) only", correct: false },
      { text: "Temperature, pH, ion concentrations (Na⁺, K⁺...), glucose, O₂/CO₂, volume and pressure", correct: true },
      { text: "Only blood gases (O₂ and CO₂)", correct: false },
      { text: "Temperature, glucose, and blood pressure only", correct: false }
    ],
    explanation: "Homeostasis maintains ALL of the following relatively constant: O₂ and CO₂ concentrations, nutrients (glucose, amino acids, fatty acids), organic wastes (urea, urate), ions (Na⁺, K⁺, HCO₃⁻...), temperature (37°C), pH (7.4), and body fluid volume and pressure. It is a comprehensive system, not limited to a few parameters."
  },

  {
    id: 4,
    category: "Introduction & Homeostasis",
    question: "What are the THREE components of a homeostatic control system?",
    answers: [
      { text: "Receptor, nerve, muscle", correct: false },
      { text: "Sensor (receptor), integrating center, effector", correct: true },
      { text: "Hormone, receptor, response", correct: false },
      { text: "Input, processing unit, output signal", correct: false }
    ],
    explanation: "The three components are: (1) SENSOR/RECEPTOR — detects changes and sends information to the integrating center; (2) INTEGRATING CENTER (brain/spinal cord) — analyzes information and compares it to the set point; (3) EFFECTOR (muscles, endocrine glands) — acts to counter deviations from the set point and restore homeostasis."
  },

  {
    id: 5,
    category: "Introduction & Homeostasis",
    question: "What is the key difference between the nervous system and the endocrine system as integrating centers?",
    answers: [
      { text: "The nervous system uses hormones; the endocrine system uses nerve impulses", correct: false },
      { text: "The nervous system acts via rapid nerve impulses; the endocrine system acts via slow hormones through the blood", correct: true },
      { text: "The nervous system controls only voluntary actions; the endocrine system controls only involuntary ones", correct: false },
      { text: "They are functionally identical — both detect and respond at the same speed", correct: false }
    ],
    explanation: "The nervous system detects alterations and sends signals as nerve impulses → RAPID changes. The endocrine system sends chemical regulators (hormones) through the blood → SLOW changes. Both mechanisms complement each other to achieve balance. Local controls also exist alongside these two systems."
  },

  {
    id: 6,
    category: "Introduction & Homeostasis",
    question: "In a negative feedback loop, the response:",
    answers: [
      { text: "Enhances and amplifies the original stimulus", correct: false },
      { text: "Reverses and opposes the original stimulus to restore balance", correct: true },
      { text: "Has no effect on the original stimulus", correct: false },
      { text: "Triggers a cascade of the same direction of change", correct: false }
    ],
    explanation: "In NEGATIVE feedback, the response opposes (reverses) the original stimulus. It is the most common type: regulation of blood glucose, arterial pressure, blood gas concentrations, and endocrine regulation all use negative feedback. This is what keeps the internal environment stable."
  },

  {
    id: 7,
    category: "Introduction & Homeostasis",
    question: "Positive feedback is characterized by:",
    answers: [
      { text: "A response that opposes the stimulus and restores equilibrium", correct: false },
      { text: "A response that enhances the original stimulus, potentially creating 'vicious circles'", correct: true },
      { text: "The most common type of feedback in the body", correct: false },
      { text: "Regulation of blood glucose and arterial pressure", correct: false }
    ],
    explanation: "POSITIVE feedback enhances the original stimulus. It is LESS frequent than negative feedback and can lead to 'vicious circles'. Examples: blood clotting (more clotting factors → more clotting) and induction of labor (oxytocin → contractions → more pressure → more oxytocin). These processes are designed to rapidly complete a specific event."
  },

  {
    id: 8,
    category: "Introduction & Homeostasis",
    question: "Which of the following is an example of POSITIVE feedback?",
    answers: [
      { text: "Regulation of blood glucose by insulin", correct: false },
      { text: "Regulation of body temperature at 37°C", correct: false },
      { text: "Oxytocin-driven uterine contractions during labor", correct: true },
      { text: "Regulation of arterial blood pressure", correct: false }
    ],
    explanation: "Labor induction is a classic example of positive feedback: pressure on the cervix triggers oxytocin release → uterine contractions → more pressure → more oxytocin release, until delivery. Blood glucose regulation (insulin), temperature control (37°C), and arterial pressure are all examples of NEGATIVE feedback — they oppose the stimulus."
  },

  {
    id: 9,
    category: "Introduction & Homeostasis",
    question: "Alteration of homeostasis leads to:",
    answers: [
      { text: "Adaptation", correct: false },
      { text: "Disease", correct: true },
      { text: "Habituation", correct: false },
      { text: "Allostasis", correct: false }
    ],
    explanation: "According to the course, alteration of homeostasis = DISEASE. Various situations can cause an imbalance: external factors (heat, cold, mechanical trauma, lack of oxygen, virus, bacteria), internal factors (exercise, high blood pressure, pain, tumors, anxiety), or extreme situations (bleeding, intoxication, severe infection, surgery)."
  },

  // ══════════════════════════════════════════════════════════
  //  CELL PHYSIOLOGY — BODY FLUIDS
  // ══════════════════════════════════════════════════════════

  {
    id: 10,
    category: "Cell Physiology — Body Fluids",
    question: "What percentage of the adult body is composed of fluid, and how is it distributed?",
    answers: [
      { text: "50% total: 30% intracellular, 20% extracellular", correct: false },
      { text: "60% total: 40% intracellular, 20% extracellular", correct: true },
      { text: "70% total: 50% intracellular, 20% extracellular", correct: false },
      { text: "60% total: 20% intracellular, 40% extracellular", correct: false }
    ],
    explanation: "60% of the adult body is fluid: 40% is INTRACELLULAR FLUID (IF) — inside cells, and 20% is EXTRACELLULAR FLUID (EF) — outside cells. The extracellular fluid is further divided into 16% interstitial fluid and 4% plasma. Remember: 60-40-20."
  },

  {
    id: 11,
    category: "Cell Physiology — Body Fluids",
    question: "Which ion has the HIGHEST concentration in the extracellular fluid (plasma)?",
    answers: [
      { text: "K⁺ (140 mEq/L)", correct: false },
      { text: "Na⁺ (142 mEq/L)", correct: true },
      { text: "Ca²⁺ (2.4 mEq/L)", correct: false },
      { text: "Cl⁻ (103 mEq/L)", correct: false }
    ],
    explanation: "In extracellular fluid (plasma), Na⁺ is the dominant cation at 142 mEq/L. Compare this to intracellular fluid where K⁺ dominates (140 mEq/L). This inverse relationship (Na⁺ outside, K⁺ inside) is actively maintained by the Na⁺/K⁺ pump and is essential for membrane potential and cell function."
  },

  {
    id: 12,
    category: "Cell Physiology — Body Fluids",
    question: "What is the main difference between plasma and interstitial fluid?",
    answers: [
      { text: "Plasma has higher K⁺ concentration than interstitial fluid", correct: false },
      { text: "Plasma contains large amounts of proteins (e.g., albumin); interstitial fluid has very low protein concentration", correct: true },
      { text: "Interstitial fluid has higher glucose concentration than plasma", correct: false },
      { text: "There is no significant difference — their compositions are identical", correct: false }
    ],
    explanation: "Interstitial fluid has a composition very similar to plasma for most ions and nutrients, BUT plasma contains a large amount of proteins (e.g., albumin). These plasma proteins generate oncotic/colloidosmotic pressure, which prevents excessive loss of fluid volume from blood into the interstitial space (prevents edema)."
  },

  {
    id: 13,
    category: "Cell Physiology — Body Fluids",
    question: "Which ion is the predominant cation INSIDE the cell (intracellular fluid)?",
    answers: [
      { text: "Na⁺ (142 mEq/L intracellular)", correct: false },
      { text: "Ca²⁺ (0.0001 mEq/L intracellular)", correct: false },
      { text: "K⁺ (140 mEq/L intracellular)", correct: true },
      { text: "Cl⁻ (4 mEq/L intracellular)", correct: false }
    ],
    explanation: "K⁺ is the dominant intracellular cation at 140 mEq/L, compared to only 4 mEq/L extracellularly. This is the OPPOSITE of Na⁺, which is dominant extracellularly (142 mEq/L) but only 10 mEq/L intracellularly. These gradients are maintained by the Na⁺/K⁺ pump and are fundamental for generating membrane potential."
  },

  // ══════════════════════════════════════════════════════════
  //  CELL PHYSIOLOGY — PLASMA MEMBRANE
  // ══════════════════════════════════════════════════════════

  {
    id: 14,
    category: "Cell Physiology — Plasma Membrane",
    question: "What is the approximate composition of the plasma membrane?",
    answers: [
      { text: "90% lipids, 5% proteins, 5% carbohydrates", correct: false },
      { text: "40% lipids, 50% proteins, 10% carbohydrates", correct: true },
      { text: "50% lipids, 40% proteins, 10% carbohydrates", correct: false },
      { text: "70% phospholipids, 20% cholesterol, 10% proteins", correct: false }
    ],
    explanation: "The plasma membrane is composed of: 40% lipids (phospholipids 75%, cholesterol 20%, glycolipids 5%), 50% proteins, and 10% carbohydrates. Note that proteins make up the largest proportion — they serve as channels, transporters, receptors, and identification markers."
  },

  {
    id: 15,
    category: "Cell Physiology — Plasma Membrane",
    question: "What is the role of cholesterol in the plasma membrane?",
    answers: [
      { text: "It forms the hydrophilic pores through which ions pass", correct: false },
      { text: "It provides resistance and increases fluidity", correct: true },
      { text: "It acts as the primary receptor for signaling molecules", correct: false },
      { text: "It forms glycolipids for cell adhesion", correct: false }
    ],
    explanation: "Cholesterol (20% of membrane lipids) provides mechanical resistance to the membrane while also increasing its fluidity. It sits between phospholipid tails and prevents them from packing too tightly (maintaining fluidity at low temperatures) or becoming too fluid (providing stability at high temperatures)."
  },

  {
    id: 16,
    category: "Cell Physiology — Plasma Membrane",
    question: "Phospholipids are described as 'amphipathic'. This means they have:",
    answers: [
      { text: "Two phosphate groups on the same molecule", correct: false },
      { text: "A hydrophilic polar head (phosphate) and a hydrophobic nonpolar tail", correct: true },
      { text: "Two fatty acid chains that are both hydrophilic", correct: false },
      { text: "The ability to transport ions across the membrane", correct: false }
    ],
    explanation: "Amphipathic means having both hydrophilic and hydrophobic regions. Phospholipids have: a hydrophilic polar head (phosphate group, faces water) and a hydrophobic nonpolar tail (fatty acid chains, faces away from water). This property drives the formation of the bilayer: polar heads face the aqueous environment (outside and cytoplasm), and tails face each other inside the membrane."
  },

  {
    id: 17,
    category: "Cell Physiology — Plasma Membrane",
    question: "The 'fluid-mosaic model' of the plasma membrane refers to:",
    answers: [
      { text: "A rigid, fixed structure with proteins permanently embedded at set locations", correct: false },
      { text: "A dynamic membrane where phospholipids and proteins move laterally, creating a changing mosaic pattern", correct: true },
      { text: "A membrane that can completely dissolve and reform", correct: false },
      { text: "A model describing only the movement of water through aquaporins", correct: false }
    ],
    explanation: "The fluid-mosaic model describes the plasma membrane as non-solid: phospholipids AND proteins are free to move LATERALLY, creating a constantly changing mosaic pattern. This fluidity is essential for membrane function, receptor movement, and membrane fusion during endo/exocytosis."
  },

  {
    id: 18,
    category: "Cell Physiology — Plasma Membrane",
    question: "What is the difference between peripheral and integral membrane proteins?",
    answers: [
      { text: "Peripheral proteins span the membrane completely; integral proteins are on only one surface", correct: false },
      { text: "Peripheral proteins are partially embedded in one face; integral proteins span the entire membrane", correct: true },
      { text: "Both types are identical in function and location", correct: false },
      { text: "Peripheral proteins are carbohydrates; integral proteins are lipids", correct: false }
    ],
    explanation: "PERIPHERAL proteins are partially embedded in only one face (surface) of the membrane. INTEGRAL proteins span the membrane from one side to the other (transmembrane proteins). Integral proteins serve as channels, transporters, and receptors. Both can function as identification markers (immune system) and in signal transduction."
  },

  // ══════════════════════════════════════════════════════════
  //  CELL PHYSIOLOGY — MEMBRANE TRANSPORT
  // ══════════════════════════════════════════════════════════

  {
    id: 19,
    category: "Cell Physiology — Membrane Transport",
    question: "What is the fundamental difference between passive and active transport?",
    answers: [
      { text: "Passive transport requires a carrier protein; active transport does not", correct: false },
      { text: "Passive transport moves molecules down their concentration gradient (no energy); active transport moves them against the gradient (requires energy)", correct: true },
      { text: "Passive transport is only for water; active transport is only for ions", correct: false },
      { text: "Both require ATP — the difference is only in speed", correct: false }
    ],
    explanation: "PASSIVE TRANSPORT: molecules move from higher to lower concentration (down gradient) — NO energy required. ACTIVE TRANSPORT: molecules move from lower to higher concentration (against gradient) — requires energy (ATP). Simple diffusion, facilitated diffusion, and osmosis are passive. Primary and secondary active transport require energy."
  },

  {
    id: 20,
    category: "Cell Physiology — Membrane Transport",
    question: "Which substances can cross the plasma membrane by SIMPLE DIFFUSION directly through the lipid bilayer?",
    answers: [
      { text: "Glucose, amino acids, and Na⁺", correct: false },
      { text: "O₂, CO₂, alcohol, H₂O, and fatty substances (lipid-soluble molecules)", correct: true },
      { text: "All ions including K⁺, Na⁺, Ca²⁺", correct: false },
      { text: "Proteins and large carbohydrates", correct: false }
    ],
    explanation: "Simple diffusion THROUGH THE MEMBRANE (not through channels) is limited to small, nonpolar (lipid-soluble) molecules: O₂, CO₂, alcohol, H₂O, fatty substances. The rule: lower size + higher hydrophobicity = higher diffusion through the membrane. Water-soluble and charged molecules cannot pass directly — they need channels or carriers."
  },

  {
    id: 21,
    category: "Cell Physiology — Membrane Transport",
    question: "Facilitated diffusion differs from simple diffusion in that it:",
    answers: [
      { text: "Requires ATP and moves molecules against their concentration gradient", correct: false },
      { text: "Uses a carrier protein (carrier-mediated transport) with specificity, competition, and saturation", correct: true },
      { text: "Only applies to the movement of water through aquaporins", correct: false },
      { text: "Does not depend on concentration gradients", correct: false }
    ],
    explanation: "Facilitated diffusion is PASSIVE (no energy, moves down gradient) but CARRIER-MEDIATED — the substance binds to a carrier protein, causing a conformational change that transports it across. Key properties: SPECIFICITY (each carrier is specific to a substrate), COMPETITION (similar molecules compete for the same carrier), and SATURATION (maximum transport rate when all carriers are occupied). Examples: glucose (GLUT transporters), amino acids."
  },

  {
    id: 22,
    category: "Cell Physiology — Membrane Transport",
    question: "What is osmosis?",
    answers: [
      { text: "The movement of solutes from an area of low to high concentration", correct: false },
      { text: "The net diffusion of water across a selectively permeable membrane, from an area of lower solute concentration to higher solute concentration", correct: true },
      { text: "The active pumping of water against its concentration gradient", correct: false },
      { text: "The movement of all molecules regardless of the membrane permeability", correct: false }
    ],
    explanation: "Osmosis is the NET diffusion of WATER (the solvent) across a SELECTIVELY PERMEABLE MEMBRANE. Water moves from where there is MORE water (lower solute concentration) to where there is LESS water (higher solute concentration). Requirements: the membrane must be relatively impermeable to the solute but permeable to water. The plasma membrane acts as a semipermeable membrane."
  },

  {
    id: 23,
    category: "Cell Physiology — Membrane Transport",
    question: "Which of the following solutions is ISOTONIC to blood cells?",
    answers: [
      { text: "Pure water (0 osmotic pressure)", correct: false },
      { text: "A 10% NaCl solution", correct: false },
      { text: "NaCl 0.9% or Glucose 5%", correct: true },
      { text: "Any solution that contains solutes", correct: false }
    ],
    explanation: "ISOTONIC solutions have equivalent solute concentration to the inside of the cell — no net water movement occurs. NaCl 0.9% (normal saline) and Glucose 5% are the classic isotonic solutions used clinically. HYPERTONIC solutions have MORE solutes than the cell (water exits → cell shrinks). HYPOTONIC solutions have LESS solutes (water enters → cell swells → may lyse)."
  },

  {
    id: 24,
    category: "Cell Physiology — Membrane Transport",
    question: "What is oncotic (colloidosmotic) pressure?",
    answers: [
      { text: "The osmotic pressure generated by ions (Na⁺, K⁺) in the extracellular fluid", correct: false },
      { text: "The osmotic pressure generated by plasma proteins (e.g., albumin) in the blood, opposing capillary filtration", correct: true },
      { text: "The pressure generated by the heart pumping blood", correct: false },
      { text: "The pressure inside the cell cytoplasm pushing against the membrane", correct: false }
    ],
    explanation: "Oncotic (colloidosmotic) pressure is generated by plasma proteins (mainly albumin) that remain in the blood and cannot easily cross capillary walls. This osmotic pressure OPPOSES capillary filtration — it 'pulls' water back into the blood, preventing significant fluid loss into the interstitial space. When plasma protein levels fall (e.g., malnutrition, liver failure), oncotic pressure drops → edema."
  },

  {
    id: 25,
    category: "Cell Physiology — Membrane Transport",
    question: "Ion channels open and close in response to which stimuli?",
    answers: [
      { text: "Only chemical ligands binding to the channel", correct: false },
      { text: "Ligands (ligand-gated) OR voltage changes (voltage-gated)", correct: true },
      { text: "Only changes in membrane voltage", correct: false },
      { text: "Temperature changes only", correct: false }
    ],
    explanation: "Ion channels open/close by two main mechanisms: (1) LIGAND-GATED: binding of a specific ligand (neurotransmitter, hormone) to a region of the channel causes a structural change that opens it; (2) VOLTAGE-GATED: changes in membrane electrical potential trigger opening/closing. Both mechanisms are fundamental for generating and transmitting nerve impulses and muscle contractions."
  },

  // ══════════════════════════════════════════════════════════
  //  CELL PHYSIOLOGY — ACTIVE TRANSPORT & PUMPS
  // ══════════════════════════════════════════════════════════

  {
    id: 26,
    category: "Cell Physiology — Active Transport",
    question: "The Na⁺/K⁺ pump transports:",
    answers: [
      { text: "2 Na⁺ out and 3 K⁺ in per cycle", correct: false },
      { text: "3 Na⁺ out and 2 K⁺ in per cycle, hydrolyzing ATP", correct: true },
      { text: "Equal amounts of Na⁺ and K⁺ in opposite directions", correct: false },
      { text: "Na⁺ and K⁺ both into the cell using ATP", correct: false }
    ],
    explanation: "The Na⁺/K⁺ pump (ATPase) transports 3 Na⁺ OUT of the cell and 2 K⁺ INTO the cell per cycle, hydrolyzing 1 ATP. Because it moves more positive charges out than in, it contributes to the negative intracellular charge. It is present in ALL body cells and is fundamental for maintaining ion gradients, membrane potential, and enabling secondary active transport."
  },

  {
    id: 27,
    category: "Cell Physiology — Active Transport",
    question: "What are the THREE main functions of the Na⁺/K⁺ pump?",
    answers: [
      { text: "Glucose uptake, protein synthesis, and cell division", correct: false },
      { text: "Providing energy for coupled transport, generating Na⁺/K⁺ gradients for nerve/muscle impulses, and maintaining cellular osmotic balance", correct: true },
      { text: "Regulating body temperature, pH, and blood pressure", correct: false },
      { text: "Transporting large molecules, Ca²⁺ removal, and cell signaling", correct: false }
    ],
    explanation: "The Na⁺/K⁺ pump has 3 key functions: (1) The Na⁺ gradient it creates provides energy for COUPLED/SECONDARY TRANSPORT of other molecules (e.g., glucose-Na⁺ cotransport in the intestine); (2) Na⁺ and K⁺ gradients are used to produce ELECTROCHEMICAL IMPULSES for nerve and muscle function; (3) The active export of Na⁺ is important for maintaining CELLULAR OSMOTIC BALANCE (prevents cell swelling)."
  },

  {
    id: 28,
    category: "Cell Physiology — Active Transport",
    question: "The Ca²⁺ pump removes calcium from the cytoplasm by pumping it into:",
    answers: [
      { text: "The nucleus", correct: false },
      { text: "The extracellular fluid OR the cisternae of the endoplasmic reticulum", correct: true },
      { text: "The mitochondria only", correct: false },
      { text: "The lysosome for degradation", correct: false }
    ],
    explanation: "The Ca²⁺ pump is located on: (1) the plasma membrane of ALL cells → pumps Ca²⁺ into the extracellular fluid; (2) the membrane of the ER of STRIATED MUSCLE CELLS → pumps Ca²⁺ into the ER cisternae. This creates a very low intracellular [Ca²⁺] (0.0001 mEq/L). When Ca²⁺ channels open, Ca²⁺ rushes in down its concentration gradient → sudden rise in cytoplasmic Ca²⁺ triggers muscle contraction and neurotransmitter release."
  },

  {
    id: 29,
    category: "Cell Physiology — Active Transport",
    question: "In secondary active transport, where does the energy come from?",
    answers: [
      { text: "Directly from ATP hydrolysis by ATPases", correct: false },
      { text: "From the 'downhill' movement of Na⁺ into the cell (gradient created by the Na⁺/K⁺ pump)", correct: true },
      { text: "From the breakdown of glucose in glycolysis", correct: false },
      { text: "From the movement of K⁺ out of the cell", correct: false }
    ],
    explanation: "Secondary (coupled) active transport uses the ENERGY STORED in the Na⁺ concentration gradient as its indirect energy source. The Na⁺/K⁺ pump creates a high extracellular [Na⁺], and when Na⁺ flows back into the cell (down its gradient), that energy can power the movement of another molecule AGAINST its gradient. ATP is used indirectly (to maintain the Na⁺ gradient), not directly."
  },

  {
    id: 30,
    category: "Cell Physiology — Active Transport",
    question: "What is the difference between symport (cotransport) and antiport (countertransport)?",
    answers: [
      { text: "Symport uses ATP; antiport does not", correct: false },
      { text: "In symport, both molecules move in the SAME direction; in antiport, they move in OPPOSITE directions", correct: true },
      { text: "Symport is for ions only; antiport is for large molecules", correct: false },
      { text: "Symport occurs only in the intestine; antiport only in neurons", correct: false }
    ],
    explanation: "Both are types of secondary active transport, but differ in direction: SYMPORT/COTRANSPORT: both molecules move in the SAME direction (e.g., Na⁺-Glucose cotransport in the small intestine and kidney — both move inward). ANTIPORT/COUNTERTRANSPORT: molecules move in OPPOSITE directions (e.g., Na⁺-Ca²⁺ exchanger — Na⁺ enters while Ca²⁺ exits)."
  },

  {
    id: 31,
    category: "Cell Physiology — Active Transport",
    question: "The Na⁺-Glucose cotransport (symport) is a key mechanism in:",
    answers: [
      { text: "Glucose entry into neurons", correct: false },
      { text: "Glucose absorption in the small intestine and reabsorption in kidney tubules", correct: true },
      { text: "Glucose transport across the blood-brain barrier", correct: false },
      { text: "Glucose entry into all body cells for cellular respiration", correct: false }
    ],
    explanation: "Na⁺-Glucose cotransport operates in the epithelial cells of the SMALL INTESTINE (absorption of dietary glucose) and KIDNEY TUBULES (reabsorption of filtered glucose). Na⁺ flowing down its gradient into the epithelial cell drives glucose against its concentration gradient into the cell. This is why glucose absorption from the gut is active — even when intracellular glucose is higher than luminal glucose."
  },

  // ══════════════════════════════════════════════════════════
  //  CELL PHYSIOLOGY — BULK TRANSPORT (LARGE MOLECULES)
  // ══════════════════════════════════════════════════════════

  {
    id: 32,
    category: "Cell Physiology — Bulk Transport",
    question: "What is endocytosis?",
    answers: [
      { text: "The secretion of cellular products into the extracellular environment via vesicles", correct: false },
      { text: "The process of engulfing extracellular material by forming a membrane-enclosed vesicle that enters the cell", correct: true },
      { text: "The simple diffusion of large molecules through the membrane", correct: false },
      { text: "The transport of macromolecules through the nuclear membrane", correct: false }
    ],
    explanation: "Endocytosis (Outside → Inside) is the process by which cells engulf material from the extracellular environment by invaginating the plasma membrane to form a vesicle that pinches off inside the cell. It has three subtypes: PHAGOCYTOSIS ('cellular eating' of particles), PINOCYTOSIS ('drinking' of fluids), and RECEPTOR-MEDIATED ENDOCYTOSIS (specific molecule uptake via membrane receptors)."
  },

  {
    id: 33,
    category: "Cell Physiology — Bulk Transport",
    question: "Phagocytosis is primarily carried out by which cells, and what does it destroy?",
    answers: [
      { text: "Neurons and red blood cells; it destroys hormones", correct: false },
      { text: "Neutrophils and macrophages; it destroys microorganisms and aged cells", correct: true },
      { text: "Epithelial cells; it destroys dietary proteins", correct: false },
      { text: "All body cells; it destroys waste molecules", correct: false }
    ],
    explanation: "Phagocytosis ('cellular eating') is carried out primarily by NEUTROPHILS and MACROPHAGES — key immune cells. The cell extends pseudopods around the particle, which fuse to form a PHAGOSOME. The phagosome then fuses with a LYSOSOME, and lysosomal enzymes digest the ingested material. It is an essential immune defense mechanism."
  },

  {
    id: 34,
    category: "Cell Physiology — Bulk Transport",
    question: "What distinguishes pinocytosis from phagocytosis?",
    answers: [
      { text: "Pinocytosis requires ATP; phagocytosis does not", correct: false },
      { text: "Pinocytosis 'drinks' small vesicles of extracellular fluid (nonspecific); phagocytosis 'eats' large particles", correct: true },
      { text: "Pinocytosis is receptor-mediated; phagocytosis is not", correct: false },
      { text: "Pinocytosis occurs only in immune cells; phagocytosis in all cells", correct: false }
    ],
    explanation: "PHAGOCYTOSIS = 'cellular eating' — engulfs large particles (bacteria, cell debris) using pseudopods; mainly by immune cells. PINOCYTOSIS = 'cellular drinking' — the membrane furrows inward to engulf small vesicles of extracellular fluid; nonspecific process occurring in many cell types. Pinocytosis allows cells to take up large molecules dissolved in the fluid, even when they can't pass through the membrane by other means."
  },

  {
    id: 35,
    category: "Cell Physiology — Bulk Transport",
    question: "In exocytosis:",
    answers: [
      { text: "The cell imports large molecules by membrane invagination", correct: false },
      { text: "Secretory vesicles (from the Golgi) fuse with the plasma membrane and release their contents outside the cell", correct: true },
      { text: "Molecules are transported through the nuclear pore complex", correct: false },
      { text: "The cell membrane breaks down to release contents passively", correct: false }
    ],
    explanation: "EXOCYTOSIS (Inside → Outside): cellular products are packaged into vesicles by the GOLGI COMPLEX. These secretory vesicles migrate to and fuse with the plasma membrane, releasing their contents into the extracellular environment. Examples: neurotransmitter release, hormone secretion, digestive enzyme secretion. Note: exocytosis also REPLACES membrane material lost during endocytosis."
  },

  {
    id: 36,
    category: "Cell Physiology — Bulk Transport",
    question: "What is transcytosis?",
    answers: [
      { text: "The transport of molecules between the nucleus and cytoplasm", correct: false },
      { text: "Endocytosis on one surface of a cell followed by exocytosis on the opposite surface, allowing macromolecule passage through the cell", correct: true },
      { text: "The process of cell-to-cell transport via gap junctions", correct: false },
      { text: "A form of active transport specific to neurons", correct: false }
    ],
    explanation: "Transcytosis is the combination of endocytosis + exocytosis across a cell: macromolecules are ENDOCYTOSED on one surface of an endothelial cell and then EXOCYTOSED on the OPPOSITE surface. This allows large molecules that cannot cross the cell membrane by other means to traverse an epithelial or endothelial barrier entirely (e.g., transport across capillary walls or intestinal epithelium)."
  },

  // ══════════════════════════════════════════════════════════
  //  CELL PHYSIOLOGY — MEMBRANE POTENTIAL
  // ══════════════════════════════════════════════════════════

  {
    id: 37,
    category: "Cell Physiology — Membrane Potential",
    question: "Why is the inside of the cell negatively charged relative to the outside?",
    answers: [
      { text: "Because Na⁺ is pumped into the cell, creating positive intracellular charge", correct: false },
      { text: "Because of fixed intracellular anions, selective permeability to K⁺, and the Na⁺/K⁺ pump's net outward transport", correct: true },
      { text: "Because Cl⁻ accumulates inside the cell in higher concentrations", correct: false },
      { text: "Because the cell wall acts as a negative barrier", correct: false }
    ],
    explanation: "Three factors create the negative intracellular charge (membrane potential): (1) FIXED ANIONS — proteins, phosphate groups of ATP, and other organic molecules are negatively charged and cannot leave the cell; (2) SELECTIVE PERMEABILITY — the membrane is more permeable to K⁺ than other cations, causing K⁺ to accumulate intracellularly attracted by fixed anions; (3) Na⁺/K⁺ PUMP — pumps 3 Na⁺ out for 2 K⁺ in → net export of positive charge."
  },

  {
    id: 38,
    category: "Cell Physiology — Membrane Potential",
    question: "What is the resting membrane potential of a neuron?",
    answers: [
      { text: "+66 mV", correct: false },
      { text: "-90 mV", correct: false },
      { text: "-70 mV", correct: true },
      { text: "0 mV", correct: false }
    ],
    explanation: "Neurons have a resting membrane potential of approximately -70 mV (inside negative relative to outside). Most body cells range from -65 mV to -85 mV. If only K⁺ were permeable, the potential would be -90 mV (K⁺ equilibrium potential). If only Na⁺ were permeable, it would be +66 mV (Na⁺ equilibrium potential). The real resting potential is between these because multiple ions contribute."
  },

  {
    id: 39,
    category: "Cell Physiology — Membrane Potential",
    question: "The K⁺ equilibrium potential (Ek) is approximately -90 mV. This means:",
    answers: [
      { text: "At -90 mV, K⁺ would be pumped maximally out of the cell", correct: false },
      { text: "At -90 mV, the electrical force driving K⁺ inward exactly balances the chemical gradient driving K⁺ outward — no net K⁺ movement", correct: true },
      { text: "The resting membrane potential of all cells is -90 mV", correct: false },
      { text: "K⁺ has a concentration of -90 mEq/L inside the cell", correct: false }
    ],
    explanation: "The K⁺ equilibrium potential (Ek = -90 mV) is the membrane voltage at which the ELECTRICAL GRADIENT (attracting K⁺ inward due to negative inside) exactly opposes the CHEMICAL GRADIENT (driving K⁺ outward due to high intracellular [K⁺]). At this potential, there is no net movement of K⁺. It is calculated using the Nernst equation with [K⁺] = 150 mM inside and 5 mM outside."
  },

  {
    id: 40,
    category: "Cell Physiology — Membrane Potential",
    question: "According to the Nernst equation, what does the equilibrium potential (Ex) represent?",
    answers: [
      { text: "The maximum speed at which an ion can cross the membrane", correct: false },
      { text: "The membrane voltage at which a specific ion has no net movement (electrical gradient equals chemical gradient)", correct: true },
      { text: "The concentration of an ion needed to generate a membrane potential", correct: false },
      { text: "The minimum ATP needed to maintain ionic gradients", correct: false }
    ],
    explanation: "The Nernst equation (Ex = (61/z) × log([Xo]/[Xi]) at 37°C) calculates the equilibrium potential for a specific ion — the membrane voltage at which that ion has ZERO NET MOVEMENT because its electrical and chemical gradients are equal and opposite. Ek = -90 mV (for K⁺), ENa = +66 mV (for Na⁺). The real resting potential reflects the contribution of all permeable ions."
  },

  {
    id: 41,
    category: "Cell Physiology — Membrane Potential",
    question: "Why does a change in extracellular K⁺ concentration have the GREATEST effect on resting membrane potential?",
    answers: [
      { text: "Because K⁺ is the most abundant ion in the extracellular fluid", correct: false },
      { text: "Because the plasma membrane is most permeable to K⁺, so the membrane potential is mainly determined by the K⁺ gradient", correct: true },
      { text: "Because K⁺ activates the Na⁺/K⁺ pump more than other ions", correct: false },
      { text: "Because K⁺ is the only ion that can cross the membrane", correct: false }
    ],
    explanation: "The plasma membrane is MORE PERMEABLE to K⁺ than to any other cation. Since membrane potential is determined by the ions that can most easily cross the membrane, K⁺ has the dominant influence on resting potential. A change in extracellular [K⁺] shifts the K⁺ equilibrium potential, which shifts the resting membrane potential. This is why hyperkalemia (elevated blood K⁺) can dangerously affect heart and nerve function."
  },

  {
    id: 42,
    category: "Cell Physiology — Membrane Potential",
    question: "The membrane potential is described as making each cell 'act like a tiny battery'. What is the significance of this?",
    answers: [
      { text: "It allows cells to photosynthesize light energy", correct: false },
      { text: "It provides electrochemical energy essential for muscle contraction, heartbeat regulation, and nerve impulse generation", correct: true },
      { text: "It allows the cell to produce ATP by reverse electron transport", correct: false },
      { text: "It has no physiological significance beyond maintaining ion balance", correct: false }
    ],
    explanation: "The unequal distribution of charges (+ outside, − inside) creates a potential difference (measured in volts) that is physiologically critical for: MUSCLE CONTRACTION, REGULATION OF HEARTBEAT, and GENERATION OF NERVE IMPULSES. Changes in membrane permeability (opening of ion channels) cause changes in this potential difference, generating the electrical signals that drive neuromuscular function."
  },

];

// Catégories disponibles (générées automatiquement depuis les questions)
const CATEGORIES = [...new Set(QUESTIONS.map(q => q.category))];