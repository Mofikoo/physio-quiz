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
    category: "Introduction",
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
    category: "Introduction",
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
    category: "Introduction",
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
    category: "Introduction",
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
    category: "Introduction",
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
    category: "Introduction",
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
    category: "Introduction",
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
    category: "Introduction",
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
    category: "Introduction",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
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
    category: "Cell Physiology",
    question: "The membrane potential is described as making each cell 'act like a tiny battery'. What is the significance of this?",
    answers: [
      { text: "It allows cells to photosynthesize light energy", correct: false },
      { text: "It provides electrochemical energy essential for muscle contraction, heartbeat regulation, and nerve impulse generation", correct: true },
      { text: "It allows the cell to produce ATP by reverse electron transport", correct: false },
      { text: "It has no physiological significance beyond maintaining ion balance", correct: false }
    ],
    explanation: "The unequal distribution of charges (+ outside, − inside) creates a potential difference (measured in volts) that is physiologically critical for: MUSCLE CONTRACTION, REGULATION OF HEARTBEAT, and GENERATION OF NERVE IMPULSES. Changes in membrane permeability (opening of ion channels) cause changes in this potential difference, generating the electrical signals that drive neuromuscular function."
  },


  // ══════════════════════════════════════════════════════════
  //  ORGANIZATION OF THE NS — GENERAL / STRUCTURE
  // ══════════════════════════════════════════════════════════

  {
    id: 43,
    category: "Nervous System",
    question: "According to anatomy, how is the nervous system divided?",
    answers: [
      { text: "Somatic NS and Autonomic NS", correct: false },
      { text: "CNS (brain + spinal cord) and PNS (nerves)", correct: true },
      { text: "Afferent NS and Efferent NS", correct: false },
      { text: "Sympathetic NS and Parasympathetic NS", correct: false }
    ],
    explanation: "Anatomically, the NS divides into: CNS (Central Nervous System) = brain + spinal cord; and PNS (Peripheral Nervous System) = nerves, which include 31 pairs of spinal nerves (from the spinal cord) and 12 pairs of cranial nerves (from the base of the brain). The somatic/autonomic and afferent/efferent classifications are FUNCTIONAL divisions, not anatomical ones."
  },

  {
    id: 44,
    category: "Nervous System",
    question: "What distinguishes afferent from efferent pathways?",
    answers: [
      { text: "Afferent pathways are motor; efferent are sensory", correct: false },
      { text: "Afferent/sensory = centripetal (periphery → center); efferent/motor = centrifugal (center → periphery)", correct: true },
      { text: "Afferent pathways belong to the CNS; efferent to the PNS", correct: false },
      { text: "Afferent and efferent refer only to the autonomic nervous system", correct: false }
    ],
    explanation: "AFFERENT (sensory) pathways carry impulses CENTRIPETALLY — from the periphery (receptors) toward the center (CNS). EFFERENT (motor) pathways carry impulses CENTRIFUGALLY — from the center (CNS) out to the periphery (effectors: muscles and glands). A useful memory trick: Afferent = Arrives at CNS; Efferent = Exits CNS."
  },

  {
    id: 45,
    category: "Nervous System",
    question: "Which neurons exclusively belong to the CNS?",
    answers: [
      { text: "Afferent neurons", correct: false },
      { text: "Efferent neurons", correct: false },
      { text: "Interneurons", correct: true },
      { text: "Sensory neurons", correct: false }
    ],
    explanation: "INTERNEURONS (association neurons) join afferent (sensory) neurons to motor (efferent) neurons and belong EXCLUSIVELY to the CNS (brain and spinal cord). Sensory neurons have their cell body in PNS ganglia. Motor neurons have their cell body in the CNS but send axons into the PNS. Only interneurons are entirely confined within the CNS."
  },

  {
    id: 46,
    category: "Nervous System",
    question: "In the CNS, what is the difference between grey matter and white matter?",
    answers: [
      { text: "Grey matter = myelinated axons; white matter = cell bodies", correct: false },
      { text: "Grey matter = cell bodies + neuroglia + unmyelinated axons; white matter = myelinated axons", correct: true },
      { text: "Grey matter is only found in the spinal cord; white matter only in the brain", correct: false },
      { text: "Grey matter and white matter have the same composition, just different locations", correct: false }
    ],
    explanation: "GREY MATTER contains: neuron cell bodies, neuroglia, and unmyelinated axons. WHITE MATTER contains myelinated axons (the myelin sheath gives the white colour). In the brain, grey matter forms the outer cortex; white matter is deeper. In the spinal cord, the arrangement is reversed: grey matter is the internal 'butterfly' shape, white matter surrounds it. In the PNS: cell bodies → ganglia; axons → nerves."
  },

  {
    id: 47,
    category: "Nervous System",
    question: "Neurons are metabolically remarkable. Which of the following statements about their energy consumption is correct?",
    answers: [
      { text: "Neurons use fat as their primary fuel and represent 10% of body weight", correct: false },
      { text: "Neurons use only glucose, represent ~2.5% of body weight, but consume 60% of total glucose and 20% of total O₂ at rest", correct: true },
      { text: "Neurons can switch between glucose and ketone bodies freely without consequence", correct: false },
      { text: "Neurons consume 20% of total glucose and 60% of total O₂ at rest", correct: false }
    ],
    explanation: "Neurons are extremely energy-demanding: they use ONLY glucose as fuel (unlike most other cells that can use fats). Despite representing only ~2.5% of body weight, they consume 60% of total glucose and 20% of total O₂ under resting conditions. This explains why even a brief vascular blockage (a few minutes) can cause IRREVERSIBLE brain damage — neurons have no energy reserves and are extremely sensitive to hypoglycemia."
  },

  // ══════════════════════════════════════════════════════════
  //  ORGANIZATION OF THE NS — GLIAL CELLS
  // ══════════════════════════════════════════════════════════

  {
    id: 48,
    category: "Nervous System",
    question: "Which glial cell forms the myelin sheath in the CNS?",
    answers: [
      { text: "Schwann cells", correct: false },
      { text: "Astrocytes", correct: false },
      { text: "Oligodendrocytes", correct: true },
      { text: "Microglia", correct: false }
    ],
    explanation: "OLIGODENDROCYTES form myelin sheaths around axons in the CNS (they also keep nerve fibers together). SCHWANN CELLS form myelin sheaths in the PNS. Key distinction: CNS demyelination → oligodendrocytes affected (e.g., Multiple Sclerosis). PNS demyelination → Schwann cells affected. Astrocytes contribute to the BBB and feed neurons. Microglia are the CNS macrophages."
  },

  {
    id: 49,
    category: "Nervous System",
    question: "What is the role of astrocytes?",
    answers: [
      { text: "They form myelin in the PNS and repair damaged axons", correct: false },
      { text: "They feed neurons by capturing blood glucose AND cover brain capillaries contributing to the blood-brain barrier", correct: true },
      { text: "They are the macrophages of the CNS, destroying microorganisms", correct: false },
      { text: "They line the brain ventricles and produce cerebrospinal fluid", correct: false }
    ],
    explanation: "ASTROCYTES (star-shaped) have two key roles: (1) They FEED neurons by capturing glucose from the blood; (2) They cover brain capillaries with their 'pseudopods,' contributing to the BLOOD-BRAIN BARRIER (BBB). Microglia are the CNS macrophages. Ependymal cells line ventricles and form the choroid plexus. Oligodendrocytes form myelin in the CNS. Schwann cells and satellite cells serve PNS functions."
  },

  {
    id: 50,
    category: "Nervous System",
    question: "Microglia are best described as:",
    answers: [
      { text: "The cells responsible for forming myelin in the CNS", correct: false },
      { text: "The macrophages of the CNS — they destroy microorganisms and cellular debris; overactivation may contribute to neurodegeneration", correct: true },
      { text: "Cells that produce cerebrospinal fluid via the choroid plexus", correct: false },
      { text: "Supporting cells that maintain neuron cell bodies in PNS ganglia", correct: false }
    ],
    explanation: "MICROGLIA are very small glial cells that act as the immune/macrophage cells of the CNS. They destroy microorganisms and cellular debris. However, OVERACTIVE microglia release free radicals that can contribute to NEURODEGENERATIVE DISEASES (e.g., Alzheimer's, Parkinson's). Satellite cells support neuron cell bodies in PNS ganglia. Ependymal cells produce CSF."
  },

  {
    id: 51,
    category: "Nervous System",
    question: "What is the key functional advantage of saltatory conduction in myelinated axons?",
    answers: [
      { text: "It allows action potentials to travel in both directions simultaneously", correct: false },
      { text: "It produces less signal loss and higher conduction speed, as action potentials 'leap' between Nodes of Ranvier", correct: true },
      { text: "It allows a lower threshold stimulus to trigger action potentials", correct: false },
      { text: "It enables unmyelinated regions to conduct signals faster than myelinated ones", correct: false }
    ],
    explanation: "In myelinated axons, myelin INSULATES the axon and prevents ion movement through the membrane except at the NODES OF RANVIER (gaps between Schwann cells/oligodendrocytes). Action potentials 'leap' from node to node — SALTATORY CONDUCTION. Advantages: (1) LESS signal loss; (2) HIGHER speed than unmyelinated axons. Myelinated axons in CNS have no neurilemma; in PNS they have the sheath of Schwann (neurilemma) external to the myelin."
  },

  // ══════════════════════════════════════════════════════════
  //  ORGANIZATION OF THE NS — ACTION POTENTIALS
  // ══════════════════════════════════════════════════════════

  {
    id: 52,
    category: "Nervous System",
    question: "What is the threshold potential of a neuron, and what happens when it is reached?",
    answers: [
      { text: "-70 mV; the resting membrane potential is maintained", correct: false },
      { text: "-55 mV; voltage-gated Na⁺ channels open massively in a positive feedback loop, triggering a full action potential", correct: true },
      { text: "+30 mV; the action potential peaks and Na⁺ channels close", correct: false },
      { text: "-90 mV; K⁺ channels open and repolarization begins", correct: false }
    ],
    explanation: "The THRESHOLD is approximately -55 mV. When depolarization reaches -55 mV, voltage-gated Na⁺ channels open in a POSITIVE FEEDBACK LOOP: opening of Na⁺ channels → more Na⁺ enters → more depolarization → more channels open → etc. This produces a maximal, all-or-none action potential peaking at +30 mV. Below threshold, channels close and no action potential is generated."
  },

  {
    id: 53,
    category: "Nervous System",
    question: "Describe the correct sequence of ion movements during a full action potential:",
    answers: [
      { text: "K⁺ rushes in (depolarization) → Na⁺ exits (repolarization) → return to rest", correct: false },
      { text: "Na⁺ rushes in (depolarization to +30 mV) → Na⁺ channels close, K⁺ exits (repolarization) → brief hyperpolarization → Na⁺/K⁺ pump restores gradients", correct: true },
      { text: "Ca²⁺ enters (depolarization) → Cl⁻ enters (repolarization) → return to rest", correct: false },
      { text: "Na⁺ exits (depolarization) → K⁺ enters (repolarization) → return to rest", correct: false }
    ],
    explanation: "Full sequence: (1) RESTING: -70 mV, all voltage-gated channels closed. (2) DEPOLARIZATION: stimulus → Na⁺ channels open → Na⁺ rushes IN → membrane reaches +30 mV. (3) REPOLARIZATION: at +30 mV, Na⁺ channels INACTIVATE, K⁺ channels open → K⁺ rushes OUT → membrane repolarizes. (4) HYPERPOLARIZATION: K⁺ channels remain briefly open → slight overshoot below -70 mV. (5) Na⁺/K⁺ pump restores original ionic gradients (70% of neuron's ATP is used for this)."
  },

  {
    id: 54,
    category: "Nervous System",
    question: "The absolute refractory period means:",
    answers: [
      { text: "A very strong stimulus can still trigger an action potential during this period", correct: false },
      { text: "No action potential can occur regardless of stimulus strength, because Na⁺ channels are inactivated", correct: true },
      { text: "K⁺ channels are open, making it harder but not impossible to fire", correct: false },
      { text: "The neuron is at its resting potential and fully ready to fire", correct: false }
    ],
    explanation: "The ABSOLUTE REFRACTORY PERIOD is the time during which an action potential is already occurring and NO new action potential can be generated, regardless of stimulus strength. This is because Na⁺ channels are INACTIVATED (different from simply 'closed'). The RELATIVE REFRACTORY PERIOD follows — K⁺ channels are still open, so the threshold is higher, but a very strong stimulus CAN trigger an action potential. These periods limit firing frequency and ensure unidirectional propagation."
  },

  {
    id: 55,
    category: "Nervous System",
    question: "How does stimulus intensity translate into nervous system signaling, given the all-or-none law?",
    answers: [
      { text: "Stronger stimuli produce larger amplitude action potentials", correct: false },
      { text: "Intensity is encoded by the NUMBER of neurons stimulated and the FREQUENCY of action potentials, not their amplitude", correct: true },
      { text: "Stronger stimuli produce longer-duration action potentials", correct: false },
      { text: "The all-or-none law means all stimuli produce identical perceived sensations", correct: false }
    ],
    explanation: "The all-or-none law states that action potential AMPLITUDE is always maximal once threshold is reached — a supramaximal stimulus does NOT produce a bigger action potential. Instead, intensity is coded by: (1) the NUMBER of neurons firing (more receptors activated → more fibers conducting → more intense sensation); (2) the FREQUENCY of action potentials (more rapid firing = stronger signal). The most sensitive skin areas (fingertips) have the highest receptor density."
  },

  {
    id: 56,
    category: "Nervous System",
    question: "Local anesthetics like lidocaine work by:",
    answers: [
      { text: "Blocking K⁺ channels, preventing repolarization", correct: false },
      { text: "Reversibly binding to voltage-gated Na⁺ channels, preventing their opening and blocking action potential generation", correct: true },
      { text: "Inhibiting the Na⁺/K⁺ pump, depleting ionic gradients", correct: false },
      { text: "Blocking Ca²⁺ channels at the synaptic terminal", correct: false }
    ],
    explanation: "Local anesthetics (lidocaine, procaine) reversibly BIND TO VOLTAGE-GATED Na⁺ CHANNELS in the axon membrane, preventing them from opening. Without Na⁺ influx, depolarization cannot occur → no action potential → sensory axons cannot transmit pain signals. The effect is REVERSIBLE (the drug dissociates over time). This is purely a Na⁺ channel effect, not K⁺ or Ca²⁺."
  },

  {
    id: 57,
    category: "Nervous System",
    question: "What is the difference between pacemaker potentials and plateau potentials?",
    answers: [
      { text: "Pacemaker potentials are typical of neurons; plateau potentials are found in skeletal muscle", correct: false },
      { text: "Pacemaker potentials generate spontaneous, repetitive action potentials without external stimulus; plateau potentials delay repolarization and are typical of cardiac cells", correct: true },
      { text: "Both are types of action potentials found exclusively in neurons of the NS", correct: false },
      { text: "Plateau potentials generate heartbeat; pacemaker potentials generate peristalsis only", correct: false }
    ],
    explanation: "Three action potential types: (1) HERRINGBONE (nervous system): ~4 ms, the typical nerve impulse; (2) PLATEAU (cardiac cells): membrane does NOT repolarize immediately after depolarization — this prolonged depolarization allows sustained cardiac contraction; (3) PACEMAKER: spontaneous, REPETITIVE discharges without external stimulus — responsible for heartbeat rhythm, peristaltic movements, and breathing rhythm."
  },

  // ══════════════════════════════════════════════════════════
  //  ORGANIZATION OF THE NS — SYNAPSES & NEUROTRANSMITTERS
  // ══════════════════════════════════════════════════════════

  {
    id: 58,
    category: "Nervous System",
    question: "In a chemical synapse, what is the role of Ca²⁺ in neurotransmitter release?",
    answers: [
      { text: "Ca²⁺ directly opens postsynaptic ion channels", correct: false },
      { text: "The action potential activates voltage-gated Ca²⁺ channels at the presynaptic terminal; Ca²⁺ influx triggers fusion of NT vesicles with the membrane and exocytosis", correct: true },
      { text: "Ca²⁺ is released from the postsynaptic cell to trigger presynaptic vesicle fusion", correct: false },
      { text: "Ca²⁺ blocks Na⁺ channels to stop the action potential before it reaches the terminal", correct: false }
    ],
    explanation: "Sequence in a chemical synapse: (1) Action potential arrives at presynaptic terminal → activates VOLTAGE-GATED Ca²⁺ CHANNELS; (2) Ca²⁺ enters the presynaptic cytoplasm; (3) rise in cytosolic Ca²⁺ causes pre-existing NT vesicles to FUSE with the plasma membrane; (4) NT is released into the synaptic cleft by EXOCYTOSIS; (5) NT diffuses across the cleft (20-40 nm wide) to bind postsynaptic receptors. There is a synaptic delay of ~0.5 ms."
  },

  {
    id: 59,
    category: "Nervous System",
    question: "What is an EPSP vs. an IPSP?",
    answers: [
      { text: "EPSP = action potential; IPSP = resting potential", correct: false },
      { text: "EPSP = transient depolarization (Na⁺ influx, excitatory); IPSP = hyperpolarization (Cl⁻/K⁺ permeability increase, inhibitory)", correct: true },
      { text: "EPSP is produced only by ACh; IPSP only by GABA", correct: false },
      { text: "Both produce the same postsynaptic effect but differ only in duration", correct: false }
    ],
    explanation: "EPSP (Excitatory Postsynaptic Potential): NT binding opens Na⁺ channels → transient depolarization → brings the postsynaptic cell CLOSER to threshold. A single EPSP alone does NOT reach threshold for an action potential. IPSP (Inhibitory Postsynaptic Potential): NT binding increases permeability to Cl⁻ and K⁺ → hyperpolarization → moves the cell AWAY from threshold. EPSPs and IPSPs are SUMMED at the axon hillock to determine if an action potential fires."
  },

  {
    id: 60,
    category: "Nervous System",
    question: "How is neurotransmitter removed from the synaptic cleft after release?",
    answers: [
      { text: "Only by enzymatic degradation in the cleft", correct: false },
      { text: "By reuptake into the presynaptic neuron (active transport), enzymatic degradation, diffusion out of the cleft, and uptake by glial cells", correct: true },
      { text: "NT is never removed — it is inactivated by the postsynaptic receptor itself", correct: false },
      { text: "Only by diffusion out of the cleft — no active removal mechanisms exist", correct: false }
    ],
    explanation: "NT removal is essential — as long as NT is bound to its receptor, the EPSP or IPSP is maintained. Removal occurs by FOUR mechanisms: (1) REUPTAKE into the presynaptic neuron by active transport (for non-peptide NTs — this is the target of many drugs, e.g., SSRIs block serotonin reuptake); (2) ENZYMATIC DEGRADATION (e.g., acetylcholinesterase breaks down ACh); (3) DIFFUSION out of the cleft; (4) UPTAKE by glial cells."
  },

  {
    id: 61,
    category: "Nervous System",
    question: "What are the TWO main categories of postsynaptic receptors?",
    answers: [
      { text: "Nicotinic and muscarinic receptors", correct: false },
      { text: "Ligand-gated ion channels (ionotropic) and G-protein-coupled receptors (metabotropic)", correct: true },
      { text: "Adrenergic and cholinergic receptors", correct: false },
      { text: "α receptors and β receptors", correct: false }
    ],
    explanation: "The two main receptor categories are: (1) IONOTROPIC (ligand-gated ion channels): NT binding directly opens an ion channel → FAST response (milliseconds). Examples: nicotinic ACh receptors (open Na⁺/K⁺ channels), GABA-A receptors (open Cl⁻ channels). (2) METABOTROPIC (G-protein-coupled receptors): NT binding activates a G-protein → activates enzymes or ion channels via second messengers → SLOWER but longer-lasting response. Examples: muscarinic ACh receptors, adrenergic receptors."
  },

  {
    id: 62,
    category: "Nervous System",
    question: "Acetylcholine (ACh) acts on two receptor types. Match them correctly:",
    answers: [
      { text: "Nicotinic = smooth muscle & glands; Muscarinic = skeletal muscle & autonomic ganglia", correct: false },
      { text: "Nicotinic (ionotropic, Na⁺/K⁺ channels) = brain, autonomic ganglia, skeletal muscle; Muscarinic (metabotropic, G-protein) = smooth muscle, cardiac muscle, glands, brain", correct: true },
      { text: "Both receptor types are only found in the CNS", correct: false },
      { text: "Nicotinic = metabotropic; Muscarinic = ionotropic", correct: false }
    ],
    explanation: "NICOTINIC receptors (named because nicotine activates them): IONOTROPIC (form Na⁺/K⁺ channels), found in brain, autonomic ganglia, and skeletal muscle (neuromuscular junction). Antagonist: curare. MUSCARINIC receptors (activated by muscarine from mushrooms): METABOTROPIC (G-protein coupled, M1-M5 subtypes), found in smooth muscle, cardiac muscle, glands, and brain. Antagonist: atropine (from belladonna). Remember: nicotinic = fast; muscarinic = slow."
  },

  {
    id: 63,
    category: "Nervous System",
    question: "GABA is described as the most prevalent NT in the brain. What is its effect?",
    answers: [
      { text: "GABA is excitatory and opens Na⁺ channels", correct: false },
      { text: "GABA is inhibitory: opens Cl⁻ channels → hyperpolarization → IPSP", correct: true },
      { text: "GABA is the main excitatory NT of the spinal cord", correct: false },
      { text: "GABA binds nicotinic receptors and causes muscle contraction", correct: false }
    ],
    explanation: "GABA (γ-aminobutyric acid, derived from glutamic acid) is the primary INHIBITORY neurotransmitter of the CNS — the most prevalent NT in the brain. GABA receptors are ligand-gated Cl⁻ channels: GABA binding → Cl⁻ enters → hyperpolarization → IPSP. Clinically important: BENZODIAZEPINES (e.g., Valium/diazepam) bind to GABA receptors, enhancing their effect → reducing anxiety, promoting sleep, treating muscle spasms. Contrast with GLUTAMATE, the main EXCITATORY NT."
  },

  {
    id: 64,
    category: "Nervous System",
    question: "Regarding catecholamines (dopamine, noradrenaline, adrenaline), which statement is correct?",
    answers: [
      { text: "Dopamine deficiency causes Parkinson's; adrenaline/noradrenaline can act as both NT and hormones; all bind adrenergic receptors", correct: true },
      { text: "Dopamine excess causes Parkinson's; noradrenaline is only found in the PNS", correct: false },
      { text: "Adrenaline preferentially stimulates β receptors; noradrenaline equally stimulates all adrenergic receptors", correct: false },
      { text: "All catecholamines are synthesized from tryptophan", correct: false }
    ],
    explanation: "Key catecholamine facts: (1) DOPAMINE: deficiency in basal ganglia → Parkinson's disease (movement control); also involved in emotion and memory. L-DOPA crosses the BBB and is converted to dopamine (used in Parkinson's treatment). (2) NORADRENALINE: preferentially stimulates α receptors. (3) ADRENALINE: stimulates all adrenergic receptors (α1, α2, β1, β2) equally. All bind G-protein-coupled ADRENERGIC RECEPTORS. Adrenaline and noradrenaline can act as NT (synapse) or hormones (released by adrenal medulla into blood)."
  },

  {
    id: 65,
    category: "Nervous System",
    question: "Serotonin (5-HT) is primarily involved in which functions?",
    answers: [
      { text: "Movement control and Parkinson's disease", correct: false },
      { text: "Mood and behavior regulation, appetite, and cerebral circulation", correct: true },
      { text: "CNS inhibition — it is the most prevalent inhibitory NT in the brain", correct: false },
      { text: "Pain analgesia — it mimics the effects of opioids", correct: false }
    ],
    explanation: "SEROTONIN (5-hydroxytryptamine, 5-HT) is released by neurons in the brain stem. Functions: regulation of MOOD and BEHAVIOUR, APPETITE, and CEREBRAL CIRCULATION. LSD is a structural analog of serotonin (explains hallucinogenic effects). ANTIDEPRESSANTS like fluoxetine (Prozac®) work by inhibiting serotonin reuptake (SSRIs = Selective Serotonin Reuptake Inhibitors), increasing synaptic serotonin levels. Movement/Parkinson's = dopamine. Inhibition/anxiety = GABA. Analgesia = endogenous opioids."
  },

  {
    id: 66,
    category: "Nervous System",
    question: "Endocannabinoids are unique neurotransmitters because:",
    answers: [
      { text: "They are stored in vesicles and released from the presynaptic neuron like all other NTs", correct: false },
      { text: "They are lipids produced from the postsynaptic membrane, released RETROGRADE (post → pre), and inhibit NT release from presynaptic axons", correct: true },
      { text: "They are peptides released by astrocytes, not neurons", correct: false },
      { text: "They are gases, like nitric oxide, and diffuse freely in all directions", correct: false }
    ],
    explanation: "Endocannabinoids are unique in several ways: (1) They are LIPIDS (the only fatty NTs) — not stored in vesicles but produced FROM THE PLASMA MEMBRANE on demand; (2) They are released from the POSTSYNAPTIC neuron (dendrites/cell body); (3) They act RETROGRADE: diffuse BACKWARD to the presynaptic axon; (4) There they bind presynaptic receptors and INHIBIT NT release (GABA or glutamate). THC from marijuana acts on the same receptors. They may strengthen synaptic transmission during learning."
  },

  // ══════════════════════════════════════════════════════════
  //  CNS
  // ══════════════════════════════════════════════════════════

  {
    id: 67,
    category: "CNS",
    question: "What are the THREE layers of meninges protecting the CNS, from outermost to innermost?",
    answers: [
      { text: "Pia mater → Arachnoid → Dura mater", correct: false },
      { text: "Dura mater → Arachnoid → Pia mater", correct: true },
      { text: "Arachnoid → Dura mater → Pia mater", correct: false },
      { text: "Dura mater → Pia mater → Arachnoid", correct: false }
    ],
    explanation: "From outermost to innermost: DURA MATER ('tough mother') → ARACHNOID (spider-like, with subarachnoid space containing CSF) → PIA MATER ('tender mother', directly adheres to brain/spinal cord). CSF circulates in the SUBARACHNOID SPACE (between arachnoid and pia mater). Meningitis = infection/inflammation of these membranes, diagnosed by lumbar puncture examining the CSF."
  },

  {
    id: 68,
    category: "CNS",
    question: "What is cerebrospinal fluid (CSF), where is it produced, and what are its functions?",
    answers: [
      { text: "CSF is blood plasma filtered by the kidneys, produced in the renal tubules, and circulates only in the spinal cord", correct: false },
      { text: "CSF is produced by the choroid plexus in the brain ventricles; it cushions the CNS, regulates brain contents, removes metabolites, and aids diagnosis of neurological diseases", correct: true },
      { text: "CSF is produced by astrocytes and circulates exclusively within neurons", correct: false },
      { text: "CSF is identical to plasma in composition, including proteins and blood cells", correct: false }
    ],
    explanation: "CSF is produced by the CHOROID PLEXUS (capillary networks projecting from pia mater into ventricles) by separation of fluid from blood. It circulates in the subarachnoid space and ventricles, and is reabsorbed into venous blood via arachnoid granulations (Pacchioni's granulations). Composition: water, Na⁺, K⁺, Ca²⁺, Cl⁻, salts — NO CELLS. Functions: (1) mechanical cushioning; (2) regulates brain contents; (3) removes metabolites; (4) pathway for pineal secretions; (5) diagnostic value (presence of blood, bacteria = injury/infection)."
  },

  {
    id: 69,
    category: "CNS",
    question: "What is the correct hierarchical structure of the brain?",
    answers: [
      { text: "Brain = Cerebrum + Brainstem + Cerebellum; Cerebrum = Telencephalon + Diencephalon; Brainstem = Midbrain + Pons + Medulla oblongata", correct: true },
      { text: "Brain = Telencephalon + Brainstem; Brainstem = Cerebellum + Medulla oblongata", correct: false },
      { text: "Brain = Cerebrum + Cerebellum; Cerebrum = Diencephalon + Brainstem", correct: false },
      { text: "Brain = CNS + PNS + Cerebellum", correct: false }
    ],
    explanation: "Complete brain hierarchy: CNS = Brain + Spinal cord. Brain = CEREBRUM (forebrain) + BRAINSTEM + CEREBELLUM. Cerebrum = TELENCEPHALON (cerebral cortex, limbic system) + DIENCEPHALON (thalamus, hypothalamus, pineal gland). Brainstem = MIDBRAIN + PONS + MEDULLA OBLONGATA (contains cardiorespiratory centers). This hierarchy is important for understanding clinical syndromes — brainstem lesions affect vital functions; cortical lesions affect higher functions."
  },

  {
    id: 70,
    category: "CNS",
    question: "The hypothalamus is part of the diencephalon. Which of the following best describes its functions?",
    answers: [
      { text: "Controls voluntary movement, posture and balance", correct: false },
      { text: "Acts as a 'customs office' integrating activities between brain areas", correct: false },
      { text: "Coordinates the connection between NS and endocrine system (pituitary); regulates hunger, thirst, body temperature, sex drive, and is the main ANS regulator", correct: true },
      { text: "Processes sensory information from the cortex and sends motor commands to muscles", correct: false }
    ],
    explanation: "The HYPOTHALAMUS connects the nervous system to the endocrine system via the HYPOPHYSIS (pituitary gland). It regulates: hunger, thirst, body temperature, sex drive/libido, circadian rhythms, and is considered the MAIN ANS REGULATOR. The THALAMUS (also diencephalon) acts as a 'customs office' — integrating activities of many brain areas and controlling communication between them (described in the course material)."
  },

  {
    id: 71,
    category: "CNS",
    question: "The cerebellum is damaged in a patient. What clinical signs would you expect?",
    answers: [
      { text: "Loss of memory and language (aphasia)", correct: false },
      { text: "Paralysis of voluntary movement on one side of the body", correct: false },
      { text: "Ataxia (loss of coordination), intention tremor when reaching for objects, loss of balance", correct: true },
      { text: "Loss of sensation (touch, pain, temperature)", correct: false }
    ],
    explanation: "The CEREBELLUM coordinates and controls: (1) postural movements and balance (with spinal cord/brainstem); (2) voluntary movement precision (with cerebral cortex); (3) rapid complex movements (typing, piano playing); (4) plans next movement from current one. Cerebellar damage → ATAXIA (loss of coordination) and INTENTION TREMOR (tremor that appears when attempting to reach a target, like touching the nose). Language/memory loss → cortical/limbic. Paralysis → motor cortex/corticospinal tract. Sensory loss → sensory pathways."
  },

  {
    id: 72,
    category: "CNS",
    question: "What is the role of the pineal gland and melatonin?",
    answers: [
      { text: "The pineal gland produces cortisol to regulate stress responses", correct: false },
      { text: "The pineal gland modifies melatonin secretion based on light levels, regulating the circadian rhythm and signaling 'bedtime' when melatonin is high", correct: true },
      { text: "The pineal gland produces ADH (antidiuretic hormone) to regulate water balance", correct: false },
      { text: "The pineal gland secretes insulin to regulate blood glucose", correct: false }
    ],
    explanation: "The PINEAL GLAND (part of the diencephalon) is the body's biological clock mechanism. It secretes MELATONIN: HIGH light levels → LOW melatonin; LOW light levels → HIGH melatonin. High melatonin signals to the body that it is bedtime. CSF serves as a pathway for pineal secretions to reach the pituitary gland. This circadian rhythm regulation is important in sleep disorders, jet lag, and seasonal affective disorder (SAD)."
  },

  {
    id: 73,
    category: "CNS",
    question: "Broca's area and Wernicke's area: what do they each do?",
    answers: [
      { text: "Broca's area = hearing comprehension; Wernicke's area = speech production", correct: false },
      { text: "Broca's area = controls muscles needed to speak (speech production/articulation); Wernicke's area = understanding spoken language and its emotional content", correct: true },
      { text: "Both areas are in the right hemisphere and control non-verbal communication", correct: false },
      { text: "Broca's area processes visual stimuli; Wernicke's area processes auditory stimuli", correct: false }
    ],
    explanation: "BROCA'S AREA: frontal lobe (left in most people), above Silvio's fissure — MOTOR area for speech; controls muscles needed to SPEAK and articulate sounds. Damage → Broca's aphasia (can understand but can't produce speech fluently). WERNICKE'S AREA: border between temporal and parietal lobes — ASSOCIATION area; allows understanding of the MEANING of speech and its emotional content. Damage → Wernicke's aphasia (fluent but meaningless speech, poor comprehension)."
  },

  {
    id: 74,
    category: "CNS",
    question: "The limbic system is essential for:",
    answers: [
      { text: "Voluntary movement control and fine motor coordination", correct: false },
      { text: "Emotional behaviors, learning, memory, and survival instincts (fear, aggression, hunger, libido)", correct: true },
      { text: "Processing primary visual and auditory information", correct: false },
      { text: "Regulating heartbeat and respiratory rate automatically", correct: false }
    ],
    explanation: "The LIMBIC SYSTEM (from Latin 'limbus' = edge, forms a ring) includes: cingulate gyrus, amygdala, hippocampus, and septal nuclei — structures from cortex, diencephalon, and brainstem. It mediates EMOTIONAL BEHAVIORS (fear, aggression, affection, pleasure, sadness) and LEARNING and MEMORY mechanisms. It is evolutionarily the oldest, most conserved part of the mammalian brain. Hippocampus is particularly crucial for memory. Amygdala for fear/emotional responses."
  },

  {
    id: 75,
    category: "CNS",
    question: "Regarding cerebral lateralization, which statement is correct?",
    answers: [
      { text: "The left hemisphere controls movement on the left side of the body", correct: false },
      { text: "The two hemispheres are connected by the corpus callosum; the left controls right side movements and vice versa; hemispheres are specialized for different functions", correct: true },
      { text: "The corpus callosum separates the hemispheres completely with no communication between them", correct: false },
      { text: "The right hemisphere controls language in all people", correct: false }
    ],
    explanation: "CEREBRAL LATERALIZATION: hemispheres are separated by a groove but joined by the CORPUS CALLOSUM (mass of white fibers). LEFT hemisphere controls RIGHT side of body (and vice versa). Each hemisphere is specialized differently (HEMISPHERICITY): typically, the LEFT hemisphere is dominant for language (Broca's and Wernicke's areas), analytical reasoning; the RIGHT for spatial, creative, and emotional processing. However, 'dominant for language LEFT hemisphere' applies to most but not all people."
  },

  {
    id: 76,
    category: "CNS",
    question: "Memory formation is related to synaptic plasticity. How do habituation and sensitization differ?",
    answers: [
      { text: "Habituation strengthens synaptic pathways; sensitization weakens them", correct: false },
      { text: "Habituation = negative memory (brain discards unimportant info, depressing synaptic pathways); sensitization = positive memory (brain stores important info, facilitating synaptic pathways)", correct: true },
      { text: "Both habituation and sensitization increase synaptic strength equally", correct: false },
      { text: "Habituation and sensitization apply only to the cerebellum", correct: false }
    ],
    explanation: "Memory is produced by changes in synaptic transmission strength (SYNAPTIC PLASTICITY). Two forms: HABITUATION (negative memory) — the brain INHIBITS unimportant, repetitive information → depression of synaptic transmission (e.g., you stop noticing background noise). SENSITIZATION (positive memory) — the brain stores important information → FACILITATION of synaptic pathways (e.g., you remember a surprising or emotionally charged event). Short-term memory lasts minutes without repetition; long-term memory involves more permanent synaptic changes."
  },

  {
    id: 77,
    category: "CNS",
    question: "The blood-brain barrier (BBB): which substances can cross it easily, and why is it clinically relevant?",
    answers: [
      { text: "All substances cross the BBB equally; it is not clinically relevant", correct: false },
      { text: "Water, O₂, CO₂, glucose, alcohol and lipid-soluble substances cross easily; ions/polar molecules need carriers; this complicates drug treatment of brain diseases", correct: true },
      { text: "Only ions can cross the BBB; all other molecules are blocked", correct: false },
      { text: "The BBB is formed exclusively by microglia and blocks all drugs", correct: false }
    ],
    explanation: "The BBB is formed by tight junctions between brain capillary epithelial cells + astrocyte pseudopods. EASY CROSSING: water, O₂, CO₂, glucose, alcohol, lipid-soluble substances. NEED CARRIERS: ions, polar molecules. CLINICAL IMPORTANCE: dopamine cannot cross the BBB → L-DOPA (its precursor) is used instead for Parkinson's disease. Some antibiotics cannot cross → only BBB-permeable antibiotics used for meningitis. Drug developers must always consider BBB permeability for CNS drugs."
  },

  // ══════════════════════════════════════════════════════════
  //  PNS — SPINAL & CRANIAL NERVES
  // ══════════════════════════════════════════════════════════

  {
    id: 78,
    category: "PNS",
    question: "How many pairs of spinal nerves are there, and how are they distributed?",
    answers: [
      { text: "12 pairs: 4 cervical, 4 thoracic, 2 lumbar, 2 sacral", correct: false },
      { text: "31 pairs: 8 cervical, 12 thoracic, 5 lumbar, 5 sacral, 1 coccygeal", correct: true },
      { text: "24 pairs: evenly distributed along the spine", correct: false },
      { text: "31 pairs: 12 cervical, 8 thoracic, 5 lumbar, 4 sacral, 2 coccygeal", correct: false }
    ],
    explanation: "There are 31 pairs of spinal nerves: C1-C8 (8 pairs cervical), T1-T12 (12 thoracic), L1-L5 (5 lumbar), S1-S5 (5 sacral), and 1 coccygeal pair. All exit through the intervertebral foramen EXCEPT C1, which emerges between the atlas and occipital bone. All spinal nerves contain BOTH motor and sensory fibers → they are MIXED NERVES. Each innervates a specific skin area (DERMATOME) and muscle group (MYOTOME)."
  },

  {
    id: 79,
    category: "PNS",
    question: "What is the functional difference between the ventral root and the dorsal root of a spinal nerve?",
    answers: [
      { text: "Ventral root = sensory; dorsal root = motor", correct: false },
      { text: "Ventral root = motor neurons; dorsal root = sensory neurons (with dorsal root ganglion containing sensory cell bodies)", correct: true },
      { text: "Both roots contain the same type of neurons", correct: false },
      { text: "Ventral root = parasympathetic; dorsal root = sympathetic", correct: false }
    ],
    explanation: "VENTRAL (anterior) ROOT: contains MOTOR neurons (efferent). DORSAL (posterior) ROOT: contains SENSORY neurons (afferent). The dorsal root has a visible lump — the DORSAL ROOT GANGLION — which contains the CELL BODIES of the sensory neurons. After the two roots merge, the spinal nerve is MIXED (both sensory and motor). This is clinically important: selective damage to a dorsal root → sensory loss without motor; ventral root damage → motor loss without sensory loss."
  },

  {
    id: 80,
    category: "PNS",
    question: "Which cranial nerve has the most widespread parasympathetic influence on the body?",
    answers: [
      { text: "Trigeminal nerve (V)", correct: false },
      { text: "Facial nerve (VII)", correct: false },
      { text: "Vagus nerve (X)", correct: true },
      { text: "Glossopharyngeal nerve (IX)", correct: false }
    ],
    explanation: "The VAGUS NERVE (X) is the most extensive cranial nerve: SENSORY: receives from epiglottis, pharynx, and controls blood pressure and respiratory function. SOMATIC MOTOR: swallowing, coughing, phonation. PARASYMPATHETIC MOTOR: innervates smooth muscles and glands of the ENTIRE DIGESTIVE TRACT and the MYOCARDIUM — the widest parasympathetic distribution of any cranial nerve. 'Vagus' means 'wandering' in Latin, reflecting its extensive distribution."
  },

  {
    id: 81,
    category: "PNS",
    question: "What is a dermatome?",
    answers: [
      { text: "A muscle or muscle group innervated by a single spinal nerve (motor)", correct: false },
      { text: "An area of SKIN surface innervated by a single spinal nerve (sensory)", correct: true },
      { text: "A layer of the meninges surrounding the spinal cord", correct: false },
      { text: "A type of glial cell found in the peripheral ganglia", correct: false }
    ],
    explanation: "DERMATOME: each area of SKIN innervated by a SINGLE spinal nerve. There is a systematic relationship between spinal nerve level and body region innervated. Clinically essential: pain in a specific dermatome indicates which spinal nerve/level is involved (e.g., herpes zoster follows a dermatome). MYOTOME (to distinguish): a MUSCLE GROUP that receives motor axons from a given spinal nerve. Both dermatomes and myotomes are used in neurological assessment."
  },

  // ══════════════════════════════════════════════════════════
  //  PNS — AUTONOMIC NERVOUS SYSTEM
  // ══════════════════════════════════════════════════════════

  {
    id: 82,
    category: "PNS",
    question: "What is the key structural difference between the somatic motor pathway and the ANS motor pathway?",
    answers: [
      { text: "The somatic pathway uses 2 neurons; the ANS uses 1 neuron", correct: false },
      { text: "The somatic pathway uses a SINGLE motor neuron from CNS to skeletal muscle; the ANS uses TWO neurons: preganglionic + postganglionic", correct: true },
      { text: "Both pathways use identical numbers of neurons", correct: false },
      { text: "The ANS pathway only has postganglionic neurons — there are no preganglionic neurons", correct: false }
    ],
    explanation: "SOMATIC motor pathway: ONE motor neuron extends directly from the CNS grey matter (ventral root) to the SKELETAL MUSCLE. ANS motor pathway: TWO neurons always: (1) PREGANGLIONIC neuron: cell body in CNS, MYELINATED axon; (2) POSTGANGLIONIC neuron: cell body in a ganglion, AMYELINATED (unmyelinated) axon that synapses with the effector organ. This two-neuron arrangement applies to BOTH sympathetic and parasympathetic divisions."
  },

  {
    id: 83,
    category: "PNS",
    question: "Which neurotransmitters are used at each synapse in the sympathetic and parasympathetic systems?",
    answers: [
      { text: "All ANS synapses use NA (noradrenaline)", correct: false },
      { text: "All preganglionic neurons (sympathetic and parasympathetic) release ACh on nicotinic receptors; sympathetic postganglionic → NA (on α/β receptors); parasympathetic postganglionic → ACh (on muscarinic receptors)", correct: true },
      { text: "Sympathetic preganglionic → NA; Parasympathetic preganglionic → ACh", correct: false },
      { text: "All autonomic synapses use ACh", correct: false }
    ],
    explanation: "NT distribution in the ANS: ALL PREGANGLIONIC neurons (both sympathetic AND parasympathetic): release ACh → acts on NICOTINIC receptors. POSTGANGLIONIC: SYMPATHETIC → releases NORADRENALINE (NA) → acts on α and β adrenergic receptors (EXCEPTION: sweat glands = ACh). PARASYMPATHETIC → releases ACh → acts on MUSCARINIC receptors. Memory aid: ACh = parasympathetic NT (and all preganglionic); NA = sympathetic NT at target organs."
  },

  {
    id: 84,
    category: "PNS",
    question: "Compare the anatomical features of sympathetic vs. parasympathetic preganglionic and postganglionic fibers:",
    answers: [
      { text: "Sympathetic: short pre, long post; parasympathetic: long pre, short post; ganglia near the organ for parasympathetic (terminal ganglia)", correct: true },
      { text: "Sympathetic: long pre, short post; parasympathetic: short pre, long post; ganglia far from organ for sympathetic", correct: false },
      { text: "Both divisions have equally long pre and postganglionic fibers", correct: false },
      { text: "Sympathetic ganglia are always adjacent to target organs; parasympathetic ganglia are in the paravertebral chain", correct: false }
    ],
    explanation: "SYMPATHETIC: preganglionic = SHORT + MYELINATED; postganglionic = LONG + UNMYELINATED. Ganglia are FAR from target organ (paravertebral chain or collateral ganglia). PARASYMPATHETIC: preganglionic = LONG + MYELINATED; postganglionic = SHORT + UNMYELINATED. Ganglia are CLOSE TO or WITHIN the target organ (TERMINAL GANGLIA). Sympathetic preganglionic fibers exit T1-L2 (thoracolumbar). Parasympathetic preganglionic fibers exit from the brain (CN III, VII, IX, X) and S2-S4 (craniosacral)."
  },

  {
    id: 85,
    category: "PNS",
    question: "Which of the following effects are produced by SYMPATHETIC activation (fight-or-flight)?",
    answers: [
      { text: "Pupil constriction, bradycardia, increased digestive secretions, sphincter relaxation", correct: false },
      { text: "Pupil dilation, tachycardia, increased blood flow to skeletal muscles, sphincter contraction, pale skin, dry mouth", correct: true },
      { text: "Increased blood flow to skin, stimulation of digestion, decreased heart rate", correct: false },
      { text: "Decreased alertness, sphincter relaxation, vasodilation in skeletal muscles", correct: false }
    ],
    explanation: "SYMPATHETIC (fight-or-flight, stress): PUPIL DILATION (see better), TACHYCARDIA (increased heart rate and force), INCREASED blood flow to SKELETAL MUSCLES, PALE SKIN (reduced blood flow to skin), DRY MOUTH, SPHINCTER CONTRACTION, sweating, bronchodilation. These prepare the body for sudden physical exertion. PARASYMPATHETIC (rest-and-digest): pupil constriction, bradycardia, increased digestion and motility, sphincter relaxation, vasodilation of skin, reduced heart rate."
  },

  {
    id: 86,
    category: "PNS",
    question: "Why do adrenergic (sympathetic) effects last LONGER than cholinergic (parasympathetic) effects after stimulation stops?",
    answers: [
      { text: "Because NA has a higher affinity for its receptors than ACh", correct: false },
      { text: "Because NA is degraded much more slowly than ACh — MAO and COMT are slow enzymes compared to the rapid degradation of ACh by acetylcholinesterase", correct: true },
      { text: "Because sympathetic fibers release more NT than parasympathetic fibers", correct: false },
      { text: "Because adrenergic receptors stay active longer once bound", correct: false }
    ],
    explanation: "ACh is rapidly inactivated by ACETYLCHOLINESTERASE → fast, short-lived effects. Noradrenaline/Adrenaline are degraded by two slow enzymes: (1) MAO (Monoamine Oxidase): reuptake into the presynaptic button for degradation; (2) COMT (Catechol-O-Methyltransferase): degrades remaining NT. BOTH are much slower than AChE → adrenergic effects PERSIST longer after sympathetic stimulation ends. This is why stress responses (elevated HR, blood pressure) take longer to calm down than parasympathetic effects."
  },

  {
    id: 87,
    category: "PNS",
    question: "Which brain areas control the ANS?",
    answers: [
      { text: "Only the cerebral cortex controls the ANS", correct: false },
      { text: "Spinal cord (reflex control), hypothalamus (main regulator), limbic system (emotional responses), and cerebellum (nausea, cardiovascular changes)", correct: true },
      { text: "Only the spinal cord controls the ANS through reflex arcs", correct: false },
      { text: "The ANS is entirely independent of CNS control", correct: false }
    ],
    explanation: "Multiple CNS levels control the ANS: SPINAL CORD: reflex control of cardiovascular, pulmonary, urinary, reproductive and digestive systems. HYPOTHALAMUS: temperature, hunger, thirst — considered the MAIN ANS regulator. LIMBIC SYSTEM: mediates emotional ANS responses (blushing, pallor, fainting, cold sweat, rapid heart rate when frightened). CEREBELLUM: nausea, sweating, cardiovascular changes. The ANS is NOT fully autonomous — it is constantly modulated by higher CNS centers, which is why emotional states affect heart rate, digestion, etc."
  },


  // ══════════════════════════════════════════════════════════
  //  NERVOUS DISORDERS & DRUGS — PATHOPHYSIOLOGY
  // ══════════════════════════════════════════════════════════

  {
    id: 88,
    category: "Nervous System Drugs",
    question: "What is the neurochemical imbalance underlying Parkinson's disease, and why can't dopamine be given directly?",
    answers: [
      { text: "Excess dopamine and deficiency of acetylcholine; dopamine is too large to absorb orally", correct: false },
      { text: "Deficiency of dopamine → excess of cholinergic activity; dopamine cannot cross the blood-brain barrier", correct: true },
      { text: "Deficiency of serotonin and noradrenaline; serotonin degrades too quickly in plasma", correct: false },
      { text: "Excess of GABA causing over-inhibition; GABA cannot be blocked selectively enough", correct: false }
    ],
    explanation: "Parkinson's disease is caused by degeneration of dopaminergic neurons in the basal ganglia → DOPAMINE DEFICIENCY → relative excess of cholinergic activity → symptoms: shaking, rigidity, slowness of movement (bradykinesia), difficulty walking. Dopamine CANNOT CROSS THE BBB, so giving it directly is ineffective. L-DOPA (levodopa), its precursor, crosses the BBB and is then converted to dopamine in the brain. MAO-B inhibitors (e.g., selegiline) and COMT inhibitors (e.g., entacapone) slow the breakdown of dopamine/L-DOPA to prolong its effect."
  },

  {
    id: 89,
    category: "Nervous System Drugs",
    question: "What is the cause of depression according to this course, and what is the main mechanism of antidepressant drugs?",
    answers: [
      { text: "Excess of dopamine and serotonin; antidepressants block dopamine receptors", correct: false },
      { text: "Deficiency/imbalance of serotonin (5-HT) and noradrenaline (NA); antidepressants inhibit their reuptake or prevent their enzymatic breakdown (MAO inhibitors)", correct: true },
      { text: "Excess of GABA causing over-inhibition; antidepressants block GABA receptors", correct: false },
      { text: "Deficiency of acetylcholine; antidepressants are anticholinesterases", correct: false }
    ],
    explanation: "Depression is caused by a DEFICIENCY/IMBALANCE of 5-HT (serotonin) and NA (noradrenaline). Main drug classes: (1) SSRIs (fluoxetine/Prozac®, citalopram, sertraline): block serotonin reuptake → more 5-HT in synapse; (2) SSNRIs (duloxetine, venlafaxine): block both 5-HT and NA reuptake; (3) TCAs (amitriptyline, imipramine): block NA and 5-HT reuptake (less selective, more side effects); (4) MAO-A inhibitors: prevent breakdown of NA and 5-HT. All take ~2 weeks to produce effect."
  },

  {
    id: 90,
    category: "Nervous System Drugs",
    question: "What is the difference between anxiety and stress?",
    answers: [
      { text: "Stress is always pathological; anxiety is a normal preparatory response", correct: false },
      { text: "Stress is a normal warning sign of imminent danger; anxiety is stress that CONTINUES after the stressing factor has disappeared — only pathological when it exceeds adaptive capacity", correct: true },
      { text: "They are the same condition with different names", correct: false },
      { text: "Anxiety is caused by excess dopamine; stress by excess cortisol", correct: false }
    ],
    explanation: "STRESS: a normal feeling of physical/emotional tension — a warning sign that prepares the organism to deal with a threat. ANXIETY: stress that CONTINUES after the stressful factor has disappeared. Anxiety is normal before certain situations (exams, public speaking) — it becomes PATHOLOGICAL only when it exceeds the person's adaptive capacity. Treatment: relaxation techniques + psychological assistance + anxiolytics (benzodiazepines) ± antidepressants if needed."
  },

  {
    id: 91,
    category: "Nervous System Drugs",
    question: "Benzodiazepines are the 1st-choice anxiolytics. What is their mechanism of action?",
    answers: [
      { text: "They block dopamine D2 receptors, reducing psychomotor agitation", correct: false },
      { text: "They enhance GABA action → hyperpolarization → CNS depression (anxiolytic, hypnotic, muscle relaxant, anticonvulsant effects)", correct: true },
      { text: "They inhibit serotonin reuptake, increasing mood-stabilizing effects", correct: false },
      { text: "They block Na⁺ channels in neurons, reducing neuronal excitability", correct: false }
    ],
    explanation: "Benzodiazepines (BZDs) ENHANCE GABA action at GABA-A receptors → increased Cl⁻ influx → hyperpolarization → CNS depression. This produces: ANXIOLYTIC (anxiety reduction), HYPNOTIC (sleep induction), MUSCLE RELAXANT, and ANTICONVULSANT effects. Short-acting BZDs (alprazolam, midazolam) are preferred for insomnia; long-acting BZDs (diazepam/Valium®, flurazepam) for anxiety. Key ADRs: sedation, ataxia, motor incoordination, amnesia, dependence. Interactions: alcohol, opioids, antihistamines all enhance CNS depression."
  },

  {
    id: 92,
    category: "Nervous System Drugs",
    question: "How do antiepileptic drugs reduce neuronal excitability?",
    answers: [
      { text: "By enhancing dopamine activity in the basal ganglia", correct: false },
      { text: "By BLOCKING Na⁺ channels (reducing excitability) and/or ENHANCING GABA action (increasing inhibition)", correct: true },
      { text: "By blocking Ca²⁺ channels at the neuromuscular junction", correct: false },
      { text: "By inhibiting acetylcholinesterase, reducing ACh levels", correct: false }
    ],
    explanation: "Antiepileptics work via two main mechanisms: (1) Na⁺ CHANNEL BLOCKERS (phenytoin, carbamazepine): prevent repetitive neuronal firing by stabilizing Na⁺ channels in their inactivated state → inhibit neuronal excitability; (2) GABA ENHANCERS (valproic acid, phenobarbital, benzodiazepines): increase inhibitory GABAergic transmission → hyperpolarization → neuronal inhibition. Epilepsy is caused by excessive and abnormal activity of brain neurons — both mechanisms reduce this hyperexcitability."
  },

  {
    id: 93,
    category: "Nervous System Drugs",
    question: "What is the mechanism of antipsychotic drugs, and which neurotransmitter system is primarily targeted?",
    answers: [
      { text: "They enhance serotonin reuptake and block GABA receptors", correct: false },
      { text: "They block D2 dopamine receptors; atypical antipsychotics also affect serotonin (for negative symptoms)", correct: true },
      { text: "They increase dopamine release in the prefrontal cortex", correct: false },
      { text: "They block nicotinic ACh receptors at the neuromuscular junction", correct: false }
    ],
    explanation: "Antipsychotics primarily BLOCK D2 DOPAMINE RECEPTORS — this produces the therapeutic (antipsychotic) effect. CONVENTIONAL (typical) antipsychotics (chlorpromazine, haloperidol): potent D2 blockers → high risk of extrapyramidal effects (pharmacological parkinsonism). ATYPICAL antipsychotics (clozapine, olanzapine, risperidone): block D2 + serotonin receptors → better for negative symptoms (which result from ↓ dopaminergic + ↑ serotoninergic activity) + fewer extrapyramidal side effects. Important for physio: D2 blockade can decrease reflexes and cause pharmacological parkinsonism."
  },

  {
    id: 94,
    category: "Nervous System Drugs",
    question: "Regarding sympathomimetic (adrenergic) drugs — what are their mechanisms and a clinical example?",
    answers: [
      { text: "They block adrenergic receptors; used as antihypertensives and beta-blockers", correct: false },
      { text: "They mimic sympathetic stimulation — directly (stimulate adrenergic receptors) or indirectly (increase NA release, e.g. amphetamines); clinical use: nasal decongestants (vasoconstriction via α receptors)", correct: true },
      { text: "They enhance parasympathetic tone by activating muscarinic receptors", correct: false },
      { text: "They block Na⁺ channels in sensory axons to prevent pain transmission", correct: false }
    ],
    explanation: "SYMPATHOMIMETIC drugs reproduce effects of sympathetic NS stimulation via: (1) DIRECT: stimulate adrenergic receptors (phenylephrine, oxymetazoline, tetrazoline → α1 agonists → vasoconstriction → nasal decongestants); (2) INDIRECT: increase NA release (amphetamines); (3) MIXED: ephedrine, pseudoephedrine (nasal decongestants). For physiotherapists: these drugs affect the CV system → CHECK VITAL SIGNS (BP, HR, respiratory rate). Exercise response may be altered."
  },

  {
    id: 95,
    category: "Nervous System Drugs",
    question: "β-blockers (sympatholytic drugs) are used for which conditions, and what is their key precaution for physiotherapists?",
    answers: [
      { text: "Used for Parkinson's disease and epilepsy; precaution: increased risk of seizures during exercise", correct: false },
      { text: "Used for angina pectoris, arrhythmias, and hypertension; precaution: risk of orthostatic hypotension — avoid rapid postural changes", correct: true },
      { text: "Used for anxiety and depression; precaution: the drugs cause excessive sweating during exercise", correct: false },
      { text: "Used for glaucoma only; no specific physiotherapy precautions needed", correct: false }
    ],
    explanation: "β-BLOCKERS (propranolol, carvedilol, atenolol) block β-adrenergic receptors → used for ANGINA PECTORIS, ARRHYTHMIAS, and HYPERTENSION. α-BLOCKERS → hypertension and migraines. Physiotherapy precautions: (1) MONITOR BLOOD PRESSURE; (2) AVOID RAPID POSTURAL CHANGES — orthostatic hypotension risk (disorientation, loss of balance, falls); (3) Exercise response may be altered due to bronchoconstriction and peripheral vasoconstriction. Must be withdrawn PROGRESSIVELY (abrupt cessation can cause rebound hypertension or angina)."
  },

  {
    id: 96,
    category: "Nervous System Drugs",
    question: "Parasympathomimetic (cholinergic) drugs enhance ACh effects. What are their clinical uses?",
    answers: [
      { text: "Treatment of hypertension (muscarinic agonists) and Parkinson's disease (anticholinesterases)", correct: false },
      { text: "Pilocarpine (direct muscarinic agonist) for glaucoma; anticholinesterases (neostigmine, donepezil, rivastigmine) for Alzheimer's", correct: true },
      { text: "Treatment of asthma (bronchodilation) and intestinal spasms (reduced motility)", correct: false },
      { text: "Nasal decongestants and cardiac arrhythmias", correct: false }
    ],
    explanation: "PARASYMPATHOMIMETIC drugs reproduce parasympathetic NS effects: DIRECT (stimulate muscarinic receptors): pilocarpine → pupil constriction + ciliary muscle contraction → reduces intraocular pressure → used for GLAUCOMA. INDIRECT (anticholinesterases — inhibit AChE → more ACh at synapse): neostigmine (myasthenia gravis), donepezil and rivastigmine (ALZHEIMER's disease — improve cholinergic transmission in the brain). Physio precaution: may cause muscle weakness; ophthalmic drugs → myopia/reduced night vision → risk of falls."
  },

  {
    id: 97,
    category: "Nervous System Drugs",
    question: "Parasympatholytic (anticholinergic) drugs BLOCK muscarinic receptors. Match the drug to its clinical use:",
    answers: [
      { text: "Ipratropium/tiotropium → Parkinson's; biperiden → asthma; scopolamine → intestinal spasms", correct: false },
      { text: "Scopolamine/hyoscine → intestinal spasms; ipratropium/tiotropium → asthma (bronchodilation); biperiden/trihexyphenidyl → Parkinson's disease", correct: true },
      { text: "All anticholinergics are used exclusively for asthma", correct: false },
      { text: "Scopolamine → Parkinson's; ipratropium → intestinal spasms; biperiden → glaucoma", correct: false }
    ],
    explanation: "ANTICHOLINERGIC drugs block muscarinic receptors: SCOPOLAMINE/HYOSCINE → blocks muscarinic receptors in GI smooth muscle → reduces motility → used for INTESTINAL SPASMS. IPRATROPIUM/TIOTROPIUM BROMIDE → blocks muscarinic receptors in airways → bronchodilation → used for ASTHMA/COPD. BIPERIDEN/TRIHEXYPHENIDYL → blocks cholinergic transmission → reduces excess ACh activity in Parkinson's (remember: Parkinson's = dopamine deficiency + excess cholinergic activity). Physio precaution for ALL anticholinergics: elderly more sensitive → confusion, disorientation; drowsiness + blurred vision → fall prevention needed."
  },

  // ══════════════════════════════════════════════════════════
  //  SENSORY PHYSIOLOGY — RECEPTORS & PATHWAYS
  // ══════════════════════════════════════════════════════════

  {
    id: 98,
    category: "Sensory Physiology",
    question: "Somatic sensory pathways always involve how many neurons, and what is decussation?",
    answers: [
      { text: "2 neurons; decussation = the splitting of sensory and motor signals at the thalamus", correct: false },
      { text: "At least 3 neurons (primary: periphery → CNS; secondary: CNS → thalamus; tertiary: thalamus → cortex); decussation = crossing to the opposite side of the brain", correct: true },
      { text: "1 neuron that travels directly from receptor to cortex; decussation does not occur in sensory pathways", correct: false },
      { text: "4 neurons; decussation = duplication of signals for bilateral processing", correct: false }
    ],
    explanation: "Somatic sensory pathways always pass through AT LEAST 3 NEURON STATIONS: (1) PRIMARY neuron: periphery → spinal cord or brainstem; (2) SECONDARY neuron: spinal cord/brainstem → thalamus; (3) TERTIARY neuron: thalamus → cerebral cortex (sensory areas). Most sensory pathways are CROSSED (DECUSSATION): each side of the brain registers sensations from the OPPOSITE side of the body. This is why a stroke in the LEFT cortex causes sensory loss on the RIGHT side of the body."
  },

  {
    id: 99,
    category: "Sensory Physiology",
    question: "What is receptor ADAPTATION, and which receptors do NOT adapt?",
    answers: [
      { text: "Adaptation = permanent sensitization to a stimulus; nociceptors never adapt", correct: false },
      { text: "Adaptation = the magnitude of the action potential DECREASES over time with a continuous stimulus; proprioceptors (muscles, tendons, joints) do NOT adapt — they continuously report position", correct: true },
      { text: "Adaptation = the receptor changes its type of stimulus it responds to; thermoreceptors never adapt", correct: false },
      { text: "Adaptation = complete loss of receptor function over time; photoreceptors never adapt", correct: false }
    ],
    explanation: "ADAPTATION: the action potential magnitude (and sensation intensity) DECREASES over time with a CONTINUOUS stimulus — e.g., you stop feeling your clothes after putting them on. TOUCH receptors adapt QUICKLY. In contrast, PROPRIOCEPTORS (in muscles, tendons, joints) do NOT adapt — they continuously send impulses to the brain about body position and movement, which is essential for maintaining posture and coordination. This distinction is clinically important: proprioceptive training relies on these non-adapting receptors."
  },

  {
    id: 100,
    category: "Sensory Physiology",
    question: "Classify the following receptors by location: exteroceptors, interoceptors/visceroceptors, and proprioceptors:",
    answers: [
      { text: "Exteroceptors = in muscles/joints; proprioceptors = in the skin; interoceptors = in blood vessels", correct: false },
      { text: "Exteroceptors = near external body surface (respond to external stimuli); interoceptors = in viscera/blood vessels (usually unconscious); proprioceptors = in muscles, tendons, joints (body position and movement)", correct: true },
      { text: "All three types are found exclusively in the skin", correct: false },
      { text: "Exteroceptors = in the retina and cochlea; interoceptors = in joints; proprioceptors = in the skin", correct: false }
    ],
    explanation: "Classification by LOCATION: EXTEROCEPTORS: at/near external body surface → respond to external stimuli (touch, temperature, pain, pressure of skin). INTEROCEPTORS/VISCEROCEPTORS: in blood vessels and internal organs → produce impulses usually NOT consciously perceived (blood pressure, organ distension). PROPRIOCEPTORS: in muscles, tendons, and joints → provide information about body POSITION and JOINT MOVEMENT — crucial for balance, coordination, and physiotherapy rehabilitation."
  },

  {
    id: 101,
    category: "Sensory Physiology",
    question: "Match the following enclosed nerve endings (mechanoreceptors) to their location and function:",
    answers: [
      { text: "Meissner corpuscle = dermis, pressure; Pacinian corpuscle = epidermis, touch", correct: false },
      { text: "Pacinian corpuscle = dermis, pressure; Meissner corpuscle = epidermis, touch; Muscle spindle = skeletal muscle, muscle length; Golgi tendon organ = tendon, muscle tension", correct: true },
      { text: "Muscle spindle = tendon, tension; Golgi tendon organ = skeletal muscle, length", correct: false },
      { text: "All enclosed nerve endings are found exclusively in the skin", correct: false }
    ],
    explanation: "ENCLOSED nerve endings (mechanoreceptors, have connective tissue capsule): PACINIAN corpuscle: dermis → PRESSURE. MEISSNER corpuscle: epidermis → TOUCH. Krausse end bulbs: mucous membranes → touch. Ruffini endings: dermis → touch. MUSCLE SPINDLE: skeletal muscle → provides information about MUSCLE LENGTH (stretch reflex). GOLGI TENDON ORGAN: tendon → provides information about TENSION the muscle exerts on tendons. Both muscle spindles and Golgi tendon organs are key proprioceptors for physiotherapy assessment and rehabilitation."
  },

  {
    id: 102,
    category: "Sensory Physiology",
    question: "What is the difference between the utricle/saccule and the semicircular canals in balance?",
    answers: [
      { text: "Utricle/saccule detect rotational acceleration; semicircular canals detect linear acceleration", correct: false },
      { text: "Utricle/saccule detect LINEAR acceleration (horizontal/vertical speed changes); semicircular canals detect ROTATIONAL/ANGULAR acceleration (head turning, spinning)", correct: true },
      { text: "Utricle/saccule are part of the cochlea for hearing; semicircular canals are exclusively for balance", correct: false },
      { text: "Both structures detect the same type of movement but in different planes", correct: false }
    ],
    explanation: "Both structures are part of the VESTIBULAR APPARATUS (inner ear). They work by head movement → fluid movement → bending of hair cell cilia → action potentials. UTRICLE and SACCULE: detect LINEAR ACCELERATION — changes in speed when moving horizontally or vertically (e.g., driving, jumping rope, elevator). SEMICIRCULAR CANALS (3 canals in 3 planes): detect ROTATIONAL/ANGULAR ACCELERATION — turning the head, spinning around, acrobatics. Both contribute to the sense of balance. Innervated by CN VIII (vestibulocochlear nerve)."
  },

  {
    id: 103,
    category: "Sensory Physiology",
    question: "Osmoreceptors are specialized receptors. Where are they located and what do they detect?",
    answers: [
      { text: "Located in the kidneys; detect changes in blood glucose concentration", correct: false },
      { text: "Located in the hypothalamus; detect osmolarity changes in body fluids and stimulate the thirst centre", correct: true },
      { text: "Located in the carotid body; detect changes in blood oxygen levels", correct: false },
      { text: "Located in the skin; detect changes in external humidity", correct: false }
    ],
    explanation: "OSMORECEPTORS are specialized receptors located in the HYPOTHALAMUS. They detect osmolarity (concentration of solutes) in EXTRACELLULAR BODY FLUIDS. When osmolarity rises (dehydration, excess solutes): osmoreceptors are activated → stimulate the HYPOTHALAMIC THIRST CENTRE → sensation of thirst → drinking behavior → ADH (antidiuretic hormone) release → kidneys retain water → osmolarity is restored. This is a key homeostatic mechanism linking sensory physiology to fluid regulation."
  },

  // ══════════════════════════════════════════════════════════
  //  SENSORY PHYSIOLOGY — PAIN
  // ══════════════════════════════════════════════════════════

  {
    id: 104,
    category: "Sensory Physiology",
    question: "What is the KEY distinction between acute and chronic pain?",
    answers: [
      { text: "Acute pain lasts more than 6 months; chronic pain less than 6 months", correct: false },
      { text: "Acute pain: <6 months, perceived 0.1 s after stimulus, disappears when cause heals (stabbing/electric quality); chronic pain: >6 months, appears ≥1 s after injury, not well localized, persists even after healing", correct: true },
      { text: "Acute and chronic pain are identical except chronic pain only affects internal organs", correct: false },
      { text: "Acute pain is always visceral; chronic pain is always somatic", correct: false }
    ],
    explanation: "ACUTE PAIN: lasts <6 months, perceived 0.1 s after stimulus (fast), associated with tissue injury, well localized, disappears with healing, described as intense/stabbing/electric (e.g., finger prick, burn). CHRONIC PAIN: lasts >6 months, appears 1+ second after injury, poorly localized, intensity increases slowly, persists up to 1 month even after the acute injury heals, involves deep tissue destruction, described as pulsatile/nauseous. Understanding this distinction is fundamental for physiotherapy pain management."
  },

  {
    id: 105,
    category: "Sensory Physiology",
    question: "What is neuropathic pain, and how does it differ from nociceptive pain?",
    answers: [
      { text: "Neuropathic pain is always acute; nociceptive pain is always chronic", correct: false },
      { text: "Neuropathic pain results from disease/injury to the nervous system itself (pathological, usually chronic); nociceptive pain is normal pain from undamaged nerves transmitting signals from tissue injury (protective, transient)", correct: true },
      { text: "They are the same type of pain arising from the same mechanism", correct: false },
      { text: "Nociceptive pain only affects visceral organs; neuropathic pain only affects the skin", correct: false }
    ],
    explanation: "NOCICEPTIVE PAIN: NORMAL pain — undamaged nerves transmit pain signals from injured somatic or visceral tissues. PROTECTIVE function, transient. Subtypes: SOMATIC (skin, muscle, joints, ligaments, bones — well localized) and VISCERAL (internal organs — vague, diffuse, poorly localized, may cause REFERRED PAIN). NEUROPATHIC PAIN: PATHOLOGICAL pain from disease/injury to the nervous system itself. Usually CHRONIC. Examples: trigeminal neuralgia, multiple sclerosis pain, spinal cord injury pain. Types: CENTRAL (CNS dysfunction) or PERIPHERAL (PNS dysfunction)."
  },

  {
    id: 106,
    category: "Sensory Physiology",
    question: "What is referred pain?",
    answers: [
      { text: "Pain that intensifies when referred to a specialist", correct: false },
      { text: "Pain perceived in a part of the body AWAY from the site where it actually originates — typical of visceral pain", correct: true },
      { text: "Pain that is the same on both sides of the body simultaneously", correct: false },
      { text: "Pain that only occurs when the patient describes it to another person", correct: false }
    ],
    explanation: "REFERRED PAIN: pain perceived in a location DISTANT from its actual origin. This occurs because visceral afferent neurons enter the spinal cord at the same level as somatic neurons from another body region — the brain 'misinterprets' the origin. Classic clinical examples: cardiac ischemia (heart attack) → pain felt in left arm, jaw, shoulder; kidney stones → pain in groin; liver/gallbladder disease → right shoulder pain; appendicitis → starts around umbilicus, then right lower quadrant. Vital concept for physiotherapy differential diagnosis."
  },

  {
    id: 107,
    category: "Sensory Physiology",
    question: "The body's analgesic system releases endogenous substances that reduce pain. What are they and what triggers their release?",
    answers: [
      { text: "Prostaglandins and histamine, triggered by tissue damage", correct: false },
      { text: "Enkephalins, endorphins, and serotonin — released by physical exercise, positive emotions, and good mood", correct: true },
      { text: "GABA and glycine, triggered by sleep and rest", correct: false },
      { text: "Dopamine and noradrenaline, triggered only by severe injury", correct: false }
    ],
    explanation: "The body's intrinsic ANALGESIC SYSTEM produces ENDOGENOUS OPIOIDS: ENKEPHALINS and ENDORPHINS (bind opioid receptors → reduce pain transmission), and SEROTONIN (also part of descending pain modulation). Released by: PHYSICAL EXERCISE (explains 'runner's high' and exercise-induced analgesia), POSITIVE EMOTIONS, and GOOD MOOD. This is the physiological basis for using exercise, physiotherapy, and psychological wellbeing as pain management strategies — directly relevant to physiotherapy practice."
  },

  // ══════════════════════════════════════════════════════════
  //  SENSORY DISORDERS & DRUGS
  // ══════════════════════════════════════════════════════════

  {
    id: 108,
    category: "Sensory Drugs",
    question: "Define the following sensory disorder terms: hypoalgesia, allodynia, and hyperalgesia:",
    answers: [
      { text: "Hypoalgesia = total loss of sensation; allodynia = exaggerated pain; hyperalgesia = decreased pain sensitivity", correct: false },
      { text: "Hypoalgesia = decreased sensitivity to pain; allodynia = pain produced by a stimulus that normally does NOT cause pain; hyperalgesia = exaggerated sensitivity to pain", correct: true },
      { text: "All three describe the same condition — complete loss of pain sensation", correct: false },
      { text: "Hypoalgesia = increased pain; allodynia = decreased pain; hyperalgesia = normal pain response", correct: false }
    ],
    explanation: "Key sensory disorder terminology: HYPESTHESIA: decreased sensitivity (general). ANESTHESIA: total loss of ALL sensation. HYPOALGESIA: decreased sensitivity specifically to PAIN. ANALGESIA: complete loss of pain sensation. HYPERESTHESIA: exaggerated TACTILE sensitivity. HYPERALGESIA: exaggerated sensitivity to PAIN (even normal stimuli cause excessive pain). ALLODYNIA: pain produced by a stimulus that NORMALLY does NOT cause pain (e.g., light touch causing pain in a sunburn or nerve injury). These terms are essential for physiotherapy clinical assessment documentation."
  },

  {
    id: 109,
    category: "Sensory Drugs",
    question: "What is the mechanism of NSAIDs (non-steroidal anti-inflammatory drugs), and what are their main adverse effects?",
    answers: [
      { text: "They block opioid receptors and cause respiratory depression", correct: false },
      { text: "They inhibit COX enzymes → reduce prostaglandin synthesis → analgesic, antipyretic, anti-inflammatory, antiplatelet effects; main ADR: gastrointestinal damage (COX-1 inhibition), bleeding, renal failure", correct: true },
      { text: "They enhance GABA activity and cause CNS depression", correct: false },
      { text: "They block Na⁺ channels in sensory neurons → local anesthesia", correct: false }
    ],
    explanation: "NSAIDs inhibit COX (cyclooxygenase) enzymes → ↓ prostaglandin synthesis. COX-1 inhibition → GI mucosal protection ↓, platelet aggregation ↓ → GI ADRs (the main problem: heartburn, ulcers, bleeding). COX-2 inhibition → ANTI-INFLAMMATORY effect (desired). Main ADRs: GI damage (heartburn, gastritis, ulcers, bleeding), BLEEDING, renal failure. Omeprazole (PPI) only needed in HIGH-RISK patients. Never combine 2+ NSAIDs (increases toxicity without extra benefit). For physio: NSAIDs interact with oral anticoagulants → increased bleeding/bruising risk during sessions."
  },

  {
    id: 110,
    category: "Sensory Drugs",
    question: "Paracetamol (acetaminophen) vs. ibuprofen: what is the key difference in their pharmacological profiles?",
    answers: [
      { text: "Paracetamol is anti-inflammatory and gastrotoxic; ibuprofen is not anti-inflammatory and causes no GI damage", correct: false },
      { text: "Paracetamol = analgesic + antipyretic (NOT anti-inflammatory, acts in CNS, no GI damage, hepatotoxic in overdose); ibuprofen = analgesic + antipyretic + ANTI-INFLAMMATORY, GI damage risk", correct: true },
      { text: "Both have identical mechanisms and adverse effects", correct: false },
      { text: "Paracetamol is an opioid; ibuprofen is a local anesthetic", correct: false }
    ],
    explanation: "PARACETAMOL/ACETAMINOPHEN: analgesic + antipyretic (most used). NOT anti-inflammatory. Inhibits prostaglandin synthesis in the CNS (good for headaches). NO GI damage (safe on stomach). ADR: HEPATOTOXICITY → overdose → liver necrosis (can be fatal). ANTIDOTE: N-acetylcysteine. Max dose: 4g/day. CONTRAINDICATED in children/teenagers as anti-inflammatory. IBUPROFEN: analgesic + antipyretic + ANTI-INFLAMMATORY (full NSAID). Better GI profile than aspirin. For physio: prefer paracetamol over NSAIDs when possible — similar analgesia with fewer ADRs. NEVER use aspirin in children (Reye's syndrome risk)."
  },

  {
    id: 111,
    category: "Sensory Drugs",
    question: "What is the WHO analgesic pain ladder and what are the three steps?",
    answers: [
      { text: "Step 1: opioids; Step 2: NSAIDs; Step 3: local anesthetics", correct: false },
      { text: "Step 1: non-opioid analgesics (NSAIDs/paracetamol); Step 2: mild opioids (codeine, tramadol); Step 3: strong opioids (morphine, fentanyl)", correct: true },
      { text: "Step 1: physiotherapy; Step 2: surgery; Step 3: palliative care", correct: false },
      { text: "Step 1: antidepressants; Step 2: anticonvulsants; Step 3: opioids", correct: false }
    ],
    explanation: "The WHO PAIN MANAGEMENT LADDER guides analgesic prescribing by pain severity: STEP 1 (mild pain): NON-OPIOIDS — NSAIDs (ibuprofen, aspirin) + paracetamol ± adjuvants. STEP 2 (moderate pain): MILD OPIOIDS — codeine, dihydrocodeine, tramadol ± non-opioids. STEP 3 (severe/cancer pain): STRONG OPIOIDS — morphine, buprenorphine, fentanyl, methadone ± non-opioids. Key principles: individualize treatment, prefer oral administration, administer regularly (not just on demand), prevent side effects. Analgesics allow more active physiotherapy rehabilitation when at maximum efficiency."
  },

  {
    id: 112,
    category: "Sensory Drugs",
    question: "What are the main adverse effects of opioids, and what is the antidote for opioid overdose?",
    answers: [
      { text: "Main ADR: hepatotoxicity; antidote: N-acetylcysteine", correct: false },
      { text: "Main ADR: nausea/vomiting, constipation, RESPIRATORY DEPRESSION, sedation/confusion; antidote: IV Naloxone", correct: true },
      { text: "Main ADR: GI bleeding and renal failure; antidote: omeprazole", correct: false },
      { text: "Main ADR: cardiac arrhythmias and hypertension; antidote: atropine", correct: false }
    ],
    explanation: "OPIOID ADRs: nausea/vomiting, CONSTIPATION, RESPIRATORY DEPRESSION (most dangerous — potentially fatal), dry mouth, sedation/confusion. OVERDOSE signs: respiratory depression, excessive sedation, MIOSIS (pupil constriction), hypotension → WARN THE DOCTOR. ANTIDOTE: IV NALOXONE (opioid receptor antagonist). Also important: ADDICTION (uncontrolled need for more), TOLERANCE (need increased dose for same effect), DEPENDENCE (withdrawal symptoms on abrupt cessation: sweating, tremors, diarrhea, insomnia, anxiety). For physio: opioids cause respiratory depression → decreased respiratory response to exercise during rehabilitation."
  },

];

// Catégories disponibles (générées automatiquement depuis les questions)
const CATEGORIES = [...new Set(QUESTIONS.map(q => q.category))];