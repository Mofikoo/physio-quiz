// ============================================================
//  PHYSIOLOGY QUIZ — QUESTIONS DATABASE
// ============================================================

const QUESTIONS = [

  {
    id: 1,
    category: "Introduction",
    question: "What is the literal definition of physiology?",
    answers: [
      { text: "The study of chemical composition and molecular structure of living organisms and their metabolic reactions", correct: false },
      { text: "The study of how the human body functions, from molecular mechanisms to whole-organism tasks", correct: true },
      { text: "The study of the anatomical structure and spatial organization of organs, tissues, and body systems", correct: false },
      { text: "The study of diseases, their causes, and the underlying mechanisms of tissue injury and organ failure", correct: false },
    ],
    explanation: "Physiology (from Greek: Physis = Nature, Logos = Knowledge) is the study of biological FUNCTION — how the body works, from molecular mechanisms within cells to the actions of tissues, organs, and systems. Anatomy studies structure; pathology studies disease; biochemistry studies chemical composition."
  },

  {
    id: 2,
    category: "Introduction",
    question: "Homeostasis refers to:",
    answers: [
      { text: "The complete elimination of all physiological variation in the internal environment", correct: false },
      { text: "Maintaining constancy of the internal environment despite changing external conditions", correct: true },
      { text: "The permanent adaptation of the organism to a new set of environmental conditions", correct: false },
      { text: "The elimination of metabolic waste products to prevent buildup in body fluids", correct: false },
    ],
    explanation: "Homeostasis (Greek: Homoios = 'the same', Stasis = 'stagnation') means maintaining a relatively stable internal environment despite variations in the external environment. It does NOT mean zero change — minimal fluctuations are normal and compensated by coordinated homeostatic processes. Every organ and tissue participates."
  },

  {
    id: 3,
    category: "Introduction",
    question: "Which physiological values are maintained under homeostatic control? (Select all that apply — choose the MOST complete answer)",
    answers: [
      { text: "Temperature (37°C), pH (7.4), and blood glucose concentration only", correct: false },
      { text: "Temperature, pH, ion concentrations (Na⁺, K⁺...), glucose, O₂/CO₂, volume and pressure", correct: true },
      { text: "Only blood gases (O₂ and CO₂) — all other variables self-regulate independently", correct: false },
      { text: "Temperature, blood glucose concentration, and arterial blood pressure only", correct: false },
    ],
    explanation: "Homeostasis maintains ALL of the following relatively constant: O₂ and CO₂ concentrations, nutrients (glucose, amino acids, fatty acids), organic wastes (urea, urate), ions (Na⁺, K⁺, HCO₃⁻...), temperature (37°C), pH (7.4), and body fluid volume and pressure. It is a comprehensive system, not limited to a few parameters."
  },

  {
    id: 4,
    category: "Introduction",
    question: "What are the THREE components of a homeostatic control system?",
    answers: [
      { text: "Receptor, afferent nerve, and efferent nerve — no integration center is needed", correct: false },
      { text: "Sensor (receptor), integrating center, effector — in that sequential order", correct: true },
      { text: "Hormone, receptor, and downstream target response — applies to endocrine only", correct: false },
      { text: "Input signal, central processing unit, and output motor command to muscles", correct: false },
    ],
    explanation: "The three components are: (1) SENSOR/RECEPTOR — detects changes and sends information to the integrating center; (2) INTEGRATING CENTER (brain/spinal cord) — analyzes information and compares it to the set point; (3) EFFECTOR (muscles, endocrine glands) — acts to counter deviations from the set point and restore homeostasis."
  },

  {
    id: 5,
    category: "Introduction",
    question: "What is the key difference between the nervous system and the endocrine system as integrating centers?",
    answers: [
      { text: "The nervous system uses hormones secreted into the blood; the endocrine system sends rapid nerve impulses to effectors", correct: false },
      { text: "The nervous system acts via rapid nerve impulses; the endocrine system acts via slow hormones through the blood", correct: true },
      { text: "The nervous system controls only voluntary skeletal actions; the endocrine system handles all involuntary regulation autonomously", correct: false },
      { text: "They are functionally identical — both detect changes and respond at the same speed through the same signaling molecules", correct: false },
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
      { text: "Has no effect at all on the original stimulus", correct: false },
      { text: "Triggers more change in the same direction as the original stimulus", correct: false },
    ],
    explanation: "In NEGATIVE feedback, the response opposes (reverses) the original stimulus. It is the most common type: regulation of blood glucose, arterial pressure, blood gas concentrations, and endocrine regulation all use negative feedback. This is what keeps the internal environment stable."
  },

  {
    id: 7,
    category: "Introduction",
    question: "Positive feedback is characterized by:",
    answers: [
      { text: "A response that opposes the original stimulus and works to restore a set point", correct: false },
      { text: "A response that enhances the original stimulus, potentially creating 'vicious circles'", correct: true },
      { text: "The most common type of feedback in physiological control systems of the body", correct: false },
      { text: "A mechanism responsible for regulating blood glucose and arterial pressure", correct: false },
    ],
    explanation: "POSITIVE feedback enhances the original stimulus. It is LESS frequent than negative feedback and can lead to 'vicious circles'. Examples: blood clotting (more clotting factors → more clotting) and induction of labor (oxytocin → contractions → more pressure → more oxytocin). These processes are designed to rapidly complete a specific event."
  },

  {
    id: 8,
    category: "Introduction",
    question: "Which of the following is an example of POSITIVE feedback?",
    answers: [
      { text: "Blood glucose regulated by insulin and glucagon", correct: false },
      { text: "Body temperature kept constant at 37°C via sweating", correct: false },
      { text: "Oxytocin-driven uterine contractions during labor", correct: true },
      { text: "Arterial blood pressure regulated by baroreceptors", correct: false },
    ],
    explanation: "Labor induction is a classic example of positive feedback: pressure on the cervix triggers oxytocin release → uterine contractions → more pressure → more oxytocin release, until delivery. Blood glucose regulation (insulin), temperature control (37°C), and arterial pressure are all examples of NEGATIVE feedback — they oppose the stimulus."
  },

  {
    id: 9,
    category: "Introduction",
    question: "Alteration of homeostasis leads to:",
    answers: [
      { text: "Disease", correct: true },
      { text: "Stress", correct: false },
      { text: "Fatigue", correct: false },
      { text: "Atrophy", correct: false },
    ],
    explanation: "According to the course, alteration of homeostasis = DISEASE. Various situations can cause an imbalance: external factors (heat, cold, mechanical trauma, lack of oxygen, virus, bacteria), internal factors (exercise, high blood pressure, pain, tumors, anxiety), or extreme situations (bleeding, intoxication, severe infection, surgery)."
  },

  {
    id: 10,
    category: "Cell Physiology",
    question: "What percentage of the adult body is composed of fluid, and how is it distributed?",
    answers: [
      { text: "50% total: 30% intracellular, 20% extracellular", correct: false },
      { text: "60% total: 40% intracellular, 20% extracellular", correct: true },
      { text: "70% total: 50% intracellular, 20% extracellular", correct: false },
      { text: "60% total: 20% intracellular, 40% extracellular", correct: false },
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
      { text: "Cl⁻ (103 mEq/L)", correct: false },
    ],
    explanation: "In extracellular fluid (plasma), Na⁺ is the dominant cation at 142 mEq/L. Compare this to intracellular fluid where K⁺ dominates (140 mEq/L). This inverse relationship (Na⁺ outside, K⁺ inside) is actively maintained by the Na⁺/K⁺ pump and is essential for membrane potential and cell function."
  },

  {
    id: 12,
    category: "Cell Physiology",
    question: "What is the main difference between plasma and interstitial fluid?",
    answers: [
      { text: "Plasma has a higher K⁺ concentration than interstitial fluid, while Na⁺ remains equal in both", correct: false },
      { text: "Plasma contains large amounts of proteins (e.g., albumin); interstitial fluid has very low protein concentration", correct: true },
      { text: "Interstitial fluid has a higher glucose concentration and lower Na⁺ than plasma at all times", correct: false },
      { text: "Their ionic compositions are essentially identical — the protein content does not significantly differ", correct: false },
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
      { text: "Cl⁻ (4 mEq/L intracellular)", correct: false },
    ],
    explanation: "K⁺ is the dominant intracellular cation at 140 mEq/L, compared to only 4 mEq/L extracellularly. This is the OPPOSITE of Na⁺, which is dominant extracellularly (142 mEq/L) but only 10 mEq/L intracellularly. These gradients are maintained by the Na⁺/K⁺ pump and are fundamental for generating membrane potential."
  },

  {
    id: 14,
    category: "Cell Physiology",
    question: "What is the approximate composition of the plasma membrane?",
    answers: [
      { text: "90% lipids, 5% proteins, 5% carbohydrates", correct: false },
      { text: "40% lipids, 50% proteins, 10% carbohydrates", correct: true },
      { text: "50% lipids, 40% proteins, 10% carbohydrates", correct: false },
      { text: "70% phospholipids, 20% cholesterol, 10% proteins", correct: false },
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
      { text: "It forms glycolipids for cell adhesion", correct: false },
    ],
    explanation: "Cholesterol (20% of membrane lipids) provides mechanical resistance to the membrane while also increasing its fluidity. It sits between phospholipid tails and prevents them from packing too tightly (maintaining fluidity at low temperatures) or becoming too fluid (providing stability at high temperatures)."
  },

  {
    id: 16,
    category: "Cell Physiology",
    question: "Phospholipids are described as 'amphipathic'. This means they have:",
    answers: [
      { text: "Two phosphate groups positioned on opposite ends of the same lipid molecule", correct: false },
      { text: "A hydrophilic polar head (phosphate group) AND a hydrophobic nonpolar tail (fatty acid chains)", correct: true },
      { text: "Two fatty acid chains that are both water-soluble and face toward the aqueous environment", correct: false },
      { text: "The structural capacity to form ion transport channels across the lipid bilayer membrane", correct: false },
    ],
    explanation: "Amphipathic means having both hydrophilic and hydrophobic regions. Phospholipids have: a hydrophilic polar head (phosphate group, faces water) and a hydrophobic nonpolar tail (fatty acid chains, faces away from water). This property drives the formation of the bilayer: polar heads face the aqueous environment (outside and cytoplasm), and tails face each other inside the membrane."
  },

  {
    id: 17,
    category: "Cell Physiology",
    question: "The 'fluid-mosaic model' of the plasma membrane refers to:",
    answers: [
      { text: "A rigid, fixed structure where all proteins are permanently embedded at defined locations", correct: false },
      { text: "A dynamic membrane where phospholipids and proteins move laterally, creating a changing mosaic pattern", correct: true },
      { text: "A model where the lipid bilayer can dissolve and fully reform in a different configuration", correct: false },
      { text: "A description of water movement only, specifically through aquaporin channel proteins", correct: false },
    ],
    explanation: "The fluid-mosaic model describes the plasma membrane as non-solid: phospholipids AND proteins are free to move LATERALLY, creating a constantly changing mosaic pattern. This fluidity is essential for membrane function, receptor movement, and membrane fusion during endo/exocytosis."
  },

  {
    id: 18,
    category: "Cell Physiology",
    question: "What is the difference between peripheral and integral membrane proteins?",
    answers: [
      { text: "Peripheral proteins span the full membrane from the cytoplasmic face to the extracellular face", correct: false },
      { text: "Peripheral proteins are partially embedded in one face; integral proteins span the entire membrane", correct: true },
      { text: "Both types are structurally and functionally identical — their classification is based on size, not location", correct: false },
      { text: "Peripheral proteins are actually carbohydrate chains; integral proteins are composed entirely of lipids", correct: false },
    ],
    explanation: "PERIPHERAL proteins are partially embedded in only one face (surface) of the membrane. INTEGRAL proteins span the membrane from one side to the other (transmembrane proteins). Integral proteins serve as channels, transporters, and receptors. Both can function as identification markers (immune system) and in signal transduction."
  },

  {
    id: 19,
    category: "Cell Physiology",
    question: "What is the fundamental difference between passive and active transport?",
    answers: [
      { text: "Passive transport always requires a carrier protein; active transport requires no protein at all", correct: false },
      { text: "Passive = down the concentration gradient, no energy needed; active = against gradient, requires energy (ATP)", correct: true },
      { text: "Passive transport is exclusively for water molecules; active transport is only for ionic species", correct: false },
      { text: "Both require ATP hydrolysis — they differ only in the direction and conduction speed", correct: false },
    ],
    explanation: "PASSIVE TRANSPORT: molecules move from higher to lower concentration (down gradient) — NO energy required. ACTIVE TRANSPORT: molecules move from lower to higher concentration (against gradient) — requires energy (ATP). Simple diffusion, facilitated diffusion, and osmosis are passive. Primary and secondary active transport require energy."
  },

  {
    id: 20,
    category: "Cell Physiology",
    question: "Which substances can cross the plasma membrane by SIMPLE DIFFUSION directly through the lipid bilayer?",
    answers: [
      { text: "Glucose, amino acids, and Na⁺ — all small polar molecules cross freely", correct: false },
      { text: "O₂, CO₂, alcohol, H₂O, and fatty substances (lipid-soluble molecules) only", correct: true },
      { text: "All ions including K⁺, Na⁺, Ca²⁺ because of their small size and charge", correct: false },
      { text: "Large proteins and polysaccharides diffuse slowly but continuously through the bilayer", correct: false },
    ],
    explanation: "Simple diffusion THROUGH THE MEMBRANE (not through channels) is limited to small, nonpolar (lipid-soluble) molecules: O₂, CO₂, alcohol, H₂O, fatty substances. The rule: lower size + higher hydrophobicity = higher diffusion through the membrane. Water-soluble and charged molecules cannot pass directly — they need channels or carriers."
  },

  {
    id: 21,
    category: "Cell Physiology",
    question: "Facilitated diffusion differs from simple diffusion in that it:",
    answers: [
      { text: "It requires ATP hydrolysis and moves molecules against their concentration gradient uphill", correct: false },
      { text: "It uses a carrier protein (carrier-mediated transport) showing specificity, competition, and saturation", correct: true },
      { text: "It applies only to the movement of water molecules via aquaporin channel proteins", correct: false },
      { text: "It does not depend on concentration gradients — driven purely by membrane electrical potential", correct: false },
    ],
    explanation: "Facilitated diffusion is PASSIVE (no energy, moves down gradient) but CARRIER-MEDIATED — the substance binds to a carrier protein, causing a conformational change that transports it across. Key properties: SPECIFICITY (each carrier is specific to a substrate), COMPETITION (similar molecules compete for the same carrier), and SATURATION (maximum transport rate when all carriers are occupied). Examples: glucose (GLUT transporters), amino acids."
  },

  {
    id: 22,
    category: "Cell Physiology",
    question: "What is osmosis?",
    answers: [
      { text: "The active, ATP-dependent movement of solutes from areas of low to high concentration against their gradient", correct: false },
      { text: "The net diffusion of water across a selectively permeable membrane, from lower to higher solute concentration", correct: true },
      { text: "The energy-dependent pumping of water molecules against their own concentration gradient using membrane ATPases", correct: false },
      { text: "The simultaneous and equal movement of all dissolved molecules in both directions across any permeable membrane", correct: false },
    ],
    explanation: "Osmosis is the NET diffusion of WATER (the solvent) across a SELECTIVELY PERMEABLE MEMBRANE. Water moves from where there is MORE water (lower solute concentration) to where there is LESS water (higher solute concentration). Requirements: the membrane must be relatively impermeable to the solute but permeable to water. The plasma membrane acts as a semipermeable membrane."
  },

  {
    id: 23,
    category: "Cell Physiology",
    question: "Which of the following solutions is ISOTONIC to blood cells?",
    answers: [
      { text: "NaCl 0.9% or Glucose 5%", correct: true },
      { text: "Pure water (0 mOsm/L)", correct: false },
      { text: "NaCl 10% saline solution", correct: false },
      { text: "Any solution with solutes", correct: false },
    ],
    explanation: "ISOTONIC solutions have equivalent solute concentration to the inside of the cell — no net water movement occurs. NaCl 0.9% (normal saline) and Glucose 5% are the classic isotonic solutions used clinically. HYPERTONIC solutions have MORE solutes than the cell (water exits → cell shrinks). HYPOTONIC solutions have LESS solutes (water enters → cell swells → may lyse)."
  },

  {
    id: 24,
    category: "Cell Physiology",
    question: "What is oncotic (colloidosmotic) pressure?",
    answers: [
      { text: "Osmotic pressure created by extracellular ions (Na⁺, K⁺) in the interstitial space", correct: false },
      { text: "Osmotic pressure generated by plasma proteins (e.g., albumin), opposing capillary filtration", correct: true },
      { text: "The hydrostatic pressure generated by cardiac contractions driving blood through vessels", correct: false },
      { text: "Intracellular cytoplasmic pressure that pushes outward against the plasma membrane", correct: false },
    ],
    explanation: "Oncotic (colloidosmotic) pressure is generated by plasma proteins (mainly albumin) that remain in the blood and cannot easily cross capillary walls. This osmotic pressure OPPOSES capillary filtration — it 'pulls' water back into the blood, preventing significant fluid loss into the interstitial space. When plasma protein levels fall (e.g., malnutrition, liver failure), oncotic pressure drops → edema."
  },

  {
    id: 25,
    category: "Cell Physiology",
    question: "Ion channels open and close in response to which stimuli?",
    answers: [
      { text: "Only by chemical ligands binding to a specific region of the channel protein", correct: false },
      { text: "Ligands (ligand-gated) OR voltage changes (voltage-gated) — two distinct mechanisms", correct: true },
      { text: "Only by changes in transmembrane electrical voltage — ligand gating does not exist", correct: false },
      { text: "Exclusively by local temperature changes affecting the conformational state of the protein", correct: false },
    ],
    explanation: "Ion channels open/close by two main mechanisms: (1) LIGAND-GATED: binding of a specific ligand (neurotransmitter, hormone) to a region of the channel causes a structural change that opens it; (2) VOLTAGE-GATED: changes in membrane electrical potential trigger opening/closing. Both mechanisms are fundamental for generating and transmitting nerve impulses and muscle contractions."
  },

  {
    id: 26,
    category: "Cell Physiology",
    question: "The Na⁺/K⁺ pump transports:",
    answers: [
      { text: "2 Na⁺ out and 3 K⁺ in per cycle", correct: false },
      { text: "3 Na⁺ out and 2 K⁺ in per cycle, hydrolyzing ATP", correct: true },
      { text: "Equal amounts of Na⁺ and K⁺ in opposite directions", correct: false },
      { text: "Na⁺ and K⁺ both into the cell using ATP", correct: false },
    ],
    explanation: "The Na⁺/K⁺ pump (ATPase) transports 3 Na⁺ OUT of the cell and 2 K⁺ INTO the cell per cycle, hydrolyzing 1 ATP. Because it moves more positive charges out than in, it contributes to the negative intracellular charge. It is present in ALL body cells and is fundamental for maintaining ion gradients, membrane potential, and enabling secondary active transport."
  },

  {
    id: 27,
    category: "Cell Physiology",
    question: "What are the THREE main functions of the Na⁺/K⁺ pump?",
    answers: [
      { text: "Facilitating cellular glucose uptake via GLUT transporters, initiating protein synthesis, and triggering mitotic cell division", correct: false },
      { text: "Powering coupled transport, generating Na⁺/K⁺ gradients for nerve/muscle impulses, maintaining osmotic balance", correct: true },
      { text: "Regulating core body temperature through thermogenesis, maintaining blood pH via bicarbonate buffering, and controlling arterial pressure", correct: false },
      { text: "Transporting large proteins by exocytosis, pumping Ca²⁺ out of mitochondria, and initiating intracellular signaling cascades", correct: false },
    ],
    explanation: "The Na⁺/K⁺ pump has 3 key functions: (1) The Na⁺ gradient it creates provides energy for COUPLED/SECONDARY TRANSPORT of other molecules (e.g., glucose-Na⁺ cotransport in the intestine); (2) Na⁺ and K⁺ gradients are used to produce ELECTROCHEMICAL IMPULSES for nerve and muscle function; (3) The active export of Na⁺ is important for maintaining CELLULAR OSMOTIC BALANCE (prevents cell swelling)."
  },

  {
    id: 28,
    category: "Cell Physiology",
    question: "The Ca²⁺ pump removes calcium from the cytoplasm by pumping it into:",
    answers: [
      { text: "Into the nucleus, where Ca²⁺ regulates gene expression and protein synthesis directly", correct: false },
      { text: "Into the extracellular fluid OR into the cisternae of the endoplasmic reticulum", correct: true },
      { text: "Into the mitochondria only, where Ca²⁺ modulates oxidative phosphorylation activity", correct: false },
      { text: "Into the lysosome, where Ca²⁺ is sequestered and gradually degraded by enzymes", correct: false },
    ],
    explanation: "The Ca²⁺ pump is located on: (1) the plasma membrane of ALL cells → pumps Ca²⁺ into the extracellular fluid; (2) the membrane of the ER of STRIATED MUSCLE CELLS → pumps Ca²⁺ into the ER cisternae. This creates a very low intracellular [Ca²⁺] (0.0001 mEq/L). When Ca²⁺ channels open, Ca²⁺ rushes in down its concentration gradient → sudden rise in cytoplasmic Ca²⁺ triggers muscle contraction and neurotransmitter release."
  },

  {
    id: 29,
    category: "Cell Physiology",
    question: "In secondary active transport, where does the energy come from?",
    answers: [
      { text: "Directly from ATP hydrolysis at the carrier protein, just like primary active transport", correct: false },
      { text: "From the 'downhill' movement of Na⁺ into the cell — a gradient maintained by the Na⁺/K⁺ pump", correct: true },
      { text: "From glucose breakdown in glycolysis occurring at the inner leaflet of the membrane", correct: false },
      { text: "From the outward movement of K⁺ down its concentration gradient out of the cell", correct: false },
    ],
    explanation: "Secondary (coupled) active transport uses the ENERGY STORED in the Na⁺ concentration gradient as its indirect energy source. The Na⁺/K⁺ pump creates a high extracellular [Na⁺], and when Na⁺ flows back into the cell (down its gradient), that energy can power the movement of another molecule AGAINST its gradient. ATP is used indirectly (to maintain the Na⁺ gradient), not directly."
  },

  {
    id: 30,
    category: "Cell Physiology",
    question: "What is the difference between symport (cotransport) and antiport (countertransport)?",
    answers: [
      { text: "Symport uses ATP; antiport relies exclusively on the established Na⁺ electrochemical gradient", correct: false },
      { text: "In symport, both molecules move in the SAME direction; in antiport, they move in OPPOSITE directions", correct: true },
      { text: "Symport is reserved exclusively for small ions; antiport handles only large polar organic molecules", correct: false },
      { text: "Symport operates only in intestinal epithelial cells; antiport occurs only in neuronal plasma membranes", correct: false },
    ],
    explanation: "Both are types of secondary active transport, but differ in direction: SYMPORT/COTRANSPORT: both molecules move in the SAME direction (e.g., Na⁺-Glucose cotransport in the small intestine and kidney — both move inward). ANTIPORT/COUNTERTRANSPORT: molecules move in OPPOSITE directions (e.g., Na⁺-Ca²⁺ exchanger — Na⁺ enters while Ca²⁺ exits)."
  },

  {
    id: 31,
    category: "Cell Physiology",
    question: "The Na⁺-Glucose cotransport (symport) is a key mechanism in:",
    answers: [
      { text: "Glucose entry into neurons of the brain via facilitated diffusion through GLUT3", correct: false },
      { text: "Glucose absorption in the small intestine and reabsorption in kidney tubule epithelium", correct: true },
      { text: "Glucose transport from blood into brain tissue across the blood-brain barrier", correct: false },
      { text: "Glucose uptake into all body cells for use in oxidative phosphorylation and ATP synthesis", correct: false },
    ],
    explanation: "Na⁺-Glucose cotransport operates in the epithelial cells of the SMALL INTESTINE (absorption of dietary glucose) and KIDNEY TUBULES (reabsorption of filtered glucose). Na⁺ flowing down its gradient into the epithelial cell drives glucose against its concentration gradient into the cell. This is why glucose absorption from the gut is active — even when intracellular glucose is higher than luminal glucose."
  },

  {
    id: 32,
    category: "Cell Physiology",
    question: "What is endocytosis?",
    answers: [
      { text: "The secretion of cellular products into the extracellular space via vesicle fusion", correct: false },
      { text: "The engulfing of extracellular material by forming a membrane-enclosed vesicle inside the cell", correct: true },
      { text: "The simple diffusion of large protein molecules directly through the lipid bilayer", correct: false },
      { text: "The translocation of macromolecules through nuclear pore complexes into the nucleus", correct: false },
    ],
    explanation: "Endocytosis (Outside → Inside) is the process by which cells engulf material from the extracellular environment by invaginating the plasma membrane to form a vesicle that pinches off inside the cell. It has three subtypes: PHAGOCYTOSIS ('cellular eating' of particles), PINOCYTOSIS ('drinking' of fluids), and RECEPTOR-MEDIATED ENDOCYTOSIS (specific molecule uptake via membrane receptors)."
  },

  {
    id: 33,
    category: "Cell Physiology",
    question: "Phagocytosis is primarily carried out by which cells, and what does it destroy?",
    answers: [
      { text: "Neurons and erythrocytes primarily; the targets are circulating hormones and toxins", correct: false },
      { text: "Neutrophils and macrophages primarily; targets are microorganisms and aged cells", correct: true },
      { text: "Intestinal epithelial cells primarily; targets are dietary proteins and food antigens", correct: false },
      { text: "All nucleated body cells; targets include intracellular and extracellular waste products", correct: false },
    ],
    explanation: "Phagocytosis ('cellular eating') is carried out primarily by NEUTROPHILS and MACROPHAGES — key immune cells. The cell extends pseudopods around the particle, which fuse to form a PHAGOSOME. The phagosome then fuses with a LYSOSOME, and lysosomal enzymes digest the ingested material. It is an essential immune defense mechanism."
  },

  {
    id: 34,
    category: "Cell Physiology",
    question: "What distinguishes pinocytosis from phagocytosis?",
    answers: [
      { text: "Pinocytosis requires ATP and uses clathrin-coated pits for selective cargo recruitment, unlike phagocytosis", correct: false },
      { text: "Pinocytosis 'drinks' vesicles of extracellular fluid (nonspecific); phagocytosis 'eats' large solid particles", correct: true },
      { text: "Pinocytosis is always receptor-mediated and selective; phagocytosis is nonspecific and involves no membrane receptors", correct: false },
      { text: "Pinocytosis is restricted to specialized innate immune cells; phagocytosis occurs nonspecifically in every cell type", correct: false },
    ],
    explanation: "PHAGOCYTOSIS = 'cellular eating' — engulfs large particles (bacteria, cell debris) using pseudopods; mainly by immune cells. PINOCYTOSIS = 'cellular drinking' — the membrane furrows inward to engulf small vesicles of extracellular fluid; nonspecific process occurring in many cell types. Pinocytosis allows cells to take up large molecules dissolved in the fluid, even when they can't pass through the membrane by other means."
  },

  {
    id: 35,
    category: "Cell Physiology",
    question: "In exocytosis:",
    answers: [
      { text: "The cell imports large molecules from the environment by inward membrane invagination", correct: false },
      { text: "Secretory vesicles from the Golgi fuse with the plasma membrane and release contents extracellularly", correct: true },
      { text: "Molecules are transported directionally through the nuclear pore complex to the cytoplasm", correct: false },
      { text: "The plasma membrane breaks down locally, passively releasing intracellular contents", correct: false },
    ],
    explanation: "EXOCYTOSIS (Inside → Outside): cellular products are packaged into vesicles by the GOLGI COMPLEX. These secretory vesicles migrate to and fuse with the plasma membrane, releasing their contents into the extracellular environment. Examples: neurotransmitter release, hormone secretion, digestive enzyme secretion. Note: exocytosis also REPLACES membrane material lost during endocytosis."
  },

  {
    id: 36,
    category: "Cell Physiology",
    question: "What is transcytosis?",
    answers: [
      { text: "Bidirectional transport of molecules between the nucleus and cytoplasm via pore complexes", correct: false },
      { text: "Endocytosis on one cell surface followed by exocytosis on the opposite surface, crossing the cell", correct: true },
      { text: "Direct cell-to-cell molecular transfer via gap junction channels between adjacent cells", correct: false },
      { text: "A form of primary active transport restricted exclusively to neurons and glial cells", correct: false },
    ],
    explanation: "Transcytosis is the combination of endocytosis + exocytosis across a cell: macromolecules are ENDOCYTOSED on one surface of an endothelial cell and then EXOCYTOSED on the OPPOSITE surface. This allows large molecules that cannot cross the cell membrane by other means to traverse an epithelial or endothelial barrier entirely (e.g., transport across capillary walls or intestinal epithelium)."
  },

  {
    id: 37,
    category: "Cell Physiology",
    question: "Why is the inside of the cell negatively charged relative to the outside?",
    answers: [
      { text: "Because Na⁺ is pumped into the cell in large quantities, generating a strongly positive interior", correct: false },
      { text: "Because of fixed intracellular anions, selective K⁺ permeability, and net outward Na⁺/K⁺ pump activity", correct: true },
      { text: "Because Cl⁻ accumulates inside the cell, exceeding intracellular cation concentrations at rest", correct: false },
      { text: "Because the cell wall acts as a negatively charged barrier excluding all positively charged cations", correct: false },
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
      { text: "0 mV", correct: false },
    ],
    explanation: "Neurons have a resting membrane potential of approximately -70 mV (inside negative relative to outside). Most body cells range from -65 mV to -85 mV. If only K⁺ were permeable, the potential would be -90 mV (K⁺ equilibrium potential). If only Na⁺ were permeable, it would be +66 mV (Na⁺ equilibrium potential). The real resting potential is between these because multiple ions contribute."
  },

  {
    id: 39,
    category: "Cell Physiology",
    question: "The K⁺ equilibrium potential (Ek) is approximately -90 mV. This means:",
    answers: [
      { text: "At -90 mV, the Na⁺/K⁺ pump reaches its maximal activity and expels K⁺ at the fastest possible rate", correct: false },
      { text: "At -90 mV, the electrical gradient driving K⁺ inward exactly opposes the chemical gradient driving K⁺ outward", correct: true },
      { text: "All excitable cells in the body, including skeletal muscle and cardiac cells, maintain a resting potential of exactly -90 mV", correct: false },
      { text: "The intracellular K⁺ concentration reaches equilibrium at a value of exactly -90 mEq per liter of cytoplasm", correct: false },
    ],
    explanation: "The K⁺ equilibrium potential (Ek = -90 mV) is the membrane voltage at which the ELECTRICAL GRADIENT (attracting K⁺ inward due to negative inside) exactly opposes the CHEMICAL GRADIENT (driving K⁺ outward due to high intracellular [K⁺]). At this potential, there is no net movement of K⁺. It is calculated using the Nernst equation with [K⁺] = 150 mM inside and 5 mM outside."
  },

  {
    id: 40,
    category: "Cell Physiology",
    question: "According to the Nernst equation, what does the equilibrium potential (Ex) represent?",
    answers: [
      { text: "The maximum speed at which an ion species can physically cross the lipid bilayer", correct: false },
      { text: "The membrane voltage at which a specific ion has no net movement — electrical equals chemical gradient", correct: true },
      { text: "The minimum extracellular concentration of an ion required to generate a membrane potential", correct: false },
      { text: "The minimum ATP expenditure required to maintain stable ionic gradients across the membrane", correct: false },
    ],
    explanation: "The Nernst equation (Ex = (61/z) × log([Xo]/[Xi]) at 37°C) calculates the equilibrium potential for a specific ion — the membrane voltage at which that ion has ZERO NET MOVEMENT because its electrical and chemical gradients are equal and opposite. Ek = -90 mV (for K⁺), ENa = +66 mV (for Na⁺). The real resting potential reflects the contribution of all permeable ions."
  },

  {
    id: 41,
    category: "Cell Physiology",
    question: "Why does a change in extracellular K⁺ concentration have the GREATEST effect on resting membrane potential?",
    answers: [
      { text: "Because K⁺ is the most abundant extracellular cation under normal physiological conditions", correct: false },
      { text: "Because the membrane is most permeable to K⁺, so resting potential is dominated by the K⁺ gradient", correct: true },
      { text: "Because K⁺ binding to the Na⁺/K⁺ pump activates it far more strongly than other ions", correct: false },
      { text: "Because K⁺ is the only ion capable of crossing the plasma membrane at resting state", correct: false },
    ],
    explanation: "The plasma membrane is MORE PERMEABLE to K⁺ than to any other cation. Since membrane potential is determined by the ions that can most easily cross the membrane, K⁺ has the dominant influence on resting potential. A change in extracellular [K⁺] shifts the K⁺ equilibrium potential, which shifts the resting membrane potential. This is why hyperkalemia (elevated blood K⁺) can dangerously affect heart and nerve function."
  },

  {
    id: 42,
    category: "Cell Physiology",
    question: "The membrane potential is described as making each cell 'act like a tiny battery'. What is the significance of this?",
    answers: [
      { text: "It allows certain cells to convert light energy into electrical signals for photosynthesis", correct: false },
      { text: "It provides electrochemical energy for muscle contraction, heartbeat regulation, and nerve impulse generation", correct: true },
      { text: "It allows mitochondria to generate ATP via reverse electron transport through the plasma membrane", correct: false },
      { text: "It serves only as a structural feature with no direct role in cell signaling or excitability", correct: false },
    ],
    explanation: "The unequal distribution of charges (+ outside, − inside) creates a potential difference (measured in volts) that is physiologically critical for: MUSCLE CONTRACTION, REGULATION OF HEARTBEAT, and GENERATION OF NERVE IMPULSES. Changes in membrane permeability (opening of ion channels) cause changes in this potential difference, generating the electrical signals that drive neuromuscular function."
  },

  {
    id: 43,
    category: "Nervous System",
    question: "According to anatomy, how is the nervous system divided?",
    answers: [
      { text: "Somatic NS and Autonomic NS", correct: false },
      { text: "CNS (brain + spinal cord) and PNS (nerves)", correct: true },
      { text: "Afferent NS (sensory) and Efferent NS (motor)", correct: false },
      { text: "Sympathetic NS and Parasympathetic NS", correct: false },
    ],
    explanation: "Anatomically, the NS divides into: CNS (Central Nervous System) = brain + spinal cord; and PNS (Peripheral Nervous System) = nerves, which include 31 pairs of spinal nerves (from the spinal cord) and 12 pairs of cranial nerves (from the base of the brain). The somatic/autonomic and afferent/efferent classifications are FUNCTIONAL divisions, not anatomical ones."
  },

  {
    id: 44,
    category: "Nervous System",
    question: "What distinguishes afferent from efferent pathways?",
    answers: [
      { text: "Afferent/sensory = centripetal (periphery → CNS); efferent/motor = centrifugal (CNS → periphery)", correct: true },
      { text: "Afferent/motor = centrifugal (CNS → periphery); efferent/sensory = centripetal (periphery → CNS)", correct: false },
      { text: "Afferent pathways = CNS only; efferent pathways = PNS only (periphery → effectors)", correct: false },
      { text: "Afferent/autonomic = centrifugal (CNS → viscera); efferent/somatic = centripetal (muscles → CNS)", correct: false },
    ],
    explanation: "AFFERENT (sensory) pathways carry impulses CENTRIPETALLY — from the periphery (receptors) toward the center (CNS). EFFERENT (motor) pathways carry impulses CENTRIFUGALLY — from the center (CNS) out to the periphery (effectors: muscles and glands). A useful memory trick: Afferent = Arrives at CNS; Efferent = Exits CNS."
  },

  {
    id: 45,
    category: "Nervous System",
    question: "Which neurons exclusively belong to the CNS?",
    answers: [
      { text: "Interneurons", correct: true },
      { text: "Motoneurons", correct: false },
      { text: "Proprioceptors", correct: false },
      { text: "Efferent neurons", correct: false },
    ],
    explanation: "INTERNEURONS (association neurons) join afferent (sensory) neurons to motor (efferent) neurons and belong EXCLUSIVELY to the CNS (brain and spinal cord). Sensory neurons have their cell body in PNS ganglia. Motor neurons have their cell body in the CNS but send axons into the PNS. Only interneurons are entirely confined within the CNS."
  },

  {
    id: 46,
    category: "Nervous System",
    question: "In the CNS, what is the difference between grey matter and white matter?",
    answers: [
      { text: "Grey matter = myelinated axons only; white matter = cell bodies and unmyelinated axons", correct: false },
      { text: "Grey matter = cell bodies + neuroglia + unmyelinated axons; white matter = myelinated axons", correct: true },
      { text: "Grey matter is found only in the spinal cord; white matter only in the cerebral cortex", correct: false },
      { text: "Grey matter and white matter are identical in composition; they differ only in anatomical location", correct: false },
    ],
    explanation: "GREY MATTER contains: neuron cell bodies, neuroglia, and unmyelinated axons. WHITE MATTER contains myelinated axons (the myelin sheath gives the white colour). In the brain, grey matter forms the outer cortex; white matter is deeper. In the spinal cord, the arrangement is reversed: grey matter is the internal 'butterfly' shape, white matter surrounds it. In the PNS: cell bodies → ganglia; axons → nerves."
  },

  {
    id: 47,
    category: "Nervous System",
    question: "Neurons are metabolically remarkable. Which of the following statements about their energy consumption is correct?",
    answers: [
      { text: "Neurons use fatty acids as fuel and account for roughly 2.5% of total body weight", correct: false },
      { text: "Neurons are ~2.5% of body weight, but consume 60% of glucose and 20% of O₂ at rest", correct: true },
      { text: "Neurons can freely switch between glucose and ketone bodies without any functional consequence", correct: false },
      { text: "Neurons consume 20% of total body glucose and 60% of total body oxygen during rest", correct: false },
    ],
    explanation: "Neurons are extremely energy-demanding: they use ONLY glucose as fuel (unlike most other cells that can use fats). Despite representing only ~2.5% of body weight, they consume 60% of total glucose and 20% of total O₂ under resting conditions. This explains why even a brief vascular blockage (a few minutes) can cause IRREVERSIBLE brain damage — neurons have no energy reserves and are extremely sensitive to hypoglycemia."
  },

  {
    id: 48,
    category: "Nervous System",
    question: "Which glial cell forms the myelin sheath in the CNS?",
    answers: [
      { text: "Schwann cells in the CNS — they wrap axons similarly to how they do in the PNS", correct: false },
      { text: "Oligodendrocytes — they form myelin sheaths around axons exclusively within the CNS", correct: true },
      { text: "Astrocytes — they form myelin as part of their role maintaining the blood-brain barrier", correct: false },
      { text: "Microglia — they wrap damaged axons after injury to restore conduction velocity", correct: false },
    ],
    explanation: "OLIGODENDROCYTES form myelin sheaths around axons in the CNS (they also keep nerve fibers together). SCHWANN CELLS form myelin sheaths in the PNS. Key distinction: CNS demyelination → oligodendrocytes affected (e.g., Multiple Sclerosis). PNS demyelination → Schwann cells affected. Astrocytes contribute to the BBB and feed neurons. Microglia are the CNS macrophages."
  },

  {
    id: 49,
    category: "Nervous System",
    question: "What is the role of astrocytes?",
    answers: [
      { text: "They form myelin sheaths in the PNS AND regenerate damaged peripheral axons after injury", correct: false },
      { text: "They feed neurons by capturing blood glucose AND contribute to the blood-brain barrier via pseudopods", correct: true },
      { text: "They are the resident macrophages of the CNS, phagocytosing pathogens and cellular debris", correct: false },
      { text: "They line the brain ventricles AND form the choroid plexus that produces cerebrospinal fluid", correct: false },
    ],
    explanation: "ASTROCYTES (star-shaped) have two key roles: (1) They FEED neurons by capturing glucose from the blood; (2) They cover brain capillaries with their 'pseudopods,' contributing to the BLOOD-BRAIN BARRIER (BBB). Microglia are the CNS macrophages. Ependymal cells line ventricles and form the choroid plexus. Oligodendrocytes form myelin in the CNS. Schwann cells and satellite cells serve PNS functions."
  },

  {
    id: 50,
    category: "Nervous System",
    question: "Microglia are best described as:",
    answers: [
      { text: "The glial cells responsible for myelinating axons in the CNS and repairing demyelinated fibers after injury", correct: false },
      { text: "The CNS macrophages — they phagocytose pathogens and debris; overactivation contributes to neurodegeneration", correct: true },
      { text: "The ependymal cells that line the ventricular system and continuously produce cerebrospinal fluid from plasma", correct: false },
      { text: "The satellite cells that physically surround and support neuron cell bodies in the ganglia of the peripheral NS", correct: false },
    ],
    explanation: "MICROGLIA are very small glial cells that act as the immune/macrophage cells of the CNS. They destroy microorganisms and cellular debris. However, OVERACTIVE microglia release free radicals that can contribute to NEURODEGENERATIVE DISEASES (e.g., Alzheimer's, Parkinson's). Satellite cells support neuron cell bodies in PNS ganglia. Ependymal cells produce CSF."
  },

  {
    id: 51,
    category: "Nervous System",
    question: "What is the key functional advantage of saltatory conduction in myelinated axons?",
    answers: [
      { text: "It enables action potentials to travel in both directions along myelinated axons simultaneously", correct: false },
      { text: "It produces less signal loss and higher conduction speed — action potentials leap between Nodes of Ranvier", correct: true },
      { text: "It lowers the threshold stimulus required to trigger an action potential in the myelinated axon", correct: false },
      { text: "It allows unmyelinated segments to conduct impulses faster than the myelinated segments between nodes", correct: false },
    ],
    explanation: "In myelinated axons, myelin INSULATES the axon and prevents ion movement through the membrane except at the NODES OF RANVIER (gaps between Schwann cells/oligodendrocytes). Action potentials 'leap' from node to node — SALTATORY CONDUCTION. Advantages: (1) LESS signal loss; (2) HIGHER speed than unmyelinated axons. Myelinated axons in CNS have no neurilemma; in PNS they have the sheath of Schwann (neurilemma) external to the myelin."
  },

  {
    id: 52,
    category: "Nervous System",
    question: "What is the threshold potential of a neuron?",
    answers: [
      { text: "-70 mV", correct: false },
      { text: "-55 mV", correct: true },
      { text: "+30 mV", correct: false },
      { text: "-90 mV", correct: false },
    ],
    explanation: "The THRESHOLD is approximately -55 mV. When depolarization reaches -55 mV, voltage-gated Na⁺ channels open in a POSITIVE FEEDBACK LOOP: opening of Na⁺ channels → more Na⁺ enters → more depolarization → more channels open → etc. This produces a maximal, all-or-none action potential peaking at +30 mV. Below threshold, channels close and no action potential is generated."
  },

  {
    id: 53,
    category: "Nervous System",
    question: "Describe the correct sequence of ion movements during a full action potential:",
    answers: [
      { text: "Na⁺ rushes in (→ +30 mV) → Na⁺ channels inactivate, K⁺ exits (repolarization) → hyperpolarization → pump restores gradients", correct: true },
      { text: "K⁺ rushes in (→ +30 mV) → K⁺ channels inactivate, Na⁺ exits (repolarization) → hyperpolarization → pump restores gradients", correct: false },
      { text: "Ca²⁺ rushes in (→ +30 mV) → Ca²⁺ channels close, Cl⁻ enters (repolarization) → depolarization → channels reset", correct: false },
      { text: "Na⁺ exits (→ −90 mV) → Na⁺ channels reopen, K⁺ enters (repolarization) → hyperpolarization → pump removes K⁺", correct: false },
    ],
    explanation: "Full sequence: (1) RESTING: -70 mV, all voltage-gated channels closed. (2) DEPOLARIZATION: stimulus → Na⁺ channels open → Na⁺ rushes IN → membrane reaches +30 mV. (3) REPOLARIZATION: at +30 mV, Na⁺ channels INACTIVATE, K⁺ channels open → K⁺ rushes OUT → membrane repolarizes. (4) HYPERPOLARIZATION: K⁺ channels remain briefly open → slight overshoot below -70 mV. (5) Na⁺/K⁺ pump restores original ionic gradients (70% of neuron's ATP is used for this)."
  },

  {
    id: 54,
    category: "Nervous System",
    question: "The absolute refractory period means:",
    answers: [
      { text: "A very strong suprathreshold stimulus can still trigger a full action potential during this critical window", correct: false },
      { text: "No action potential can occur regardless of stimulus strength, because Na⁺ channels are inactivated", correct: true },
      { text: "K⁺ channels are still open after repolarization, making threshold harder but not impossible to reach with strong stimuli", correct: false },
      { text: "The neuron has returned fully to its resting membrane potential and is ready to respond immediately to any new stimulus", correct: false },
    ],
    explanation: "The ABSOLUTE REFRACTORY PERIOD is the time during which an action potential is already occurring and NO new action potential can be generated, regardless of stimulus strength. This is because Na⁺ channels are INACTIVATED (different from simply 'closed'). The RELATIVE REFRACTORY PERIOD follows — K⁺ channels are still open, so the threshold is higher, but a very strong stimulus CAN trigger an action potential. These periods limit firing frequency and ensure unidirectional propagation."
  },

  {
    id: 55,
    category: "Nervous System",
    question: "How does stimulus intensity translate into nervous system signaling, given the all-or-none law?",
    answers: [
      { text: "Stronger stimuli generate action potentials with proportionally larger peak amplitudes", correct: false },
      { text: "Intensity is coded by the number of neurons firing and the frequency of action potentials", correct: true },
      { text: "Stronger stimuli produce action potentials that last longer in duration than weaker stimuli", correct: false },
      { text: "The all-or-none law means every stimulus, regardless of strength, produces the same sensation", correct: false },
    ],
    explanation: "The all-or-none law states that action potential AMPLITUDE is always maximal once threshold is reached — a supramaximal stimulus does NOT produce a bigger action potential. Instead, intensity is coded by: (1) the NUMBER of neurons firing (more receptors activated → more fibers conducting → more intense sensation); (2) the FREQUENCY of action potentials (more rapid firing = stronger signal). The most sensitive skin areas (fingertips) have the highest receptor density."
  },

  {
    id: 56,
    category: "Nervous System",
    question: "Local anesthetics like lidocaine work by:",
    answers: [
      { text: "They block K⁺ channels in the axon, permanently preventing repolarization after an action potential", correct: false },
      { text: "They reversibly bind voltage-gated Na⁺ channels, preventing their opening and blocking action potentials", correct: true },
      { text: "They inhibit the Na⁺/K⁺ ATPase pump, progressively depleting electrochemical ion gradients", correct: false },
      { text: "They block presynaptic Ca²⁺ channels, preventing neurotransmitter release at the axon terminal", correct: false },
    ],
    explanation: "Local anesthetics (lidocaine, procaine) reversibly BIND TO VOLTAGE-GATED Na⁺ CHANNELS in the axon membrane, preventing them from opening. Without Na⁺ influx, depolarization cannot occur → no action potential → sensory axons cannot transmit pain signals. The effect is REVERSIBLE (the drug dissociates over time). This is purely a Na⁺ channel effect, not K⁺ or Ca²⁺."
  },

  {
    id: 57,
    category: "Nervous System",
    question: "What is the difference between pacemaker potentials and plateau potentials?",
    answers: [
      { text: "Pacemaker = typical NS impulse (~4 ms); plateau = prolonged depolarization in cardiac cells only", correct: false },
      { text: "Pacemaker = spontaneous repetitive firing without stimulus; plateau = delayed repolarization in cardiac cells", correct: true },
      { text: "Both are action potential types found exclusively in the neurons of the central nervous system", correct: false },
      { text: "Plateau potentials drive peristalsis only; pacemaker potentials drive only cardiac contraction", correct: false },
    ],
    explanation: "Three action potential types: (1) HERRINGBONE (nervous system): ~4 ms, the typical nerve impulse; (2) PLATEAU (cardiac cells): membrane does NOT repolarize immediately after depolarization — this prolonged depolarization allows sustained cardiac contraction; (3) PACEMAKER: spontaneous, REPETITIVE discharges without external stimulus — responsible for heartbeat rhythm, peristaltic movements, and breathing rhythm."
  },

  {
    id: 58,
    category: "Nervous System",
    question: "In a chemical synapse, what is the role of Ca²⁺ in neurotransmitter release?",
    answers: [
      { text: "Ca²⁺ directly opens postsynaptic ligand-gated ion channels causing immediate depolarization", correct: false },
      { text: "AP activates presynaptic voltage-gated Ca²⁺ channels; Ca²⁺ influx triggers vesicle fusion and NT exocytosis", correct: true },
      { text: "Ca²⁺ is released by the postsynaptic cell to signal the presynaptic terminal to release NT", correct: false },
      { text: "Ca²⁺ blocks presynaptic Na⁺ channels to terminate the action potential before NT release occurs", correct: false },
    ],
    explanation: "Sequence in a chemical synapse: (1) Action potential arrives at presynaptic terminal → activates VOLTAGE-GATED Ca²⁺ CHANNELS; (2) Ca²⁺ enters the presynaptic cytoplasm; (3) rise in cytosolic Ca²⁺ causes pre-existing NT vesicles to FUSE with the plasma membrane; (4) NT is released into the synaptic cleft by EXOCYTOSIS; (5) NT diffuses across the cleft (20-40 nm wide) to bind postsynaptic receptors. There is a synaptic delay of ~0.5 ms."
  },

  {
    id: 59,
    category: "Nervous System",
    question: "What is an EPSP vs. an IPSP?",
    answers: [
      { text: "EPSP = a full action potential; IPSP = a return to the baseline resting membrane potential", correct: false },
      { text: "EPSP = transient depolarization via Na⁺ influx; IPSP = hyperpolarization via Cl⁻/K⁺", correct: true },
      { text: "EPSP is produced exclusively by ACh; IPSP is produced exclusively by GABA at all synapses", correct: false },
      { text: "Both produce identical membrane effects but EPSP lasts longer and IPSP terminates more quickly", correct: false },
    ],
    explanation: "EPSP (Excitatory Postsynaptic Potential): NT binding opens Na⁺ channels → transient depolarization → brings the postsynaptic cell CLOSER to threshold. A single EPSP alone does NOT reach threshold for an action potential. IPSP (Inhibitory Postsynaptic Potential): NT binding increases permeability to Cl⁻ and K⁺ → hyperpolarization → moves the cell AWAY from threshold. EPSPs and IPSPs are SUMMED at the axon hillock to determine if an action potential fires."
  },

  {
    id: 60,
    category: "Nervous System",
    question: "How is neurotransmitter removed from the synaptic cleft after release?",
    answers: [
      { text: "NT is removed exclusively by enzymatic degradation within the synaptic cleft itself", correct: false },
      { text: "By presynaptic reuptake (active transport), enzymatic degradation, diffusion out, and glial cell uptake", correct: true },
      { text: "NT is never actively removed — it is permanently inactivated by the postsynaptic receptor protein", correct: false },
      { text: "Only by passive diffusion out of the synaptic cleft — no active removal mechanisms exist", correct: false },
    ],
    explanation: "NT removal is essential — as long as NT is bound to its receptor, the EPSP or IPSP is maintained. Removal occurs by FOUR mechanisms: (1) REUPTAKE into the presynaptic neuron by active transport (for non-peptide NTs — this is the target of many drugs, e.g., SSRIs block serotonin reuptake); (2) ENZYMATIC DEGRADATION (e.g., acetylcholinesterase breaks down ACh); (3) DIFFUSION out of the cleft; (4) UPTAKE by glial cells."
  },

  {
    id: 61,
    category: "Nervous System",
    question: "What are the TWO main categories of postsynaptic receptors?",
    answers: [
      { text: "Nicotinic and muscarinic receptors — both are subtypes of the cholinergic receptor superfamily", correct: false },
      { text: "Ligand-gated ion channels (ionotropic) and G-protein-coupled receptors (metabotropic)", correct: true },
      { text: "Adrenergic receptors and cholinergic receptors — classified by the NT they respond to", correct: false },
      { text: "Alpha and beta receptors — classified by their affinity for catecholamines", correct: false },
    ],
    explanation: "The two main receptor categories are: (1) IONOTROPIC (ligand-gated ion channels): NT binding directly opens an ion channel → FAST response (milliseconds). Examples: nicotinic ACh receptors (open Na⁺/K⁺ channels), GABA-A receptors (open Cl⁻ channels). (2) METABOTROPIC (G-protein-coupled receptors): NT binding activates a G-protein → activates enzymes or ion channels via second messengers → SLOWER but longer-lasting response. Examples: muscarinic ACh receptors, adrenergic receptors."
  },

  {
    id: 62,
    category: "Nervous System",
    question: "Acetylcholine (ACh) acts on two receptor types. Match them correctly:",
    answers: [
      { text: "Nicotinic = smooth muscle and glands (G-protein); Muscarinic = skeletal muscle and ganglia (ionotropic)", correct: false },
      { text: "Nicotinic (ionotropic, Na⁺/K⁺) = brain, ganglia, skeletal muscle; Muscarinic (G-protein) = smooth/cardiac muscle, glands", correct: true },
      { text: "Both receptor subtypes are found exclusively within the central nervous system and nowhere in the PNS", correct: false },
      { text: "Nicotinic = metabotropic (G-protein coupled); Muscarinic = ionotropic (ligand-gated ion channel)", correct: false },
    ],
    explanation: "NICOTINIC receptors (named because nicotine activates them): IONOTROPIC (form Na⁺/K⁺ channels), found in brain, autonomic ganglia, and skeletal muscle (neuromuscular junction). Antagonist: curare. MUSCARINIC receptors (activated by muscarine from mushrooms): METABOTROPIC (G-protein coupled, M1-M5 subtypes), found in smooth muscle, cardiac muscle, glands, and brain. Antagonist: atropine (from belladonna). Remember: nicotinic = fast; muscarinic = slow."
  },

  {
    id: 63,
    category: "Nervous System",
    question: "GABA is described as the most prevalent NT in the brain. What is its effect?",
    answers: [
  { text: "GABA is inhibitory: opens Cl⁻ channels → hyperpolarization → IPSP", correct: true },
  { text: "GABA is excitatory: opens Na⁺ channels → depolarization → EPSP", correct: false },
  { text: "GABA is modulatory: opens K⁺ channels → partial depolarization → no IPSP or EPSP", correct: false },
  { text: "GABA is inhibitory: blocks Na⁺ channels → prevents depolarization → no AP possible", correct: false },
],
    explanation: "GABA (γ-aminobutyric acid, derived from glutamic acid) is the primary INHIBITORY neurotransmitter of the CNS — the most prevalent NT in the brain. GABA receptors are ligand-gated Cl⁻ channels: GABA binding → Cl⁻ enters → hyperpolarization → IPSP. Clinically important: BENZODIAZEPINES (e.g., Valium/diazepam) bind to GABA receptors, enhancing their effect → reducing anxiety, promoting sleep, treating muscle spasms. Contrast with GLUTAMATE, the main EXCITATORY NT."
  },

  {
    id: 64,
    category: "Nervous System",
    question: "Regarding catecholamines (dopamine, noradrenaline, adrenaline), which statement is correct?",
    answers: [
  { text: "Dopamine deficiency → Parkinson's; adrenaline/noradrenaline act as NT or hormones; all bind adrenergic receptors", correct: true },
  { text: "Dopamine excess → Parkinson's; adrenaline acts as NT only; noradrenaline binds exclusively β receptors", correct: false },
  { text: "Dopamine deficiency → depression; adrenaline/noradrenaline bind muscarinic receptors; all synthesised from tryptophan", correct: false },
  { text: "Dopamine excess → schizophrenia only; adrenaline acts as hormone only; noradrenaline binds α receptors exclusively", correct: false },
],
    explanation: "Key catecholamine facts: (1) DOPAMINE: deficiency in basal ganglia → Parkinson's disease (movement control); also involved in emotion and memory. L-DOPA crosses the BBB and is converted to dopamine (used in Parkinson's treatment). (2) NORADRENALINE: preferentially stimulates α receptors. (3) ADRENALINE: stimulates all adrenergic receptors (α1, α2, β1, β2) equally. All bind G-protein-coupled ADRENERGIC RECEPTORS. Adrenaline and noradrenaline can act as NT (synapse) or hormones (released by adrenal medulla into blood)."
  },

  {
    id: 65,
    category: "Nervous System",
    question: "Serotonin (5-HT) is primarily involved in which functions?",
    answers: [
      { text: "Movement control and the pathophysiology of Parkinson's disease", correct: false },
      { text: "Mood and behavior regulation, appetite, and cerebral circulation", correct: true },
      { text: "CNS inhibition — the most prevalent inhibitory neurotransmitter in the brain", correct: false },
      { text: "Pain analgesia — it mimics the effects of endogenous opioid peptides", correct: false },
    ],
    explanation: "SEROTONIN (5-hydroxytryptamine, 5-HT) is released by neurons in the brain stem. Functions: regulation of MOOD and BEHAVIOUR, APPETITE, and CEREBRAL CIRCULATION. LSD is a structural analog of serotonin (explains hallucinogenic effects). ANTIDEPRESSANTS like fluoxetine (Prozac®) work by inhibiting serotonin reuptake (SSRIs = Selective Serotonin Reuptake Inhibitors), increasing synaptic serotonin levels. Movement/Parkinson's = dopamine. Inhibition/anxiety = GABA. Analgesia = endogenous opioids."
  },

  {
    id: 66,
    category: "Nervous System",
    question: "Endocannabinoids are unique neurotransmitters because:",
    answers: [
      { text: "They are peptides stored in presynaptic vesicles and released from axon terminals like classical NTs", correct: false },
      { text: "They are lipids produced from the postsynaptic membrane, released retrograde to inhibit presynaptic NT release", correct: true },
      { text: "They are peptides manufactured and released exclusively by astrocytes rather than by neurons", correct: false },
      { text: "They are gases like nitric oxide that diffuse nonspecifically in all directions from axon terminals", correct: false },
    ],
    explanation: "Endocannabinoids are unique in several ways: (1) They are LIPIDS (the only fatty NTs) — not stored in vesicles but produced FROM THE PLASMA MEMBRANE on demand; (2) They are released from the POSTSYNAPTIC neuron (dendrites/cell body); (3) They act RETROGRADE: diffuse BACKWARD to the presynaptic axon; (4) There they bind presynaptic receptors and INHIBIT NT release (GABA or glutamate). THC from marijuana acts on the same receptors. They may strengthen synaptic transmission during learning."
  },

  {
    id: 67,
    category: "CNS",
    question: "What are the THREE layers of meninges protecting the CNS, from outermost to innermost?",
    answers: [
      { text: "Pia mater → Arachnoid → Dura mater", correct: false },
      { text: "Dura mater → Arachnoid → Pia mater", correct: true },
      { text: "Arachnoid → Dura mater → Pia mater", correct: false },
      { text: "Dura mater → Pia mater → Arachnoid", correct: false },
    ],
    explanation: "From outermost to innermost: DURA MATER ('tough mother') → ARACHNOID (spider-like, with subarachnoid space containing CSF) → PIA MATER ('tender mother', directly adheres to brain/spinal cord). CSF circulates in the SUBARACHNOID SPACE (between arachnoid and pia mater). Meningitis = infection/inflammation of these membranes, diagnosed by lumbar puncture examining the CSF."
  },

  {
    id: 68,
    category: "CNS",
    question: "What is cerebrospinal fluid (CSF), where is it produced, and what are its functions?",
    answers: [
      { text: "CSF is plasma filtered by the kidneys, circulates in the spinal cord only, and contains blood cells", correct: false },
      { text: "CSF is produced by the choroid plexus; it cushions the CNS, removes metabolites, and aids neurological diagnosis", correct: true },
      { text: "CSF is produced exclusively by astrocytes and circulates only within individual neuron axons", correct: false },
      { text: "CSF composition is identical to plasma, including full protein content and circulating blood cells", correct: false },
    ],
    explanation: "CSF is produced by the CHOROID PLEXUS (capillary networks projecting from pia mater into ventricles) by separation of fluid from blood. It circulates in the subarachnoid space and ventricles, and is reabsorbed into venous blood via arachnoid granulations (Pacchioni's granulations). Composition: water, Na⁺, K⁺, Ca²⁺, Cl⁻, salts — NO CELLS. Functions: (1) mechanical cushioning; (2) regulates brain contents; (3) removes metabolites; (4) pathway for pineal secretions; (5) diagnostic value (presence of blood, bacteria = injury/infection)."
  },

  {
    id: 69,
    category: "CNS",
    question: "What is the correct hierarchical structure of the brain?",
    answers: [
      { text: "Brain = Cerebrum + Brainstem + Cerebellum; Cerebrum = Telencephalon + Diencephalon; Brainstem = Midbrain + Pons + Medulla", correct: true },
      { text: "Brain = Brainstem + Telencephalon + Cerebellum; Brainstem = Midbrain + Diencephalon + Medulla oblongata", correct: false },
      { text: "Brain = Cerebrum + Cerebellum + Pons; Cerebrum = Diencephalon only; Brainstem = Telencephalon + Medulla", correct: false },
      { text: "Brain = Telencephalon + Diencephalon + Cerebellum; Brainstem = Cerebrum + Pons + Medulla oblongata", correct: false },
    ],
    explanation: "Complete brain hierarchy: CNS = Brain + Spinal cord. Brain = CEREBRUM (forebrain) + BRAINSTEM + CEREBELLUM. Cerebrum = TELENCEPHALON (cerebral cortex, limbic system) + DIENCEPHALON (thalamus, hypothalamus, pineal gland). Brainstem = MIDBRAIN + PONS + MEDULLA OBLONGATA (contains cardiorespiratory centers). This hierarchy is important for understanding clinical syndromes — brainstem lesions affect vital functions; cortical lesions affect higher functions."
  },

  {
    id: 70,
    category: "CNS",
    question: "The hypothalamus is part of the diencephalon. Which of the following best describes its functions?",
    answers: [
      { text: "Controls voluntary movement, postural balance, and equilibrium via cerebellar circuits", correct: false },
      { text: "Acts as a 'customs office' integrating activities between many brain areas and regulating communication", correct: false },
      { text: "Links NS to endocrine system (pituitary); regulates hunger, thirst, temperature, sex drive, and ANS", correct: true },
      { text: "Processes all incoming sensory signals from the cortex and sends motor commands to muscles", correct: false },
    ],
    explanation: "The HYPOTHALAMUS connects the nervous system to the endocrine system via the HYPOPHYSIS (pituitary gland). It regulates: hunger, thirst, body temperature, sex drive/libido, circadian rhythms, and is considered the MAIN ANS REGULATOR. The THALAMUS (also diencephalon) acts as a 'customs office' — integrating activities of many brain areas and controlling communication between them (described in the course material)."
  },

  {
    id: 71,
    category: "CNS",
    question: "The cerebellum is damaged in a patient. What clinical signs would you expect?",
    answers: [
      { text: "Loss of language comprehension and production (aphasia) due to cortical disconnection", correct: false },
      { text: "Unilateral motor paralysis affecting the opposite side of the body (contralateral hemiplegia)", correct: false },
      { text: "Ataxia (loss of coordination), intention tremor when reaching for objects, impaired balance", correct: true },
      { text: "Complete loss of somatic sensation — touch, pain, and temperature — on one body side", correct: false },
    ],
    explanation: "The CEREBELLUM coordinates and controls: (1) postural movements and balance (with spinal cord/brainstem); (2) voluntary movement precision (with cerebral cortex); (3) rapid complex movements (typing, piano playing); (4) plans next movement from current one. Cerebellar damage → ATAXIA (loss of coordination) and INTENTION TREMOR (tremor that appears when attempting to reach a target, like touching the nose). Language/memory loss → cortical/limbic. Paralysis → motor cortex/corticospinal tract. Sensory loss → sensory pathways."
  },

  {
    id: 72,
    category: "CNS",
    question: "What is the role of the pineal gland and melatonin?",
    answers: [
      { text: "The pineal gland modifies melatonin secretion based on light levels, regulating circadian rhythms and sleep", correct: true },
      { text: "The pineal gland produces cortisol in response to stress signals from the HPA axis system", correct: false },
      { text: "The pineal gland produces ADH (vasopressin) to control renal water reabsorption and osmolarity", correct: false },
      { text: "The pineal gland produces insulin-like growth factors to help regulate blood glucose in the brain", correct: false },
    ],
    explanation: "The PINEAL GLAND (part of the diencephalon) is the body's biological clock mechanism. It secretes MELATONIN: HIGH light levels → LOW melatonin; LOW light levels → HIGH melatonin. High melatonin signals to the body that it is bedtime. CSF serves as a pathway for pineal secretions to reach the pituitary gland. This circadian rhythm regulation is important in sleep disorders, jet lag, and seasonal affective disorder (SAD)."
  },

  {
    id: 73,
    category: "CNS",
    question: "Broca's area and Wernicke's area: what do they each do?",
    answers: [
      { text: "Broca's = controls muscles for speech production/articulation; Wernicke's = understanding language meaning", correct: true },
      { text: "Broca's = hearing comprehension area; Wernicke's = controls motor speech production and articulation", correct: false },
      { text: "Both areas are located in the right hemisphere and govern exclusively non-verbal communication", correct: false },
      { text: "Broca's area interprets all visual stimuli; Wernicke's processes and categorizes incoming auditory input", correct: false },
    ],
    explanation: "BROCA'S AREA: frontal lobe (left in most people), above Silvio's fissure — MOTOR area for speech; controls muscles needed to SPEAK and articulate sounds. Damage → Broca's aphasia (can understand but can't produce speech fluently). WERNICKE'S AREA: border between temporal and parietal lobes — ASSOCIATION area; allows understanding of the MEANING of speech and its emotional content. Damage → Wernicke's aphasia (fluent but meaningless speech, poor comprehension)."
  },

  {
    id: 74,
    category: "CNS",
    question: "The limbic system is essential for:",
    answers: [
      { text: "Voluntary skeletal movement control, fine motor coordination, and postural adjustment reflexes", correct: false },
      { text: "Emotional behaviors, learning, memory, and survival instincts (fear, aggression, hunger, libido)", correct: true },
      { text: "Primary processing of visual and auditory sensory information from the thalamic relay nuclei", correct: false },
      { text: "Automatic regulation of heartbeat and respiratory rate via brainstem reflex centers", correct: false },
    ],
    explanation: "The LIMBIC SYSTEM (from Latin 'limbus' = edge, forms a ring) includes: cingulate gyrus, amygdala, hippocampus, and septal nuclei — structures from cortex, diencephalon, and brainstem. It mediates EMOTIONAL BEHAVIORS (fear, aggression, affection, pleasure, sadness) and LEARNING and MEMORY mechanisms. It is evolutionarily the oldest, most conserved part of the mammalian brain. Hippocampus is particularly crucial for memory. Amygdala for fear/emotional responses."
  },

  {
    id: 75,
    category: "CNS",
    question: "Regarding cerebral lateralization, which statement is correct?",
    answers: [
      { text: "The left hemisphere controls all voluntary movement on the left side of the body; the right controls the right side", correct: false },
      { text: "Hemispheres are linked by the corpus callosum; left controls right body, right controls left; each is functionally specialized", correct: true },
      { text: "The corpus callosum is a rigid bony partition that completely separates the two hemispheres from any communication", correct: false },
      { text: "The right hemisphere controls all language and speech functions in every individual, regardless of handedness", correct: false },
    ],
    explanation: "CEREBRAL LATERALIZATION: hemispheres are separated by a groove but joined by the CORPUS CALLOSUM (mass of white fibers). LEFT hemisphere controls RIGHT side of body (and vice versa). Each hemisphere is specialized differently (HEMISPHERICITY): typically, the LEFT hemisphere is dominant for language (Broca's and Wernicke's areas), analytical reasoning; the RIGHT for spatial, creative, and emotional processing. However, 'dominant for language LEFT hemisphere' applies to most but not all people."
  },

  {
    id: 76,
    category: "CNS",
    question: "Memory formation is related to synaptic plasticity. How do habituation and sensitization differ?",
    answers: [
      { text: "Habituation = discards unimportant info (synaptic depression); sensitization = stores important info (synaptic facilitation)", correct: true },
      { text: "Habituation strengthens synaptic pathways through repeated stimulation; sensitization progressively weakens them", correct: false },
      { text: "Both habituation and sensitization uniformly strengthen all activated synaptic connections in the CNS equally", correct: false },
      { text: "Both processes are restricted to the cerebellum and apply exclusively to lower limb motor learning", correct: false },
    ],
    explanation: "Memory is produced by changes in synaptic transmission strength (SYNAPTIC PLASTICITY). Two forms: HABITUATION (negative memory) — the brain INHIBITS unimportant, repetitive information → depression of synaptic transmission (e.g., you stop noticing background noise). SENSITIZATION (positive memory) — the brain stores important information → FACILITATION of synaptic pathways (e.g., you remember a surprising or emotionally charged event). Short-term memory lasts minutes without repetition; long-term memory involves more permanent synaptic changes."
  },

  {
    id: 77,
    category: "CNS",
    question: "The blood-brain barrier (BBB): which substances can cross it easily, and why is it clinically relevant?",
    answers: [
      { text: "All substances cross the BBB identically via passive diffusion — no selective permeability or carrier proteins exist", correct: false },
      { text: "O₂, CO₂, glucose, alcohol, lipid-soluble molecules cross freely; ions/polar molecules need carriers — critical for drug design", correct: true },
      { text: "Only small inorganic ions can cross the BBB; all larger molecules including glucose and O₂ are completely blocked", correct: false },
      { text: "The BBB is formed exclusively by activated microglia and completely blocks all drugs from entering brain tissue", correct: false },
    ],
    explanation: "The BBB is formed by tight junctions between brain capillary epithelial cells + astrocyte pseudopods. EASY CROSSING: water, O₂, CO₂, glucose, alcohol, lipid-soluble substances. NEED CARRIERS: ions, polar molecules. CLINICAL IMPORTANCE: dopamine cannot cross the BBB → L-DOPA (its precursor) is used instead for Parkinson's disease. Some antibiotics cannot cross → only BBB-permeable antibiotics used for meningitis. Drug developers must always consider BBB permeability for CNS drugs."
  },

  {
    id: 78,
    category: "PNS",
    question: "How many pairs of spinal nerves are there, and how are they distributed?",
    answers: [
      { text: "12 pairs: 4 cervical, 4 thoracic, 2 lumbar, 2 sacral", correct: false },
      { text: "31 pairs: 8 cervical, 12 thoracic, 5 lumbar, 5 sacral, 1 coccygeal", correct: true },
      { text: "24 pairs: evenly distributed in equal groups along the full length of the spine", correct: false },
      { text: "31 pairs: 12 cervical, 8 thoracic, 5 lumbar, 4 sacral, 2 coccygeal", correct: false },
    ],
    explanation: "There are 31 pairs of spinal nerves: C1-C8 (8 pairs cervical), T1-T12 (12 thoracic), L1-L5 (5 lumbar), S1-S5 (5 sacral), and 1 coccygeal pair. All exit through the intervertebral foramen EXCEPT C1, which emerges between the atlas and occipital bone. All spinal nerves contain BOTH motor and sensory fibers → they are MIXED NERVES. Each innervates a specific skin area (DERMATOME) and muscle group (MYOTOME)."
  },

  {
    id: 79,
    category: "PNS",
    question: "What is the functional difference between the ventral root and the dorsal root of a spinal nerve?",
    answers: [
      { text: "Ventral root contains sensory neurons; dorsal root contains motor neurons — the ventral side faces internal organs", correct: false },
      { text: "Ventral root = motor neurons; dorsal root = sensory neurons, with dorsal root ganglion containing their cell bodies", correct: true },
      { text: "Both roots contain an equal mixture of motor and sensory fibers, making all spinal nerves functionally identical at their origin", correct: false },
      { text: "Ventral root carries parasympathetic autonomic fibers; dorsal root carries sympathetic fibers of the thoracolumbar outflow", correct: false },
    ],
    explanation: "VENTRAL (anterior) ROOT: contains MOTOR neurons (efferent). DORSAL (posterior) ROOT: contains SENSORY neurons (afferent). The dorsal root has a visible lump — the DORSAL ROOT GANGLION — which contains the CELL BODIES of the sensory neurons. After the two roots merge, the spinal nerve is MIXED (both sensory and motor). This is clinically important: selective damage to a dorsal root → sensory loss without motor; ventral root damage → motor loss without sensory loss."
  },

  {
    id: 80,
    category: "PNS",
    question: "Which cranial nerve has the most widespread parasympathetic influence on the body?",
    answers: [
      { text: "Vagus nerve (X)", correct: true },
      { text: "Trigeminal (V)", correct: false },
      { text: "Facial nerve (VII)", correct: false },
      { text: "Glossopharyngeal (IX)", correct: false },
    ],
    explanation: "The VAGUS NERVE (X) is the most extensive cranial nerve: SENSORY: receives from epiglottis, pharynx, and controls blood pressure and respiratory function. SOMATIC MOTOR: swallowing, coughing, phonation. PARASYMPATHETIC MOTOR: innervates smooth muscles and glands of the ENTIRE DIGESTIVE TRACT and the MYOCARDIUM — the widest parasympathetic distribution of any cranial nerve. 'Vagus' means 'wandering' in Latin, reflecting its extensive distribution."
  },

  {
    id: 81,
    category: "PNS",
    question: "What is a dermatome?",
    answers: [
      { text: "A muscle group receiving motor axons from a given spinal nerve (motor)", correct: false },
      { text: "An area of skin surface innervated by a single spinal nerve (sensory)", correct: true },
      { text: "A protective layer of the meninges surrounding the spinal cord", correct: false },
      { text: "A type of glial cell found within the peripheral sensory ganglia", correct: false },
    ],
    explanation: "DERMATOME: each area of SKIN innervated by a SINGLE spinal nerve. There is a systematic relationship between spinal nerve level and body region innervated. Clinically essential: pain in a specific dermatome indicates which spinal nerve/level is involved (e.g., herpes zoster follows a dermatome). MYOTOME (to distinguish): a MUSCLE GROUP that receives motor axons from a given spinal nerve. Both dermatomes and myotomes are used in neurological assessment."
  },

  {
    id: 82,
    category: "PNS",
    question: "What is the key structural difference between the somatic motor pathway and the ANS motor pathway?",
    answers: [
      { text: "The somatic motor pathway uses two neurons (upper and lower motor neurons); the ANS uses only one direct neuron", correct: false },
      { text: "The somatic pathway uses one neuron and the ANS always uses two neurons", correct: true },
      { text: "Both pathways use exactly the same number of neurons, with identical myelin sheaths and conduction velocities throughout", correct: false },
      { text: "The ANS consists only of postganglionic neurons projecting directly from the spinal cord — no preganglionic neurons exist", correct: false },
    ],
    explanation: "SOMATIC motor pathway: ONE motor neuron extends directly from the CNS grey matter (ventral root) to the SKELETAL MUSCLE. ANS motor pathway: TWO neurons always: (1) PREGANGLIONIC neuron: cell body in CNS, MYELINATED axon; (2) POSTGANGLIONIC neuron: cell body in a ganglion, AMYELINATED (unmyelinated) axon that synapses with the effector organ. This two-neuron arrangement applies to BOTH sympathetic and parasympathetic divisions."
  },

  {
    id: 83,
    category: "PNS",
    question: "Which neurotransmitters are used at each synapse in the sympathetic and parasympathetic systems?",
   answers: [
  { text: "All preganglionic neurons release ACh (nicotinic); sympathetic postganglionic → NA; parasympathetic postganglionic → ACh (muscarinic)", correct: true },
  { text: "All preganglionic neurons release NA (adrenergic); sympathetic postganglionic → ACh (nicotinic); parasympathetic postganglionic → NA (α receptors)", correct: false },
  { text: "Sympathetic preganglionic → NA (adrenergic); parasympathetic preganglionic → ACh (nicotinic); all postganglionic → ACh (muscarinic)", correct: false },
  { text: "All preganglionic → ACh (muscarinic); sympathetic postganglionic → NA (nicotinic); parasympathetic postganglionic → ACh (adrenergic)", correct: false },
],
    explanation: "NT distribution in the ANS: ALL PREGANGLIONIC neurons (both sympathetic AND parasympathetic): release ACh → acts on NICOTINIC receptors. POSTGANGLIONIC: SYMPATHETIC → releases NORADRENALINE (NA) → acts on α and β adrenergic receptors (EXCEPTION: sweat glands = ACh). PARASYMPATHETIC → releases ACh → acts on MUSCARINIC receptors. Memory aid: ACh = parasympathetic NT (and all preganglionic); NA = sympathetic NT at target organs."
  },

  {
    id: 84,
    category: "PNS",
    question: "Compare the anatomical features of sympathetic vs. parasympathetic preganglionic and postganglionic fibers:",
    answers: [
      { text: "Sympathetic: long preganglionic, short postganglionic; parasympathetic: short preganglionic, long postganglionic — both unmyelinated", correct: false },
      { text: "Sympathetic: short pre, long post; parasympathetic: long pre, short post; ganglia near the organ for parasympathetic (terminal ganglia)", correct: true },
      { text: "Both sympathetic and parasympathetic divisions have equal-length pre and postganglionic fibers with the same myelination pattern", correct: false },
      { text: "Sympathetic ganglia are always located immediately adjacent to the target organ; parasympathetic ganglia form the paravertebral chain", correct: false },
    ],
    explanation: "SYMPATHETIC: preganglionic = SHORT + MYELINATED; postganglionic = LONG + UNMYELINATED. Ganglia are FAR from target organ (paravertebral chain or collateral ganglia). PARASYMPATHETIC: preganglionic = LONG + MYELINATED; postganglionic = SHORT + UNMYELINATED. Ganglia are CLOSE TO or WITHIN the target organ (TERMINAL GANGLIA). Sympathetic preganglionic fibers exit T1-L2 (thoracolumbar). Parasympathetic preganglionic fibers exit from the brain (CN III, VII, IX, X) and S2-S4 (craniosacral)."
  },

  {
    id: 85,
    category: "PNS",
    question: "Which of the following effects are produced by SYMPATHETIC activation?",
    answers: [
      { text: "Pupil constriction (miosis), bradycardia, increased digestive secretions, and sphincter relaxation to facilitate elimination", correct: false },
      { text: "Pupil dilation, tachycardia, increased blood flow to skeletal muscles, sphincter contraction, pale skin, dry mouth", correct: true },
      { text: "Increased blood flow to skin and mucous membranes, stimulation of gastrointestinal motility, and slowing of heart rate", correct: false },
      { text: "Decreased alertness and mental arousal, sphincter relaxation throughout the GI tract, and vasodilation in skeletal muscle beds", correct: false },
    ],
    explanation: "SYMPATHETIC (fight-or-flight, stress): PUPIL DILATION (see better), TACHYCARDIA (increased heart rate and force), INCREASED blood flow to SKELETAL MUSCLES, PALE SKIN (reduced blood flow to skin), DRY MOUTH, SPHINCTER CONTRACTION, sweating, bronchodilation. These prepare the body for sudden physical exertion. PARASYMPATHETIC (rest-and-digest): pupil constriction, bradycardia, increased digestion and motility, sphincter relaxation, vasodilation of skin, reduced heart rate."
  },

  {
    id: 86,
    category: "PNS",
    question: "Why do adrenergic (sympathetic) effects last LONGER than cholinergic (parasympathetic) effects after stimulation stops?",
    answers: [
      { text: "Because NA has a markedly higher receptor affinity than ACh, prolonging its receptor binding", correct: false },
      { text: "Because NA is degraded much more slowly by MAO and COMT than ACh is degraded by acetylcholinesterase", correct: true },
      { text: "Because sympathetic nerve fibers release substantially more NT per impulse than parasympathetic fibers", correct: false },
      { text: "Because adrenergic receptors remain in an activated state much longer than muscarinic receptors do", correct: false },
    ],
    explanation: "ACh is rapidly inactivated by ACETYLCHOLINESTERASE → fast, short-lived effects. Noradrenaline/Adrenaline are degraded by two slow enzymes: (1) MAO (Monoamine Oxidase): reuptake into the presynaptic button for degradation; (2) COMT (Catechol-O-Methyltransferase): degrades remaining NT. BOTH are much slower than AChE → adrenergic effects PERSIST longer after sympathetic stimulation ends. This is why stress responses (elevated HR, blood pressure) take longer to calm down than parasympathetic effects."
  },

  {
    id: 87,
    category: "PNS",
    question: "Which brain areas control the ANS?",
    answers: [
      { text: "Only the cerebral cortex exerts top-down voluntary control over all autonomic functions through corticospinal projections", correct: false },
      { text: "Spinal cord (reflexes), hypothalamus (main regulator), limbic system (emotions), and cerebellum (nausea/CV changes)", correct: true },
      { text: "Only the spinal cord regulates the ANS through simple monosynaptic reflex arc circuits at each segmental level", correct: false },
      { text: "The ANS operates as a fully autonomous system with no input, modulation, or override from the central nervous system", correct: false },
    ],
    explanation: "Multiple CNS levels control the ANS: SPINAL CORD: reflex control of cardiovascular, pulmonary, urinary, reproductive and digestive systems. HYPOTHALAMUS: temperature, hunger, thirst — considered the MAIN ANS regulator. LIMBIC SYSTEM: mediates emotional ANS responses (blushing, pallor, fainting, cold sweat, rapid heart rate when frightened). CEREBELLUM: nausea, sweating, cardiovascular changes. The ANS is NOT fully autonomous — it is constantly modulated by higher CNS centers, which is why emotional states affect heart rate, digestion, etc."
  },

  {
    id: 88,
    category: "Nervous System Drugs",
    question: "What is the neurochemical imbalance underlying Parkinson's disease, and why can't dopamine be given directly?",
    answers: [
      { text: "Excess dopamine and deficiency of ACh; dopamine cannot cross the BBB so is given orally as a hormone", correct: false },
      { text: "Deficiency of dopamine → excess of cholinergic activity; dopamine cannot cross the blood-brain barrier", correct: true },
      { text: "Deficiency of serotonin and noradrenaline; serotonin degrades too quickly in plasma to be effective", correct: false },
      { text: "Excess of GABA causing over-inhibition; GABA cannot be blocked selectively enough without major side effects", correct: false },
    ],
    explanation: "Parkinson's disease is caused by degeneration of dopaminergic neurons in the basal ganglia → DOPAMINE DEFICIENCY → relative excess of cholinergic activity → symptoms: shaking, rigidity, slowness of movement (bradykinesia), difficulty walking. Dopamine CANNOT CROSS THE BBB, so giving it directly is ineffective. L-DOPA (levodopa), its precursor, crosses the BBB and is then converted to dopamine in the brain. MAO-B inhibitors (e.g., selegiline) and COMT inhibitors (e.g., entacapone) slow the breakdown of dopamine/L-DOPA to prolong its effect."
  },

  {
    id: 89,
    category: "Nervous System Drugs",
    question: "What is the cause of depression according to this course, and what is the main mechanism of antidepressant drugs?",
    answers: [
      { text: "Excess dopamine and serotonin cause depression; antidepressants block D2 dopamine receptors", correct: false },
      { text: "Deficiency/imbalance of 5-HT and NA; antidepressants inhibit their reuptake (SSRIs/SNRIs) or block MAO enzymes", correct: true },
      { text: "Excess GABA over-inhibits the brain; antidepressants work by blocking GABA-A receptor activity", correct: false },
      { text: "Deficiency of acetylcholine; antidepressants are anticholinesterases that increase ACh availability", correct: false },
    ],
    explanation: "Depression is caused by a DEFICIENCY/IMBALANCE of 5-HT (serotonin) and NA (noradrenaline). Main drug classes: (1) SSRIs (fluoxetine/Prozac®, citalopram, sertraline): block serotonin reuptake → more 5-HT in synapse; (2) SSNRIs (duloxetine, venlafaxine): block both 5-HT and NA reuptake; (3) TCAs (amitriptyline, imipramine): block NA and 5-HT reuptake (less selective, more side effects); (4) MAO-A inhibitors: prevent breakdown of NA and 5-HT. All take ~2 weeks to produce effect."
  },

  {
    id: 90,
    category: "Nervous System Drugs",
    question: "What is the difference between anxiety and stress?",
    answers: [
      { text: "Stress is always pathological; anxiety is a healthy, normal preparatory emotional response", correct: false },
      { text: "Stress = normal warning sign of imminent danger; anxiety = stress persisting after the stressor disappears", correct: true },
      { text: "Stress and anxiety are clinically identical conditions that differ only in colloquial naming", correct: false },
      { text: "Anxiety is caused by dopamine excess in limbic circuits; stress by elevated cortisol only", correct: false },
    ],
    explanation: "STRESS: a normal feeling of physical/emotional tension — a warning sign that prepares the organism to deal with a threat. ANXIETY: stress that CONTINUES after the stressful factor has disappeared. Anxiety is normal before certain situations (exams, public speaking) — it becomes PATHOLOGICAL only when it exceeds the person's adaptive capacity. Treatment: relaxation techniques + psychological assistance + anxiolytics (benzodiazepines) ± antidepressants if needed."
  },

  {
    id: 91,
    category: "Nervous System Drugs",
    question: "Benzodiazepines are the 1st-choice anxiolytics. What is their mechanism of action?",
    answers: [
  { text: "They enhance GABA action → hyperpolarization → CNS depression producing anxiolytic, hypnotic, and muscle-relaxant effects", correct: true },
  { text: "They block D2 receptors → reduced dopamine signaling → CNS depression producing antipsychotic and sedative effects", correct: false },
  { text: "They inhibit serotonin reuptake → increased 5-HT → CNS stimulation producing anxiolytic and antidepressant effects", correct: false },
  { text: "They block Na⁺ channels → reduced neuronal firing → CNS depression producing anticonvulsant and muscle-relaxant effects", correct: false },
],
    explanation: "Benzodiazepines (BZDs) ENHANCE GABA action at GABA-A receptors → increased Cl⁻ influx → hyperpolarization → CNS depression. This produces: ANXIOLYTIC (anxiety reduction), HYPNOTIC (sleep induction), MUSCLE RELAXANT, and ANTICONVULSANT effects. Short-acting BZDs (alprazolam, midazolam) are preferred for insomnia; long-acting BZDs (diazepam/Valium®, flurazepam) for anxiety. Key ADRs: sedation, ataxia, motor incoordination, amnesia, dependence. Interactions: alcohol, opioids, antihistamines all enhance CNS depression."
  },

  {
    id: 92,
    category: "Nervous System Drugs",
    question: "How do antiepileptic drugs reduce neuronal excitability?",
    answers: [
      { text: "By enhancing dopamine release in the basal ganglia to suppress abnormal neuronal firing", correct: false },
      { text: "By blocking Na⁺ channels (reducing excitability) and/or enhancing GABA action (increasing neuronal inhibition)", correct: true },
      { text: "By blocking presynaptic Ca²⁺ channels at the neuromuscular junction to prevent excessive firing", correct: false },
      { text: "By inhibiting acetylcholinesterase to reduce ACh accumulation and excessive synaptic stimulation", correct: false },
    ],
    explanation: "Antiepileptics work via two main mechanisms: (1) Na⁺ CHANNEL BLOCKERS (phenytoin, carbamazepine): prevent repetitive neuronal firing by stabilizing Na⁺ channels in their inactivated state → inhibit neuronal excitability; (2) GABA ENHANCERS (valproic acid, phenobarbital, benzodiazepines): increase inhibitory GABAergic transmission → hyperpolarization → neuronal inhibition. Epilepsy is caused by excessive and abnormal activity of brain neurons — both mechanisms reduce this hyperexcitability."
  },

  {
    id: 93,
    category: "Nervous System Drugs",
    question: "What is the mechanism of antipsychotic drugs, and which neurotransmitter system is primarily targeted?",
    answers: [
      { text: "They enhance serotonin reuptake and simultaneously block GABA receptors to reduce psychomotor agitation", correct: false },
      { text: "They block D2 dopamine receptors; atypical antipsychotics also target serotonin receptors for negative symptoms", correct: true },
      { text: "They increase dopamine release in the prefrontal cortex to restore cognitive and executive functions", correct: false },
      { text: "They block nicotinic ACh receptors at the neuromuscular junction to reduce motor symptoms", correct: false },
    ],
    explanation: "Antipsychotics primarily BLOCK D2 DOPAMINE RECEPTORS — this produces the therapeutic (antipsychotic) effect. CONVENTIONAL (typical) antipsychotics (chlorpromazine, haloperidol): potent D2 blockers → high risk of extrapyramidal effects (pharmacological parkinsonism). ATYPICAL antipsychotics (clozapine, olanzapine, risperidone): block D2 + serotonin receptors → better for negative symptoms (which result from ↓ dopaminergic + ↑ serotoninergic activity) + fewer extrapyramidal side effects. Important for physio: D2 blockade can decrease reflexes and cause pharmacological parkinsonism."
  },

  {
    id: 94,
    category: "Nervous System Drugs",
    question: "Regarding sympathomimetic (adrenergic) drugs — what are their mechanisms and a clinical example?",
    answers: [
      { text: "They block adrenergic receptors competitively — sharing their primary mechanism with beta-blockers and alpha-blockers equally", correct: false },
      { text: "They mimic sympathetic stimulation: directly (stimulate adrenergic receptors) or indirectly (increase NA release, e.g. amphetamines)", correct: true },
      { text: "They raise parasympathetic tone by directly stimulating muscarinic receptors in smooth muscle and cardiac tissue", correct: false },
      { text: "They reversibly block voltage-gated Na⁺ channels in peripheral sensory axons, preventing pain signal conduction to the CNS", correct: false },
    ],
    explanation: "SYMPATHOMIMETIC drugs reproduce effects of sympathetic NS stimulation via: (1) DIRECT: stimulate adrenergic receptors (phenylephrine, oxymetazoline, tetrazoline → α1 agonists → vasoconstriction → nasal decongestants); (2) INDIRECT: increase NA release (amphetamines); (3) MIXED: ephedrine, pseudoephedrine (nasal decongestants). For physiotherapists: these drugs affect the CV system → CHECK VITAL SIGNS (BP, HR, respiratory rate). Exercise response may be altered."
  },

  {
    id: 95,
    category: "Nervous System Drugs",
    question: "β-blockers (sympatholytic drugs) are used for which conditions, and what is their key precaution for physiotherapists?",
    answers: [
      { text: "Used for angina, arrhythmias, and hypertension; precaution: orthostatic hypotension — avoid rapid postural changes", correct: true },
      { text: "Used for Parkinson's and epilepsy; precaution: increased seizure risk during physiotherapy exercise sessions", correct: false },
      { text: "Used for anxiety and depression; precaution: drugs cause excessive sweating and tachycardia during exercise", correct: false },
      { text: "Used exclusively for glaucoma treatment only; no specific precautions needed in physiotherapy practice", correct: false },
    ],
    explanation: "β-BLOCKERS (propranolol, carvedilol, atenolol) block β-adrenergic receptors → used for ANGINA PECTORIS, ARRHYTHMIAS, and HYPERTENSION. α-BLOCKERS → hypertension and migraines. Physiotherapy precautions: (1) MONITOR BLOOD PRESSURE; (2) AVOID RAPID POSTURAL CHANGES — orthostatic hypotension risk (disorientation, loss of balance, falls); (3) Exercise response may be altered due to bronchoconstriction and peripheral vasoconstriction. Must be withdrawn PROGRESSIVELY (abrupt cessation can cause rebound hypertension or angina)."
  },

  {
    id: 96,
    category: "Nervous System Drugs",
    question: "Parasympathomimetic (cholinergic) drugs enhance ACh effects. What are their clinical uses?",
    answers: [
      { text: "Muscarinic agonists for hypertension; anticholinesterases for Parkinson's disease treatment", correct: false },
      { text: "Pilocarpine (muscarinic agonist) for glaucoma; anticholinesterases (donepezil, rivastigmine) for Alzheimer's", correct: true },
      { text: "Muscarinic agonists for asthma bronchodilation; anticholinesterases for intestinal spasm relief", correct: false },
      { text: "Cholinergic drugs used exclusively as nasal decongestants and to treat cardiac arrhythmias", correct: false },
    ],
    explanation: "PARASYMPATHOMIMETIC drugs reproduce parasympathetic NS effects: DIRECT (stimulate muscarinic receptors): pilocarpine → pupil constriction + ciliary muscle contraction → reduces intraocular pressure → used for GLAUCOMA. INDIRECT (anticholinesterases — inhibit AChE → more ACh at synapse): neostigmine (myasthenia gravis), donepezil and rivastigmine (ALZHEIMER's disease — improve cholinergic transmission in the brain). Physio precaution: may cause muscle weakness; ophthalmic drugs → myopia/reduced night vision → risk of falls."
  },

  {
    id: 97,
    category: "Nervous System Drugs",
    question: "Parasympatholytic (anticholinergic) drugs BLOCK muscarinic receptors. Match the drug to its clinical use:",
   answers: [
  { text: "Scopolamine → intestinal spasms; ipratropium/tiotropium → asthma (bronchodilation); biperiden → Parkinson's", correct: true },
  { text: "Scopolamine → asthma (bronchodilation); ipratropium/tiotropium → Parkinson's; biperiden → intestinal spasms", correct: false },
  { text: "Scopolamine → Parkinson's; ipratropium/tiotropium → intestinal spasms; biperiden → asthma (bronchodilation)", correct: false },
  { text: "Scopolamine → glaucoma (miosis); ipratropium/tiotropium → Parkinson's; biperiden → asthma (bronchodilation)", correct: false },
],
    explanation: "ANTICHOLINERGIC drugs block muscarinic receptors: SCOPOLAMINE/HYOSCINE → blocks muscarinic receptors in GI smooth muscle → reduces motility → used for INTESTINAL SPASMS. IPRATROPIUM/TIOTROPIUM BROMIDE → blocks muscarinic receptors in airways → bronchodilation → used for ASTHMA/COPD. BIPERIDEN/TRIHEXYPHENIDYL → blocks cholinergic transmission → reduces excess ACh activity in Parkinson's (remember: Parkinson's = dopamine deficiency + excess cholinergic activity). Physio precaution for ALL anticholinergics: elderly more sensitive → confusion, disorientation; drowsiness + blurred vision → fall prevention needed."
  },

  {
    id: 98,
    category: "Sensory Physiology",
    question: "Somatic sensory pathways always involve how many neurons, and what is decussation?",
    answers: [
  { text: "At least 3 neurons (periphery → spinal cord/brainstem → thalamus → cortex); decussation = crossing to the opposite brain side", correct: true },
  { text: "Exactly 2 neurons (periphery → thalamus → cortex directly); decussation = splitting into bilateral pathways at the spinal cord", correct: false },
  { text: "Exactly 1 neuron (periphery → cortex directly); decussation = branching of one axon to both hemispheres simultaneously", correct: false },
  { text: "At least 3 neurons (periphery → cerebellum → thalamus → cortex); decussation = ipsilateral projection to the same brain side", correct: false },
],
    explanation: "Somatic sensory pathways always pass through AT LEAST 3 NEURON STATIONS: (1) PRIMARY neuron: periphery → spinal cord or brainstem; (2) SECONDARY neuron: spinal cord/brainstem → thalamus; (3) TERTIARY neuron: thalamus → cerebral cortex (sensory areas). Most sensory pathways are CROSSED (DECUSSATION): each side of the brain registers sensations from the OPPOSITE side of the body. This is why a stroke in the LEFT cortex causes sensory loss on the RIGHT side of the body."
  },

  {
    id: 99,
    category: "Sensory Physiology",
    question: "What is receptor ADAPTATION, and which receptors do NOT adapt?",
    answers: [
      { text: "Adaptation = permanent sensitization to a continuous stimulus; nociceptors are the only non-adapting receptors", correct: false },
      { text: "Adaptation = decreased AP magnitude over time with continuous stimulation; proprioceptors do NOT adapt", correct: true },
      { text: "Adaptation = a receptor changing the type of stimulus it responds to after prolonged stimulation", correct: false },
      { text: "Adaptation = complete and permanent loss of receptor function; photoreceptors are the only exception", correct: false },
    ],
    explanation: "ADAPTATION: the action potential magnitude (and sensation intensity) DECREASES over time with a CONTINUOUS stimulus — e.g., you stop feeling your clothes after putting them on. TOUCH receptors adapt QUICKLY. In contrast, PROPRIOCEPTORS (in muscles, tendons, joints) do NOT adapt — they continuously send impulses to the brain about body position and movement, which is essential for maintaining posture and coordination. This distinction is clinically important: proprioceptive training relies on these non-adapting receptors."
  },

  {
    id: 100,
    category: "Sensory Physiology",
    question: "Classify the following receptors by location: exteroceptors, interoceptors/visceroceptors, and proprioceptors:",
    answers: [
      { text: "Exteroceptors = external body surface; interoceptors = viscera (unconscious); proprioceptors = muscles, tendons, joints", correct: true },
      { text: "Exteroceptors = muscles and joints; proprioceptors = external skin surface; interoceptors = blood vessel walls", correct: false },
      { text: "All three receptor location classes are found exclusively within the various layers of the skin", correct: false },
      { text: "Exteroceptors = retina and cochlea; interoceptors = joint capsules and tendons; proprioceptors = skin surface only", correct: false },
    ],
    explanation: "Classification by LOCATION: EXTEROCEPTORS: at/near external body surface → respond to external stimuli (touch, temperature, pain, pressure of skin). INTEROCEPTORS/VISCEROCEPTORS: in blood vessels and internal organs → produce impulses usually NOT consciously perceived (blood pressure, organ distension). PROPRIOCEPTORS: in muscles, tendons, and joints → provide information about body POSITION and JOINT MOVEMENT — crucial for balance, coordination, and physiotherapy rehabilitation."
  },

  {
    id: 101,
    category: "Sensory Physiology",
    question: "Match the following enclosed nerve endings (mechanoreceptors) to their location and function:",
   answers: [
  { text: "Pacinian = dermis/pressure; Meissner = epidermis/touch; Muscle spindle = muscle length; Golgi tendon = muscle tension", correct: true },
  { text: "Pacinian = epidermis/touch; Meissner = dermis/pressure; Muscle spindle = tendon/tension; Golgi tendon = muscle/length", correct: false },
  { text: "Pacinian = dermis/touch; Meissner = epidermis/pressure; Muscle spindle = joint/position; Golgi tendon = skin/vibration", correct: false },
  { text: "Pacinian = muscle/length; Meissner = tendon/tension; Muscle spindle = epidermis/touch; Golgi tendon = dermis/pressure", correct: false },
],
    explanation: "ENCLOSED nerve endings (mechanoreceptors, have connective tissue capsule): PACINIAN corpuscle: dermis → PRESSURE. MEISSNER corpuscle: epidermis → TOUCH. Krausse end bulbs: mucous membranes → touch. Ruffini endings: dermis → touch. MUSCLE SPINDLE: skeletal muscle → provides information about MUSCLE LENGTH (stretch reflex). GOLGI TENDON ORGAN: tendon → provides information about TENSION the muscle exerts on tendons. Both muscle spindles and Golgi tendon organs are key proprioceptors for physiotherapy assessment and rehabilitation."
  },

  {
    id: 102,
    category: "Sensory Physiology",
    question: "What is the difference between the utricle/saccule and the semicircular canals in balance?",
    answers: [
      { text: "Utricle/saccule detect LINEAR acceleration (horizontal/vertical); semicircular canals detect ROTATIONAL acceleration", correct: true },
      { text: "Utricle/saccule detect rotational and angular acceleration; semicircular canals detect linear speed changes only", correct: false },
      { text: "Utricle/saccule are part of the cochlea and function exclusively in sound frequency detection and localization", correct: false },
      { text: "Both structures detect the same type of acceleration but respond to motions in different anatomical planes", correct: false },
    ],
    explanation: "Both structures are part of the VESTIBULAR APPARATUS (inner ear). They work by head movement → fluid movement → bending of hair cell cilia → action potentials. UTRICLE and SACCULE: detect LINEAR ACCELERATION — changes in speed when moving horizontally or vertically (e.g., driving, jumping rope, elevator). SEMICIRCULAR CANALS (3 canals in 3 planes): detect ROTATIONAL/ANGULAR ACCELERATION — turning the head, spinning around, acrobatics. Both contribute to the sense of balance. Innervated by CN VIII (vestibulocochlear nerve)."
  },

  {
    id: 103,
    category: "Sensory Physiology",
    question: "Osmoreceptors are specialized receptors. Where are they located and what do they detect?",
    answers: [
      { text: "Located in the kidneys; detect changes in blood glucose and trigger antidiuretic hormone release", correct: false },
      { text: "Located in the hypothalamus; detect extracellular fluid osmolarity and stimulate the thirst centre", correct: true },
      { text: "Located in the carotid body; detect arterial blood oxygen partial pressure changes", correct: false },
      { text: "Located in the skin; detect changes in environmental humidity and ambient temperature", correct: false },
    ],
    explanation: "OSMORECEPTORS are specialized receptors located in the HYPOTHALAMUS. They detect osmolarity (concentration of solutes) in EXTRACELLULAR BODY FLUIDS. When osmolarity rises (dehydration, excess solutes): osmoreceptors are activated → stimulate the HYPOTHALAMIC THIRST CENTRE → sensation of thirst → drinking behavior → ADH (antidiuretic hormone) release → kidneys retain water → osmolarity is restored. This is a key homeostatic mechanism linking sensory physiology to fluid regulation."
  },

  {
    id: 104,
    category: "Sensory Physiology",
    question: "What is the KEY distinction between acute and chronic pain?",
    answers: [
      { text: "Acute pain lasts more than 6 months and is poorly localized; chronic pain lasts less than 6 months and resolves with rest", correct: false },
      { text: "Acute: <6 months, fast onset (0.1 s), tissue injury related, heals with cause; chronic: >6 months, slow onset, poorly localized", correct: true },
      { text: "Acute and chronic pain are physiologically identical processes — the only meaningful clinical difference is which organ is affected", correct: false },
      { text: "Acute pain is always visceral and diffuse with poor localization; chronic pain is always somatic, sharp, and precisely localized", correct: false },
    ],
    explanation: "ACUTE PAIN: lasts <6 months, perceived 0.1 s after stimulus (fast), associated with tissue injury, well localized, disappears with healing, described as intense/stabbing/electric (e.g., finger prick, burn). CHRONIC PAIN: lasts >6 months, appears 1+ second after injury, poorly localized, intensity increases slowly, persists up to 1 month even after the acute injury heals, involves deep tissue destruction, described as pulsatile/nauseous. Understanding this distinction is fundamental for physiotherapy pain management."
  },

  {
    id: 105,
    category: "Sensory Physiology",
    question: "What is neuropathic pain, and how does it differ from nociceptive pain?",
    answers: [
      { text: "Neuropathic pain is always acute and fully reversible; nociceptive pain is always chronic and associated with nerve damage", correct: false },
      { text: "Neuropathic = abnormal pain from NS disease/injury (usually chronic); nociceptive = normal protective pain from tissue damage", correct: true },
      { text: "Both pain types arise from the exact same peripheral sensitization and central sensitization mechanisms in all cases", correct: false },
      { text: "Nociceptive pain is exclusively visceral and originates only from internal organ distension or ischemia", correct: false },
    ],
    explanation: "NOCICEPTIVE PAIN: NORMAL pain — undamaged nerves transmit pain signals from injured somatic or visceral tissues. PROTECTIVE function, transient. Subtypes: SOMATIC (skin, muscle, joints, ligaments, bones — well localized) and VISCERAL (internal organs — vague, diffuse, poorly localized, may cause REFERRED PAIN). NEUROPATHIC PAIN: PATHOLOGICAL pain from disease/injury to the nervous system itself. Usually CHRONIC. Examples: trigeminal neuralgia, multiple sclerosis pain, spinal cord injury pain. Types: CENTRAL (CNS dysfunction) or PERIPHERAL (PNS dysfunction)."
  },

  {
    id: 106,
    category: "Sensory Physiology",
    question: "What is referred pain?",
    answers: [
      { text: "Pain that intensifies proportionally each time the patient reports it to a clinician", correct: false },
      { text: "Pain perceived at a site distant from its actual origin — typical of visceral and ischemic conditions", correct: true },
      { text: "Pain that presents symmetrically and simultaneously on both sides of the body at once", correct: false },
      { text: "Pain that occurs only when a patient verbally describes or reports their symptoms to others", correct: false },
    ],
    explanation: "REFERRED PAIN: pain perceived in a location DISTANT from its actual origin. This occurs because visceral afferent neurons enter the spinal cord at the same level as somatic neurons from another body region — the brain 'misinterprets' the origin. Classic clinical examples: cardiac ischemia (heart attack) → pain felt in left arm, jaw, shoulder; kidney stones → pain in groin; liver/gallbladder disease → right shoulder pain; appendicitis → starts around umbilicus, then right lower quadrant. Vital concept for physiotherapy differential diagnosis."
  },

  {
    id: 107,
    category: "Sensory Physiology",
    question: "The body's analgesic system releases endogenous substances that reduce pain. What are they and what triggers their release?",
    answers: [
      { text: "Prostaglandins and histamine, both released in response to direct tissue damage and inflammation", correct: false },
      { text: "Enkephalins, endorphins, and serotonin — released by physical exercise, positive emotions, and good mood", correct: true },
      { text: "GABA and glycine, released primarily during sleep and deep relaxation states", correct: false },
      { text: "Dopamine and noradrenaline, released exclusively in response to severe or life-threatening injury", correct: false },
    ],
    explanation: "The body's intrinsic ANALGESIC SYSTEM produces ENDOGENOUS OPIOIDS: ENKEPHALINS and ENDORPHINS (bind opioid receptors → reduce pain transmission), and SEROTONIN (also part of descending pain modulation). Released by: PHYSICAL EXERCISE (explains 'runner's high' and exercise-induced analgesia), POSITIVE EMOTIONS, and GOOD MOOD. This is the physiological basis for using exercise, physiotherapy, and psychological wellbeing as pain management strategies — directly relevant to physiotherapy practice."
  },

  {
    id: 108,
    category: "Sensory Drugs",
    question: "Define the following sensory disorder terms: hypoalgesia, allodynia, and hyperalgesia:",
    answers: [
      { text: "Hypoalgesia = decreased pain sensitivity; allodynia = pain from normally non-painful stimuli; hyperalgesia = exaggerated pain", correct: true },
      { text: "Hypoalgesia = total loss of all bodily sensation; allodynia = grossly exaggerated response to pain; hyperalgesia = decreased pain sensitivity", correct: false },
      { text: "All three terms describe the same underlying condition — a complete and irreversible loss of all pain sensation", correct: false },
      { text: "Hypoalgesia = increased pain sensitivity to stimuli; allodynia = decreased pain; hyperalgesia = normal pain response", correct: false },
    ],
    explanation: "Key sensory disorder terminology: HYPESTHESIA: decreased sensitivity (general). ANESTHESIA: total loss of ALL sensation. HYPOALGESIA: decreased sensitivity specifically to PAIN. ANALGESIA: complete loss of pain sensation. HYPERESTHESIA: exaggerated TACTILE sensitivity. HYPERALGESIA: exaggerated sensitivity to PAIN (even normal stimuli cause excessive pain). ALLODYNIA: pain produced by a stimulus that NORMALLY does NOT cause pain (e.g., light touch causing pain in a sunburn or nerve injury). These terms are essential for physiotherapy clinical assessment documentation."
  },

  {
    id: 109,
    category: "Sensory Drugs",
    question: "What is the mechanism of NSAIDs (non-steroidal anti-inflammatory drugs), and what are their main adverse effects?",
    answers: [
  { text: "They inhibit COX enzymes → reduce prostaglandin synthesis → analgesic, antipyretic, anti-inflammatory, antiplatelet effects; main ADR: GI damage", correct: true },
  { text: "They block mu-opioid receptors → reduce pain transmission → analgesic, sedative effects; main ADR: respiratory depression, constipation", correct: false },
  { text: "They enhance GABA-A receptors → hyperpolarization → anxiolytic, sedative, muscle-relaxant effects; main ADR: CNS depression, dependence", correct: false },
  { text: "They block voltage-gated Na⁺ channels → prevent AP conduction → analgesic, local anesthetic effects; main ADR: cardiac arrhythmias", correct: false },
],
    explanation: "NSAIDs inhibit COX (cyclooxygenase) enzymes → ↓ prostaglandin synthesis. COX-1 inhibition → GI mucosal protection ↓, platelet aggregation ↓ → GI ADRs (the main problem: heartburn, ulcers, bleeding). COX-2 inhibition → ANTI-INFLAMMATORY effect (desired). Main ADRs: GI damage (heartburn, gastritis, ulcers, bleeding), BLEEDING, renal failure. Omeprazole (PPI) only needed in HIGH-RISK patients. Never combine 2+ NSAIDs (increases toxicity without extra benefit). For physio: NSAIDs interact with oral anticoagulants → increased bleeding/bruising risk during sessions."
  },

  {
    id: 110,
    category: "Sensory Drugs",
    question: "Paracetamol (acetaminophen) vs. ibuprofen: what is the key difference in their pharmacological profiles?",
    answers: [
      { text: "Paracetamol inhibits both COX-1 and COX-2 peripherally, making it anti-inflammatory; ibuprofen acts only centrally with no GI risk", correct: false },
      { text: "Paracetamol = analgesic + antipyretic, no GI damage; ibuprofen = full NSAID with GI risk", correct: true },
      { text: "Both drugs share identical COX-inhibition mechanisms and produce the same gastrointestinal and hepatic adverse effect profiles", correct: false },
      { text: "Paracetamol is a weak mu-opioid receptor agonist with central analgesic action; ibuprofen is a reversible topical local anesthetic", correct: false },
    ],
    explanation: "PARACETAMOL/ACETAMINOPHEN: analgesic + antipyretic (most used). NOT anti-inflammatory. Inhibits prostaglandin synthesis in the CNS (good for headaches). NO GI damage (safe on stomach). ADR: HEPATOTOXICITY → overdose → liver necrosis (can be fatal). ANTIDOTE: N-acetylcysteine. Max dose: 4g/day. CONTRAINDICATED in children/teenagers as anti-inflammatory. IBUPROFEN: analgesic + antipyretic + ANTI-INFLAMMATORY (full NSAID). Better GI profile than aspirin. For physio: prefer paracetamol over NSAIDs when possible — similar analgesia with fewer ADRs. NEVER use aspirin in children (Reye's syndrome risk)."
  },

  {
    id: 111,
    category: "Sensory Drugs",
    question: "What is the WHO analgesic pain ladder and what are the three steps?",
    answers: [
      { text: "Step 1: strong opioids (morphine) for immediate efficacy; Step 2: NSAIDs for inflammation; Step 3: local anesthetics for neuropathic pain", correct: false },
      { text: "Step 1: non-opioids (NSAIDs/paracetamol); Step 2: mild opioids (codeine, tramadol); Step 3: strong opioids (morphine, fentanyl)", correct: true },
      { text: "Step 1: physiotherapy and physical interventions as first line; Step 2: surgical intervention; Step 3: palliative and hospice care", correct: false },
      { text: "Step 1: tricyclic antidepressants for central sensitization; Step 2: anticonvulsants for neuropathic pain; Step 3: strong opioids only", correct: false },
    ],
    explanation: "The WHO PAIN MANAGEMENT LADDER guides analgesic prescribing by pain severity: STEP 1 (mild pain): NON-OPIOIDS — NSAIDs (ibuprofen, aspirin) + paracetamol ± adjuvants. STEP 2 (moderate pain): MILD OPIOIDS — codeine, dihydrocodeine, tramadol ± non-opioids. STEP 3 (severe/cancer pain): STRONG OPIOIDS — morphine, buprenorphine, fentanyl, methadone ± non-opioids. Key principles: individualize treatment, prefer oral administration, administer regularly (not just on demand), prevent side effects. Analgesics allow more active physiotherapy rehabilitation when at maximum efficiency."
  },

  {
    id: 112,
    category: "Sensory Drugs",
    question: "What are the main adverse effects of opioids, and what is the antidote for opioid overdose?",
    answers: [
      { text: "Main ADR: hepatotoxicity and liver failure; antidote is N-acetylcysteine given intravenously", correct: false },
      { text: "Main ADRs: nausea/vomiting, constipation, respiratory depression, sedation; overdose antidote = IV Naloxone", correct: true },
      { text: "Main ADRs: gastrointestinal bleeding and acute renal failure; antidote is omeprazole (PPI)", correct: false },
      { text: "Main ADRs: cardiac arrhythmias and severe hypertension; antidote is atropine given intravenously", correct: false },
    ],
    explanation: "OPIOID ADRs: nausea/vomiting, CONSTIPATION, RESPIRATORY DEPRESSION (most dangerous — potentially fatal), dry mouth, sedation/confusion. OVERDOSE signs: respiratory depression, excessive sedation, MIOSIS (pupil constriction), hypotension → WARN THE DOCTOR. ANTIDOTE: IV NALOXONE (opioid receptor antagonist). Also important: ADDICTION (uncontrolled need for more), TOLERANCE (need increased dose for same effect), DEPENDENCE (withdrawal symptoms on abrupt cessation: sweating, tremors, diarrhea, insomnia, anxiety). For physio: opioids cause respiratory depression → decreased respiratory response to exercise during rehabilitation."
  },

  {
    id: 113,
    category: "Endocrine System",
    question: "What is the key structural difference between endocrine and exocrine glands?",
    answers: [
      { text: "Endocrine glands secrete hormones into the bloodstream without ducts; exocrine glands use ducts to deliver secretions to a specific site", correct: true },
      { text: "Endocrine glands require ducts to transport their hormones into the bloodstream for wide systemic distribution to target organs", correct: false },
      { text: "Exocrine glands secrete hormones directly into the bloodstream and target distant organs; endocrine glands use ducts to direct secretions locally", correct: false },
      { text: "Endocrine glands produce digestive enzymes delivered via ducts to the gut lumen; exocrine glands release hormones into the general circulation", correct: false },
    ],
    explanation: "ENDOCRINE (ductless) glands release hormones directly into the bloodstream — examples: pituitary, thyroid, parathyroid. EXOCRINE glands secrete substances through DUCTS to the site of action — examples: salivary glands, sweat glands. MIXED glands do both: the pancreas has an endocrine portion (islets of Langerhans → insulin/glucagon into blood) and an exocrine portion (digestive enzymes via pancreatic duct)."
  },

  {
    id: 114,
    category: "Endocrine System",
    question: "Compared to the nervous system, endocrine system effects are:",
    answers: [
      { text: "Slower in onset (seconds to days) but longer lasting; target cells can be anywhere in the body", correct: true },
      { text: "Faster in onset (milliseconds) and longer lasting; target cells are limited to muscles and glands only", correct: false },
      { text: "Slower in onset and shorter lasting; hormones are degraded at the synapse before reaching distant targets", correct: false },
      { text: "Identical in speed to the nervous system but more diffuse in their distribution to target cells", correct: false },
    ],
    explanation: "Key comparison: ENDOCRINE system — hormones travel via blood, effects appear slowly (seconds to hours to days) but LAST A LONG TIME; target cells can be ANYWHERE in the body. NERVOUS system — nerve impulses are FAST (milliseconds) but SHORT-LIVED; target cells are mostly muscles and glands close to the release site. Adrenaline is the classic example of a molecule that can act as both a hormone (adrenal medulla → bloodstream) and a neurotransmitter (sympathetic synapse)."
  },

  {
    id: 115,
    category: "Endocrine System",
    question: "Steroid hormones are lipid-soluble. How does this affect their transport and mechanism of action compared to non-steroid hormones?",
    answers: [
      { text: "Steroids travel bound to plasma proteins (longer half-life) and act on intracellular receptors; non-steroids travel free and bind membrane receptors using second messengers", correct: true },
      { text: "Steroids travel freely in plasma (shorter half-life) and bind directly to membrane receptors; non-steroids bind albumin carrier proteins and act via intracellular nuclear receptors", correct: false },
      { text: "Both steroid and non-steroid hormones bind to plasma carrier proteins and then act exclusively on nuclear receptors inside the target cell", correct: false },
      { text: "Steroids and non-steroids both travel freely in plasma without carrier proteins, differing only in the speed at which they activate second messenger cascades", correct: false },
    ],
    explanation: "STEROID hormones (sex hormones, cortisol, aldosterone): LIPID-SOLUBLE → travel in plasma BOUND to carrier proteins (albumin, globulins) → longer half-life (hours–days). Because they are lipid-soluble, they CROSS THE PLASMA MEMBRANE and bind intracellular/nuclear receptors → SLOW response. NON-STEROID hormones (peptides, catecholamines): WATER-SOLUBLE → travel FREE in plasma → short half-life (1–30 min). They bind MEMBRANE RECEPTORS and use SECOND MESSENGERS → FASTER response with signal amplification."
  },

  {
    id: 116,
    category: "Endocrine System",
    question: "What is the difference between paracrine and autocrine hormones?",
    answers: [
      { text: "Paracrine hormones act on nearby cells in the same tissue; autocrine hormones act on the very cell that secreted them", correct: true },
      { text: "Paracrine hormones act on the secretory cell itself; autocrine hormones target cells in distant organs via the bloodstream", correct: false },
      { text: "Both paracrine and autocrine hormones enter the bloodstream to reach their target cells throughout the body", correct: false },
      { text: "Autocrine hormones regulate nearby cells in the same tissue; paracrine hormones feed back on the secretory cell", correct: false },
    ],
    explanation: "Classic endocrine hormones travel through the blood to DISTANT targets. But some have LOCAL effects: PARACRINE hormones act on NEARBY CELLS within the same tissue (not the secretory cell itself). AUTOCRINE hormones act on the SAME CELL that secreted them — a form of self-regulation. NEUROHORMONES are a third variant: released by neurons into the blood rather than into a synapse. All three expand the traditional 'gland → blood → distant target' concept."
  },

  {
    id: 117,
    category: "Endocrine System",
    question: "Hormone secretion is primarily regulated by which type of feedback mechanism?",
    answers: [
      { text: "Primarily negative feedback, where the hormonal effect inhibits further secretion from the gland", correct: true },
      { text: "Primarily positive feedback, where rising hormone levels stimulate even more hormone release continuously", correct: false },
      { text: "Exclusively circadian rhythms, with no feedback from the hormone's own effects on the gland", correct: false },
      { text: "Both negative and positive feedback occur equally and interchangeably in all endocrine axes", correct: false },
    ],
    explanation: "Hormone secretion is primarily controlled by NEGATIVE FEEDBACK: the hormone's own effect suppresses further release from the gland, keeping levels within a set range. POSITIVE FEEDBACK does occur but is the exception (e.g., oxytocin during labor). Many hormones also follow CIRCADIAN RHYTHMS (e.g., GH peaks during sleep; cortisol peaks in the morning). Once hormones have acted, they are metabolically degraded and excreted in urine or bile."
  },

  {
    id: 118,
    category: "Endocrine System",
    question: "What connects the hypothalamus to the adenohypophysis, and why is this route important?",
    answers: [
      { text: "A portal capillary system (double capillary network): hypothalamic neurohormones reach the adenohypophysis via blood before entering general circulation", correct: true },
      { text: "Direct axonal projections from hypothalamic neurons that form synapses on adenohypophysis secretory cells and release neurohormones into the gland tissue", correct: false },
      { text: "The infundibulum (pituitary stalk) carries releasing hormones as electrical nerve impulses directly from hypothalamic nuclei to adenohypophysis cells", correct: false },
      { text: "A single capillary network in which hypothalamic hormones first enter the general bloodstream and then re-enter the pituitary at random via arterial supply", correct: false },
    ],
    explanation: "The hypothalamus controls the adenohypophysis via a PORTAL SYSTEM (double capillary network: capillaries → portal vein → capillaries): hypothalamic releasing/inhibiting hormones are secreted into portal blood and reach the adenohypophysis BEFORE entering general circulation — allowing precise, high-concentration control with very small hormone amounts. The NEUROHYPOPHYSIS is different: it is directly innervated by hypothalamic axons that store and release ADH and oxytocin (produced in the hypothalamus). The INFUNDIBULUM is the physical stalk connecting the two structures."
  },

  {
    id: 119,
    category: "Endocrine System",
    question: "Growth hormone (GH) has a paradoxical hyperglycemic effect despite promoting growth. Why?",
    answers: [
      { text: "GH decreases glucose uptake by cells to spare it for neurons, stimulates liver glycogenolysis, and shifts energy source to lipid catabolism", correct: true },
      { text: "GH increases glucose uptake by all cells to fuel protein anabolism, resulting in transient hyperglycemia after meals", correct: false },
      { text: "GH inhibits lipolysis and promotes glucose storage in adipocytes, raising blood glucose as a side effect of fat conservation", correct: false },
      { text: "GH stimulates insulin secretion, which then paradoxically raises blood glucose through hepatic gluconeogenesis", correct: false },
    ],
    explanation: "GH has complex metabolic effects: on CARBOHYDRATES — it is HYPERGLYCEMIC: decreases glucose uptake by cells (reserves glucose for neurons that can only use glucose) and stimulates hepatic glycogenolysis. GH and INSULIN are ANTAGONISTS: both are vital for glucose homeostasis. On LIPIDS — GH is CATABOLIC: shifts energy use from glucose to fat. On PROTEINS — GH is ANABOLIC: stimulates muscle growth (hence its use in doping). Indirect growth effects are mediated by IGF-1 (insulin-like growth factor) produced by the liver, which stimulates cartilage growth. GH secretion peaks during sleep."
  },

  {
    id: 120,
    category: "Endocrine System",
    question: "Prolactin hypersecretion in a non-pregnant woman would cause which combination of effects?",
    answers: [
      { text: "Milk production (galactorrhea), disrupted menstrual cycle, and impotence if it occurs in men", correct: true },
      { text: "Absence of milk production, enhanced FSH and LH secretion, and increased estrogen levels in non-pregnant women", correct: false },
      { text: "Stimulation of uterine contractions, increased oxytocin release, and suppression of GH secretion by the adenohypophysis", correct: false },
      { text: "Accelerated bone growth, increased IGF-1 production, and premature closure of epiphyseal cartilage plates", correct: false },
    ],
    explanation: "PROLACTIN (from lactotrophs of the adenohypophysis) initiates and maintains milk secretion by mammary glands. It also INHIBITS GONADOTROPINS (FSH/LH) → this is why breastfeeding women often have no menstruation (lactational amenorrhea). Suckling stimulates prolactin release. HYPERSECRETION: milk production in non-breastfeeding women (galactorrhea), disrupted menstrual cycle, impotence in men. HYPOSECRETION is clinically irrelevant. Regulation: PIH (prolactin-inhibiting hormone = dopamine) is the dominant control — without it, prolactin is secreted."
  },

  {
    id: 121,
    category: "Endocrine System",
    question: "What is the functional difference between TSH and ACTH as trophic hormones?",
    answers: [
      { text: "TSH maintains the thyroid gland and triggers thyroid hormone secretion (regulated by TRH); ACTH maintains the adrenal cortex and triggers cortisol secretion (regulated by CRH)", correct: true },
      { text: "TSH stimulates the adrenal cortex to produce cortisol and androgens; ACTH stimulates the thyroid follicular cells to produce and secrete T3 and T4", correct: false },
      { text: "Both TSH and ACTH target the gonads — TSH controls testosterone secretion in men while ACTH controls estrogen production in women via the gonads", correct: false },
      { text: "TSH is released directly from the hypothalamus; ACTH is stored and released by the neurohypophysis in response to prolonged physical or psychological stress", correct: false },
    ],
    explanation: "TROPHIC HORMONES from the adenohypophysis stimulate other endocrine glands. TSH (thyroid-stimulating hormone, from thyrotrophs): promotes thyroid growth and stimulates T3/T4 secretion. Regulated by TRH from the hypothalamus. ACTH (adrenocorticotropic hormone, from corticotrophs): promotes adrenal cortex growth and stimulates cortisol (glucocorticoid) secretion. Regulated by CRH. Both are under negative feedback from their target hormones. FSH and LH (gonadotropins, from gonadotrophs) target the gonads — stimulated by GnRH."
  },

  {
    id: 122,
    category: "Endocrine System",
    question: "ADH (vasopressin) and oxytocin are both stored in the neurohypophysis. What is the origin of each and their primary function?",
    answers: [
      { text: "Both are synthesized in the hypothalamus, transported along axons, and released from the neurohypophysis; ADH retains water in kidneys, oxytocin drives uterine contraction and milk ejection", correct: true },
      { text: "Both are synthesized directly by secretory cells within the neurohypophysis itself, then stored and released to act on the kidneys to regulate fluid and electrolyte balance", correct: false },
      { text: "ADH is produced by the adenohypophysis and primarily regulates blood pressure through vasoconstriction; oxytocin is a paracrine hormone acting exclusively on uterine smooth muscle", correct: false },
      { text: "ADH promotes Na⁺ and water excretion by inhibiting renal tubule reabsorption; oxytocin inhibits uterine contractions during gestation to prevent premature labor initiation", correct: false },
    ],
    explanation: "ADH (antidiuretic hormone/vasopressin) and oxytocin are both SYNTHESIZED IN THE HYPOTHALAMUS, transported down axons, and STORED AND RELEASED from the NEUROHYPOPHYSIS. ADH: prevents large urine volume by causing renal tubules to reabsorb water back to blood; also causes vasoconstriction (secondary). Triggered by dehydration (osmoreceptors detect high osmolarity). OXYTOCIN: stimulates uterine contraction during labor (positive feedback: pressure on cervix → more oxytocin → more contractions) and triggers milk EJECTION (collaborating with prolactin which makes the milk)."
  },

  {
    id: 123,
    category: "Endocrine System",
    question: "Calcitonin and PTH are antagonists in calcium homeostasis. Which cell types do they stimulate or inhibit?",
    answers: [
  { text: "Calcitonin: stimulates osteoblasts (bone formation), inhibits osteoclasts → lowers blood Ca; PTH: stimulates osteoclasts (bone resorption), inhibits osteoblasts → raises blood Ca", correct: true },
  { text: "Calcitonin: stimulates osteoclasts (bone resorption), inhibits osteoblasts → raises blood Ca; PTH: stimulates osteoblasts (bone formation), inhibits osteoclasts → lowers blood Ca", correct: false },
  { text: "Calcitonin: stimulates both osteoblasts and osteoclasts equally → no net Ca change; PTH: inhibits both cell types → lowers blood Ca via renal excretion", correct: false },
  { text: "Calcitonin: stimulates osteoclasts (bone formation), inhibits osteoblasts → raises blood Ca; PTH: stimulates osteoblasts (bone resorption), inhibits osteoclasts → lowers blood Ca", correct: false },
],
    explanation: "CALCITONIN (from C/parafollicular cells of thyroid): released when Ca is HIGH → lowers blood calcium. It STIMULATES OSTEOBLASTS (bone formation) and INHIBITS OSTEOCLASTS (bone resorption) → calcium is deposited into bone. Used in osteoporosis treatment. PTH (parathyroid hormone): released when Ca is LOW → raises blood calcium. It STIMULATES OSTEOCLASTS (bone resorption) and INHIBITS OSTEOBLASTS → calcium extracted from bone. PTH also activates vitamin D in the kidney → increases intestinal calcium absorption. Together with vitamin D, calcitonin and PTH maintain calcium homeostasis."
  },

  {
    id: 124,
    category: "Endocrine System",
    question: "Aldosterone from the adrenal cortex regulates blood pressure. What is its mechanism?",
    answers: [
  { text: "Aldosterone increases renal sodium reabsorption → water follows → blood volume and pressure rise; regulated by the renin-angiotensin system, NOT the pituitary", correct: true },
  { text: "Aldosterone increases renal sodium excretion → water lost → blood volume falls; regulated by the renin-angiotensin system → lowers pressure", correct: false },
  { text: "Aldosterone increases renal sodium reabsorption → water follows → blood volume rises; regulated by ACTH from the pituitary, like cortisol", correct: false },
  { text: "Aldosterone decreases renal sodium reabsorption → osmolarity falls → water lost; regulated by ADH from the neurohypophysis", correct: false },
],
    explanation: "ALDOSTERONE (mineralocorticoid from adrenal cortex): increases Na⁺ reabsorption in the kidney. Since Na⁺ reabsorption brings water with it (osmosis), this INCREASES BLOOD VOLUME AND PRESSURE. Na⁺ reabsorption also causes K⁺ secretion into urine. Regulated by the RENIN-ANGIOTENSIN-ALDOSTERONE SYSTEM (RAAS) — NOT by the pituitary/hypothalamus axis (unlike cortisol). This distinguishes aldosterone from glucocorticoids, which ARE regulated via the hypothalamus-pituitary axis (CRH → ACTH → cortisol)."
  },

  {
    id: 125,
    category: "Endocrine System",
    question: "Cortisol (glucocorticoid) has hyperglycemic effects. What are its metabolic actions across carbohydrate, lipid, and protein metabolism?",
    answers: [
      { text: "Carbohydrates: increases gluconeogenesis, inhibits glucose uptake → hyperglycemia. Lipids: catabolic (mobilizes lipids for gluconeogenesis). Proteins: catabolic (breaks down proteins to amino acids for gluconeogenesis)", correct: true },
      { text: "Carbohydrates: increases cellular glucose uptake (hypoglycemic effect similar to insulin). Lipids: anabolic action (promotes TAG synthesis and fat storage in adipose). Proteins: anabolic effect (promotes muscle protein synthesis)", correct: false },
      { text: "Carbohydrates: inhibits hepatic gluconeogenesis and promotes glycogen storage in liver. Lipids: promotes lipid synthesis from acetyl-CoA. Proteins: anabolic, similar strength to testosterone", correct: false },
      { text: "Carbohydrates: no direct metabolic effect on glucose homeostasis. Lipids: promotes only ketone body formation without lipolysis. Proteins: selectively increases uptake of branched-chain amino acids", correct: false },
    ],
    explanation: "CORTISOL (glucocorticoid from adrenal cortex, stimulated by stress and ACTH): CARBOHYDRATES — increases gluconeogenesis + inhibits glucose uptake by cells = HYPERGLYCEMIA (opposes insulin). LIPIDS — CATABOLIC: mobilizes and degrades lipids; mobilized lipids feed hepatic gluconeogenesis. PROTEINS — CATABOLIC: breaks down proteins into amino acids for gluconeogenesis. Other important cortisol effects: ANTI-INFLAMMATORY, decreases pain perception, IMMUNOSUPPRESSIVE (depresses immunity), increases erythrocyte production. Long-term treatment with glucocorticoids causes Cushing-like features."
  },

  {
    id: 126,
    category: "Endocrine System",
    question: "Insulin and glucagon are antagonists produced in the endocrine pancreas. Which cells produce each, and what triggers their release?",
    answers: [
      { text: "Insulin: β cells, triggered by hyperglycemia; glucagon: α cells, triggered by hypoglycemia. Both are found in the islets of Langerhans", correct: true },
      { text: "Insulin: α cells in the islets of Langerhans, triggered by hypoglycemia; glucagon: β cells, triggered by postprandial hyperglycemia", correct: false },
      { text: "Both insulin and glucagon are produced by β cells within the islets; their opposing metabolic effects result from different membrane receptor subtypes being activated", correct: false },
      { text: "Insulin: δ (delta) cells, released continuously at a basal rate; glucagon: β cells, released only after a prolonged fast of more than 24 hours", correct: false },
    ],
    explanation: "The ISLETS OF LANGERHANS (endocrine portion of pancreas, 2–3% of total mass) contain two main cell types: α CELLS → produce GLUCAGON (hyperglycemic hormone): released during FASTING/HYPOGLYCEMIA; raises blood glucose by glycogenolysis, gluconeogenesis, lipolysis, protein breakdown (CATABOLIC, EXTRACTIVE action). β CELLS → produce INSULIN (hypoglycemic hormone): released after eating/HYPERGLYCEMIA; lowers blood glucose by increasing cellular glucose uptake, glycogenesis, lipogenesis, protein synthesis (ANABOLIC, STORAGE action). They are antagonists — insulin/glucagon balance is central to glucose homeostasis."
  },

  {
    id: 127,
    category: "Endocrine System",
    question: "What are the metabolic consequences of a total absence of insulin, as seen in Type 1 diabetes?",
    answers: [
  { text: "Glucose cannot enter cells → neurons starve → brain damage; fats are used instead → ketone bodies → ketoacidosis; glucose accumulates in blood and spills into urine", correct: true },
  { text: "Glucose enters cells uncontrolled → hypoglycemia → seizures; fats are stored (not burned) → no ketones; glucose disappears from blood and urine", correct: false },
  { text: "Glucose cannot enter cells → muscle catabolism only; protein breakdown → urea excess → renal failure; no fat catabolism and no ketonuria", correct: false },
  { text: "Glucose enters cells but cannot be oxidised → lactic acidosis; fats are spared → no ketones; glucose stays in blood only, never spilling into urine", correct: false },
],
    explanation: "With NO INSULIN (Type 1 diabetes): glucose cannot enter cells → HYPERGLYCEMIA → glucose appears in urine (glucosuria). Neurons 'starve' (they cannot access blood glucose normally) → brain damage risk. The body switches to FAT catabolism for energy → EXCESS ketone body production → KETOACIDOSIS (dangerous drop in blood pH). Blood lipids also rise. SYMPTOMS: the 3 Ps — Polyuria (increased urination), Polydipsia (increased thirst), Polyphagia (increased hunger) — plus weight loss. Treatment: insulin injections."
  },

  {
    id: 128,
    category: "Endocrine System",
    question: "What is the role of erythropoietin (EPO) and why is it used in doping?",
    answers: [
      { text: "EPO is produced by the kidneys, targets bone marrow, increases red blood cell production when blood O₂ is low — doping increases O₂-carrying capacity for endurance sports", correct: true },
      { text: "EPO is produced by the liver, targets skeletal muscle fibres directly, and increases contractile protein synthesis — used in strength sports as an alternative to testosterone", correct: false },
      { text: "EPO is produced by the heart muscle, targets the kidneys to promote Na⁺ excretion and increase plasma volume, which indirectly boosts the red blood cell count", correct: false },
      { text: "EPO is produced by the adrenal cortex as a steroid-like glucocorticoid that stimulates bone marrow only when circulating cortisol levels fall below baseline values", correct: false },
    ],
    explanation: "ERYTHROPOIETIN (EPO): synthesized by the KIDNEYS; target organ: BONE MARROW; stimulus: low partial pressure of O₂ in blood. Effect: increases PRODUCTION OF RED BLOOD CELLS (erythropoiesis). Used in DOPING in endurance sports (cycling, running, cross-country skiing): more RBCs → more haemoglobin → greater O₂-carrying capacity → improved aerobic performance. Note: atrial natriuretic peptide (ANP) is produced by the HEART and promotes Na⁺ and water LOSS via urine when blood volume/pressure is too high — the opposite of aldosterone."
  },

  {
    id: 129,
    category: "Endocrine System",
    question: "In the male reproductive system, which cells produce testosterone and which produce sperm, and what hormones control each?",
    answers: [
      { text: "Leydig (interstitial) cells produce testosterone (stimulated by LH); Sertoli cells produce sperm (stimulated by FSH and testosterone)", correct: true },
      { text: "Sertoli cells produce both testosterone and sperm; both processes are controlled exclusively by FSH from the adenohypophysis", correct: false },
      { text: "Leydig cells produce sperm under FSH control; Sertoli cells produce testosterone under LH control", correct: false },
      { text: "Both Leydig and Sertoli cells produce testosterone; sperm are produced independently in the epididymis under DHT control", correct: false },
    ],
    explanation: "The seminiferous tubules of the testes contain two cell types: SERTOLI CELLS: synthesize SPERMATOZOA and secrete inhibin (negative feedback on FSH). Stimulated by FSH and testosterone. LEYDIG (INTERSTITIAL) CELLS: endocrine cells that produce TESTOSTERONE. Stimulated by LH. Testosterone effects: stimulates spermatogenesis, develops male sexual characteristics (body hair, larynx growth → voice change, stops growth via closure of epiphyseal plates), increases RBC production, higher basal metabolism, ANABOLIC (increases muscle mass = doping). Testosterone production starts at 8 weeks of fetal development and continues until death."
  },

  {
    id: 130,
    category: "Endocrine System",
    question: "During the ovarian cycle, what does the corpus luteum do and what hormone maintains it during pregnancy?",
    answers: [
      { text: "After ovulation, the empty follicle becomes the corpus luteum under LH influence, secreting estrogens and progesterone; hCG from the placenta maintains it if fertilization occurs", correct: true },
      { text: "The corpus luteum forms before ovulation under FSH influence during the follicular phase; it secretes only estrogens and always regresses at the end of the cycle regardless of fertilization", correct: false },
      { text: "The corpus luteum is a transient accessory structure that stores FSH and releases it as a surge to trigger ovulation when LH levels first begin to fall", correct: false },
      { text: "The corpus luteum secretes oxytocin and ADH during the luteal phase to prepare the endometrium; it is maintained exclusively by prolactin if the ovum is fertilized", correct: false },
    ],
    explanation: "OVARIAN CYCLE (28 days): FSH stimulates follicle maturation → the Graafian follicle secretes ESTROGENS → LH surge on day 14 → OVULATION. After ovulation, the empty follicle becomes the CORPUS LUTEUM (under LH) → secretes ESTROGENS + PROGESTERONE (luteal phase). If no fertilization: corpus luteum regresses into corpus albicans → hormone drop → menstruation. If FERTILIZATION: the placenta secretes hCG (human chorionic gonadotropin) which MAINTAINS the corpus luteum → sustained estrogen/progesterone production. hCG is the hormone detected by PREGNANCY TESTS."
  },

  {
    id: 131,
    category: "Endocrine System",
    question: "Why do estrogens cause a more sudden and complete cessation of growth than testosterone?",
    answers: [
      { text: "Estrogens cause earlier and more rapid closure of epiphyseal (growth) cartilage plates than testosterone does, leading to a shorter final adult height in women", correct: true },
      { text: "Estrogens sustain cartilage plate activity for a longer period than testosterone, resulting in a taller final adult height compared to males exposed to testosterone", correct: false },
      { text: "Estrogens completely inhibit GH secretion from the adenohypophysis during puberty, causing all height growth to stop simultaneously at the onset of puberty", correct: false },
      { text: "Testosterone causes earlier and more complete epiphyseal plate closure than estrogens, which is why adult males are generally shorter than females on average", correct: false },
    ],
    explanation: "Both sex hormones eventually cause epiphyseal plate closure (stopping height growth), but ESTROGENS do so MORE ABRUPTLY AND STRONGLY than testosterone. This is one reason women typically stop growing earlier in puberty and reach a shorter final height than men. Testosterone also stops growth (disappearance of growing cartilage) but more gradually. Both hormones have anabolic effects on muscle mass — testosterone more powerfully so, which is why testosterone (and its analogs) is used in doping to increase muscle mass."
  },

  {
    id: 132,
    category: "Endocrine Drugs",
    question: "What is the clinical distinction between gigantism and acromegaly, both caused by GH hypersecretion?",
    answers: [
  { text: "Gigantism: GH excess during childhood (open epiphyses) → proportional skeletal overgrowth; acromegaly: GH excess in adulthood (closed epiphyses) → disproportionate enlargement of face, hands, and feet", correct: true },
  { text: "Gigantism: GH excess in adulthood (closed epiphyses) → disproportionate bone growth; acromegaly: GH excess in childhood (open epiphyses) → proportional short stature", correct: false },
  { text: "Gigantism: GH deficiency in childhood (open epiphyses) → disproportionate short stature; acromegaly: GH excess in adulthood (closed epiphyses) → proportional gigantism", correct: false },
  { text: "Gigantism: GH excess in childhood (closed epiphyses) → disproportionate facial growth only; acromegaly: GH excess in adulthood (open epiphyses) → proportional skeletal overgrowth", correct: false },
],
    explanation: "Both are caused by GH HYPERSECRETION (usually from a benign adenohypophysis tumor): GIGANTISM: occurs in CHILDHOOD, when epiphyseal cartilage is still open → exaggerated but PROPORTIONAL skeletal growth (the whole body is big). Treatment: GHIH (somatostatin). DWARFISM is the opposite: GH hyposecretion in childhood → short stature; treatment: GH injections. ACROMEGALY: occurs in ADULTHOOD, when epiphyseal plates are closed (changed to bone) → no increase in height possible. Instead: DISPROPORTIONATE enlargement of facial bones, hands, and feet. Treatment: GHIH."
  },

  {
    id: 133,
    category: "Endocrine Drugs",
    question: "What distinguishes Cushing's syndrome from Addison's disease?",
    answers: [
      { text: "Cushing's: hypersecretion of glucocorticoids (buffalo hump, moon face); Addison's: hyposecretion of corticoids (weight loss, nausea, dehydration, emotional problems)", correct: true },
      { text: "Cushing's: hyposecretion of all corticoids leading to weight loss; Addison's: hypersecretion of glucocorticoids causing fat redistribution to the face and neck", correct: false },
      { text: "Both conditions involve glucocorticoid excess; Cushing's affects only the cortex while Addison's affects only the adrenal medulla", correct: false },
      { text: "Cushing's is caused by adrenal medulla failure; Addison's is caused by an ACTH-secreting pituitary tumor driving cortisol excess", correct: false },
    ],
    explanation: "CUSHING'S SYNDROME: HYPERSECRETION of glucocorticoids (cortisol). Causes: prolonged high-dose glucocorticoid therapy (iatrogenic), ACTH-secreting pituitary tumor, or cortisol-secreting adrenal tumor. Symptoms: 'buffalo hump' (fat deposit between shoulders), 'moon face', hyperglycemia, immunosuppression. ADDISON'S DISEASE: HYPOSECRETION of corticoids (adrenal insufficiency). Symptoms: weight loss, nausea, emotional problems, dehydration (no aldosterone → Na⁺ and water loss). PHEOCHROMOCYTOMA: benign tumor of adrenal MEDULLA → excess adrenaline/noradrenaline → hypertension, tachycardia, vasoconstriction. Treatment: α and β-blockers then surgical removal."
  },

  {
    id: 134,
    category: "Endocrine Drugs",
    question: "In thyroid disorders: what causes a goiter, and what are the contrasting symptoms of hypo- vs. hyperthyroidism?",
    answers: [
  { text: "Goiter: iodine deficiency → insufficient T3/T4 → no negative feedback → excess TSH → thyroid enlargement. Hypothyroidism: low metabolism, weight gain, lethargy. Hyperthyroidism: high metabolism, weight loss, heat sensitivity, nervousness", correct: true },
  { text: "Goiter: iodine excess → T3/T4 overproduction → excess TSH suppression → thyroid enlargement. Hypothyroidism: high metabolism, weight loss, heat sensitivity. Hyperthyroidism: low metabolism, weight gain, lethargy", correct: false },
  { text: "Goiter: excess TSH → T3/T4 overproduction → negative feedback failure → thyroid enlargement. Hypothyroidism: weight loss, nervousness, tachycardia. Hyperthyroidism: weight gain, bradycardia, cold intolerance", correct: false },
  { text: "Goiter: iodine deficiency → excess T3/T4 → positive feedback → excess TSH → thyroid enlargement. Hypothyroidism: high metabolism, heat sensitivity. Hyperthyroidism: low metabolism, cold intolerance, lethargy", correct: false },
],
    explanation: "GOITER: iodine deficiency → thyroid cannot make enough T3/T4 → loss of negative feedback → TSH keeps rising → TSH drives abnormal thyroid GROWTH (goiter). HYPOTHYROIDISM (hyposecretion of T3/T4): low basal metabolic rate, weight GAIN, lethargy, cold intolerance, myxedema (fluid accumulation in severe cases). CRETINISM = hypothyroidism in childhood: severe mental retardation and impaired NS development. HYPERTHYROIDISM (hypersecretion): heat sensitivity, palpitations, nervousness, weight LOSS, exophthalmos (protruding eyes in severe cases). GRAVES' DISEASE: autoimmune — antibodies mimic TSH, activating thyroid receptors; TSH levels are paradoxically LOW due to negative feedback."
  },

  {
    id: 135,
    category: "Endocrine Drugs",
    question: "What is the difference between Type 1 and Type 2 diabetes mellitus in terms of pathophysiology and treatment?",
    answers: [
      { text: "Type 1: pancreas produces no insulin (genetic/autoimmune), appears in childhood, treated with insulin injections. Type 2: insulin is produced but cells are resistant, appears in adults, treated with oral hypoglycemics", correct: true },
      { text: "Type 1: caused by insulin resistance in adult-onset obesity and metabolic syndrome, treated with oral hypoglycemic drugs. Type 2: autoimmune β-cell destruction in childhood requiring lifelong subcutaneous insulin injections", correct: false },
      { text: "Type 1 and Type 2 both involve progressive insulin resistance in peripheral tissues; they are distinguished only by the degree of resistance and the patient's age at the time of first diagnosis", correct: false },
      { text: "Type 1: caused by glucagon hypersecretion from α cells overwhelming insulin action. Type 2: caused by insulin hypersecretion from β cells leading to progressive receptor downregulation and resistance", correct: false },
    ],
    explanation: "DIABETES MELLITUS TYPE 1 (insulin-dependent): 10–20% of cases; appears in CHILDHOOD; genetic or autoimmune causes → pancreatic β cells destroyed → NO INSULIN PRODUCED; treatment: INSULIN INJECTIONS (subcutaneous). DIABETES MELLITUS TYPE 2 (non-insulin-dependent): 80–90% of cases; appears in ADULTS; risk factors: obesity, sedentary lifestyle, hypertension, dyslipidemia; insulin IS produced but cells become RESISTANT to it; treatment: ORAL HYPOGLYCEMICS (metformin, sulfonylureas, etc.). GESTATIONAL DIABETES: ~4% of pregnancies; usually resolves after delivery. Diagnosis: fasting glucose > 126 mg/dL, or random glucose > 200 mg/dL."
  },

  {
    id: 136,
    category: "Endocrine Drugs",
    question: "Bisphosphonates are 1st-choice drugs for osteoporosis. What is their mechanism and a critical administration rule?",
    answers: [
      { text: "They reduce osteoclast activity and number; must be taken fasting with plain water, staying upright for 30 minutes — incorrect administration causes esophageal damage", correct: true },
      { text: "They stimulate osteoblast activity and number to build new bone matrix; can be taken at any time with food, and the patient may lie down or eat normally immediately after ingestion", correct: false },
      { text: "They inhibit both osteoblasts and osteoclasts equally to stabilize bone turnover; must be administered by subcutaneous injection to completely bypass gastrointestinal irritation", correct: false },
      { text: "They increase intestinal calcium absorption by activating vitamin D in the kidney; taken at bedtime to maximize the nighttime peak in bone remodeling activity", correct: false },
    ],
    explanation: "BISPHOSPHONATES (etidronate, alendronate, risedronate, ibandronate): 1st-choice osteoporosis treatment. Mechanism: REDUCE OSTEOCLAST ACTIVITY AND NUMBER → less bone resorption → increased bone density. CRITICAL ADMINISTRATION RULE: swallow with tap water, while fasting, without chewing, do NOT lie down, eat, or take other medications for 30 MINUTES → failure to follow this causes serious ESOPHAGEAL DAMAGE. RALOXIFENE: also 1st-choice; reduces osteoclasts + increases osteoblasts; ADR: thromboembolism risk. CALCITONIN: used when patients can't tolerate the above. ESTROGENS: highly effective but questioned due to thromboembolism and cancer risks."
  },

  {
    id: 137,
    category: "Endocrine Drugs",
    question: "Metformin (a biguanide) is the 1st-choice oral hypoglycemic for Type 2 diabetes. What is its mechanism compared to sulfonylureas?",
    answers: [
      { text: "Metformin decreases insulin resistance (increases cell sensitivity to insulin); sulfonylureas stimulate the pancreas to secrete more insulin", correct: true },
      { text: "Metformin stimulates pancreatic insulin secretion; sulfonylureas decrease insulin resistance in peripheral tissues", correct: false },
      { text: "Both metformin and sulfonylureas stimulate pancreatic insulin secretion but via different receptor subtypes on β cells", correct: false },
      { text: "Metformin delays carbohydrate digestion in the small intestine; sulfonylureas increase insulin resistance to prevent hypoglycemia", correct: false },
    ],
    explanation: "ORAL HYPOGLYCEMICS for Type 2 diabetes: BIGUANIDES (METFORMIN): 1st CHOICE — very effective, acts on both fasting and post-meal glucose. Mechanism: DECREASES INSULIN RESISTANCE (increases peripheral cell sensitivity to insulin). SULFONYLUREAS (tolbutamide, glibenclamide) and MEGLITINIDES (repaglinide): stimulate PANCREATIC β CELLS to secrete more insulin. THIAZOLIDINEDIONES/GLITAZONES (pioglitazone, rosiglitazone): decrease insulin resistance. α-GLUCOSIDASE INHIBITORS (acarbose, miglitol): delay digestion of polysaccharides in the small intestine → slower glucose absorption → blunted post-meal glucose spike. All are for Type 2; Type 1 requires insulin."
  },

  {
    id: 138,
    category: "Muscle System",
    question: "Skeletal muscle accounts for what proportion of body weight, and what are its three main functions?",
    answers: [
      { text: "40–50% of body weight; functions: movement, heat production, and posture maintenance through continuous partial contraction", correct: true },
      { text: "20–30% of body weight; functions: movement, oxygen storage, and thermoregulation via vasodilation of surface capillaries", correct: false },
      { text: "40–50% of body weight; functions: movement, hormone secretion, and blood pressure regulation via vessel compression", correct: false },
      { text: "60–70% of body weight; functions: posture, force generation, and calcium homeostasis via mineral storage in myofibrils", correct: false },
    ],
    explanation: "Skeletal muscle makes up 40–50% of body weight and there are more than 600 muscles in the body. Its three main functions are: (1) MOVEMENT — contracting to pull bones and create movement; (2) HEAT PRODUCTION — muscle activity generates significant heat, maintaining body temperature; (3) POSTURE MAINTENANCE — continuous partial contraction (muscle tone) allows standing, sitting, and stable positioning. Muscle tone is controlled by the NS (specifically the spinal cord) and is lost with loss of consciousness."
  },

  {
    id: 139,
    category: "Muscle System",
    question: "What are the structural layers of connective tissue wrapping a skeletal muscle from outermost to innermost?",
    answers: [
      { text: "Fascia (outside epimysium) → epimysium (whole muscle) → perimysium (around fascicles) → endomysium (around individual fibers)", correct: true },
      { text: "Endomysium (outside) → perimysium (around whole muscle) → epimysium (around fascicles) → sarcolemma (innermost)", correct: false },
      { text: "Epimysium (outside) → endomysium (around fascicles) → perimysium (around individual fibers) → sarcolemma (innermost)", correct: false },
      { text: "Fascia (outside) → perimysium (around whole muscle) → epimysium (around fascicles) → endomysium (around fibers)", correct: false },
    ],
    explanation: "From outside in: FASCIA (fibrous connective tissue outside the epimysium, surrounding the whole muscle and tendon) → EPIMYSIUM (rough layer wrapping the whole muscle) → PERIMYSIUM (connective tissue holding fascicles together) → ENDOMYSIUM (thin membrane covering individual specialized muscle fibers). FASCICLE = a bundle of muscle fibers. Each muscle fiber = one muscle cell. TENDON connects muscle to bone."
  },

  {
    id: 140,
    category: "Muscle System",
    question: "What is the function of T tubules in skeletal muscle cells?",
    answers: [
      { text: "They carry electrical impulses from the sarcolemma deep into the cell interior, triggering Ca²⁺ release from the sarcoplasmic reticulum", correct: true },
      { text: "They store Ca²⁺ and release it directly into the surrounding sarcomere when the motor neuron fires an action potential, completely bypassing the sarcoplasmic reticulum", correct: false },
      { text: "They transport ATP molecules from the adjacent mitochondria to the myosin heads along the full length of the sarcomere during each contraction cycle", correct: false },
      { text: "They form the Z discs that anchor and align thin actin filaments, thereby defining the structural boundaries of each individual sarcomere unit", correct: false },
    ],
    explanation: "T TUBULES (transverse tubules) are extensions of the SARCOLEMMA that penetrate transversely into the sarcoplasm. Their function: allow the electrical action potential traveling along the sarcolemma to reach deep into the cell, triggering Ca²⁺ release from the SARCOPLASMIC RETICULUM (SR). The TRIAD = SR + T tubule + SR. The SR stores Ca²⁺ and pumps it back (ATP-dependent) during relaxation. The sarcolemma = plasma membrane of muscle fibers; sarcoplasm = cytoplasm; SR = endoplasmic reticulum equivalent."
  },

  {
    id: 141,
    category: "Muscle System",
    question: "What are the four protein molecules in muscle filaments, and which belong to thick vs. thin filaments?",
    answers: [
      { text: "Thin filaments: actin + tropomyosin + troponin; thick filaments: myosin (with cross-bridge heads). Actin and myosin are attracted but blocked at rest by tropomyosin", correct: true },
      { text: "Thin filaments: myosin + tropomyosin; thick filaments: actin + troponin. At rest, troponin covers the myosin heads to prevent premature cross-bridge formation", correct: false },
      { text: "Thin filaments: actin + myosin; thick filaments: tropomyosin + troponin. The thick filaments do not form cross-bridges until Ca²⁺ removes troponin from the thin filaments", correct: false },
      { text: "Thin filaments: troponin + troponin; thick filaments: myosin + actin. Both filaments are blocked by tropomyosin until ATP activates the myosin heads", correct: false },
    ],
    explanation: "Four proteins: THIN FILAMENTS: (1) ACTIN (main structural protein); (2) TROPOMYOSIN (covers actin active sites at rest); (3) TROPONIN (binds Ca²⁺ to trigger tropomyosin shift). THICK FILAMENTS: (4) MYOSIN (shaped like golf sticks, with ATPase-active cross-bridge heads). At rest, actin and myosin are chemically attracted but TROPOMYOSIN blocks actin's active sites, preventing cross-bridge formation. When Ca²⁺ binds to TROPONIN, tropomyosin shifts to expose the active sites, enabling myosin binding."
  },

  {
    id: 142,
    category: "Muscle System",
    question: "In the sarcomere, what distinguishes the A band, I band, H band, and M line?",
    answers: [
      { text: "A band: thick + thin filaments overlap. I band: thin filaments only (no overlap). H band: thick filaments only (no thin filaments). M line: protein joining thick filaments at centre", correct: true },
      { text: "A band: thin filaments only. I band: thick + thin filaments. H band: Z discs anchoring actin. M line: mid-sarcomere anchor for thin filaments only", correct: false },
      { text: "A band: changes length during contraction. I band: stays constant in length. H band: marks where Z discs are. M line: where elastic filaments attach to thin filaments", correct: false },
      { text: "A band: elastic filaments connecting Z discs. I band: myosin-only region. H band: actin-only band. M line: boundary separating adjacent sarcomeres", correct: false },
    ],
    explanation: "SARCOMERE = segment between two Z discs (anchors for thin filaments). A BAND: contains BOTH thick and thin filaments (does NOT shorten during contraction). I BAND: Z disc + ends of thin filaments NOT overlapping thick filaments (shortens during contraction). H BAND: thick filaments ONLY (no thin filaments) — narrows during contraction. M LINE: protein filaments in the middle of the A band that join thick filaments together and stabilize them. ELASTIC FILAMENTS: run from M line to Z discs, stabilizing thick filament position and aiding return to resting length."
  },

  {
    id: 143,
    category: "Muscle System",
    question: "What is a motor unit?",
    answers: [
      { text: "One somatic motor neuron plus all the muscle fibers it innervates — the functional unit of muscle control", correct: true },
      { text: "One muscle fiber plus all the motor neurons that innervate it, allowing graded control of single fiber tension", correct: false },
      { text: "A group of muscle fibers sharing one sarcomere that contract together as the smallest functional unit of the whole muscle", correct: false },
      { text: "The entire neuromuscular junction including the axon terminal, synaptic cleft, and motor end plate membrane", correct: false },
    ],
    explanation: "A MOTOR UNIT = one SOMATIC MOTOR NEURON + ALL the MUSCLE FIBERS it innervates. Each motor neuron axon branches to innervate multiple muscle fibers. Each muscle fiber receives input from only ONE motor neuron. The NEUROMUSCULAR JUNCTION is the chemical synapse between a motor neuron and a muscle fiber. The MOTOR END PLATE is the specialized sarcolemma region at the NMJ. Fine motor control (e.g., fingers, eye muscles) = small motor units (few fibers per neuron). Powerful movements (e.g., leg muscles) = large motor units (many fibers per neuron)."
  },

  {
    id: 144,
    category: "Muscle System",
    question: "List the correct sequence of events in skeletal muscle contraction (sliding filament theory):",
    answers: [
  { text: "AP arrives → ACh released → sarcolemma depolarizes → impulse travels via T tubules → Ca²⁺ released from SR → Ca²⁺ binds troponin → tropomyosin shifts → myosin binds actin → power stroke → filaments slide → sarcomere shortens", correct: true },
  { text: "AP arrives → ACh released → sarcolemma depolarizes → impulse travels via T tubules → Ca²⁺ released from SR → Ca²⁺ binds tropomyosin → troponin shifts → actin binds myosin → power stroke → filaments slide → sarcomere lengthens", correct: false },
  { text: "AP arrives → NA released → sarcolemma depolarizes → impulse travels via gap junctions → Ca²⁺ released from SR → Ca²⁺ binds troponin → tropomyosin shifts → myosin binds actin → power stroke → filaments slide → sarcomere shortens", correct: false },
  { text: "AP arrives → ACh released → sarcolemma depolarizes → impulse travels via T tubules → Ca²⁺ enters from ECF → Ca²⁺ binds calmodulin → myosin kinase activated → myosin binds actin → power stroke → filaments slide → sarcomere shortens", correct: false },
],
    explanation: "Complete sequence: (1) AP depolarizes motor axon terminal → ACh released by exocytosis; (2) ACh binds NICOTINIC receptors on motor end plate → sarcolemma depolarizes; (3) AP travels along sarcolemma and through T TUBULES; (4) T tubule AP triggers Ca²⁺ RELEASE from sarcoplasmic reticulum; (5) Ca²⁺ binds TROPONIN → tropomyosin shifts → ACTIN ACTIVE SITES EXPOSED; (6) ATP binds myosin heads (ATPase) → myosin heads energized; (7) Myosin binds actin → CROSS-BRIDGE; (8) Pi release → POWER STROKE (myosin pulls thin filaments toward sarcomere center); (9) ADP released, new ATP binds → cross-bridge detaches → cycle repeats. = SLIDING FILAMENT THEORY."
  },

  {
    id: 145,
    category: "Muscle System",
    question: "Why is ATP required for BOTH muscle contraction AND muscle relaxation?",
    answers: [
      { text: "Contraction: ATP energizes myosin heads for the power stroke. Relaxation: ATP-dependent pump returns Ca²⁺ to the sarcoplasmic reticulum — without it, Ca²⁺ remains in the sarcoplasm causing contracture", correct: true },
      { text: "Contraction alone requires ATP for cross-bridge cycling; relaxation is entirely passive — Ca²⁺ diffuses back into the SR down its concentration gradient without any active energy expenditure", correct: false },
      { text: "Relaxation requires ATP to actively break myosin-actin cross-bridges; the contraction power stroke itself is entirely passive once Ca²⁺ binds troponin and exposes actin active sites", correct: false },
      { text: "Both contraction and relaxation use ATP exclusively to power Ca²⁺ transport — the myosin power stroke consumes no ATP at all and is driven entirely by spring-like elastic recoil of the myosin neck", correct: false },
    ],
    explanation: "ATP is essential for BOTH phases: CONTRACTION: ATP binds myosin heads → hydrolyzed by ATPase → energizes heads for the power stroke; ATP also needed to detach myosin from actin after the power stroke. RELAXATION: Ca²⁺ must be actively pumped BACK into the SR by an ATP-dependent Ca²⁺-ATPase (active transport). WITHOUT ATP: Ca²⁺ stays in sarcoplasm → myosin remains bound to actin → continuous contraction = CONTRACTURE. This explains rigor mortis (ATP depletes after death → permanent cross-bridges → muscle stiffness)."
  },

  {
    id: 146,
    category: "Muscle System",
    question: "What is the Treppe effect (staircase phenomenon) and what mechanisms explain it?",
    answers: [
      { text: "After repeated contractions, a muscle contracts more forcefully — the physiological basis of warm-up: faster Ca²⁺ spread, metabolic product accumulation, and temperature increase", correct: true },
      { text: "After prolonged rest, a muscle contracts more forcefully on first use — the reverse of fatigue, caused by ATP accumulation and myosin head priming during inactivity", correct: false },
      { text: "A muscle progressively weakens with each contraction due to glycogen depletion — the physiological basis of warm-up preventing early fatigue in training", correct: false },
      { text: "Each successive contraction shortens the sarcomere less than the previous one due to length-tension mismatch as thick filaments collide at the M line", correct: false },
    ],
    explanation: "TREPPE EFFECT (staircase phenomenon): after several contractions, a muscle produces progressively GREATER FORCE than on the first contraction — the basis of WARM-UP. Three contributing mechanisms: (1) In warmed-up fibers, Ca²⁺ diffuses FASTER through the sarcoplasm → more actin-myosin interactions; (2) Accumulation of METABOLIC PRODUCTS; (3) TEMPERATURE INCREASE enhances enzyme activity and cross-bridge cycling speed. This is why athletes warm up before performance — the first few contractions 'prime' the muscle system."
  },

  {
    id: 147,
    category: "Muscle System",
    question: "What are the three energy sources for muscle contraction in order of activation speed?",
    answers: [
      { text: "1st: phosphocreatine (extremely fast, lasts 5–8 s). 2nd: anaerobic glycolysis (very fast, limited — 2–3 ATP/glucose). 3rd: oxidative phosphorylation (slow, unlimited — 36 ATP/glucose)", correct: true },
      { text: "1st: oxidative phosphorylation (fastest — mitochondria always ready). 2nd: anaerobic glycolysis. 3rd: phosphocreatine (slowest to activate but most energy per molecule)", correct: false },
      { text: "1st: anaerobic glycolysis (fastest — no oxygen needed). 2nd: phosphocreatine (slower — requires creatine kinase activation). 3rd: oxidative phosphorylation (slowest but highest yield)", correct: false },
      { text: "1st: phosphocreatine (lasts ~30 s). 2nd: oxidative phosphorylation (activates at 10 s). 3rd: anaerobic glycolysis (last resort, only during hypoxia)", correct: false },
    ],
    explanation: "Three ATP sources in order of speed: (1) PHOSPHOCREATINE (creatine phosphate): EXTREMELY FAST, limited reserve (lasts ~5–8 seconds), catalyzed by creatine kinase (CK). (2) ANAEROBIC GLYCOLYSIS: VERY FAST, limited yield (2–3 ATP/glucose), produces lactate and H⁺ (lowers pH → contributes to fatigue). (3) OXIDATIVE PHOSPHORYLATION: SLOW but UNLIMITED capacity (36 ATP/glucose), uses glucose, fatty acids, and amino acids. Distribution of ATP use: 70% for contraction, 30% for Ca²⁺ transport by SR (relaxation)."
  },

  {
    id: 148,
    category: "Muscle System",
    question: "Compare slow/Type I and fast/Type IIx muscle fibers across the key characteristics:",
    answers: [
      { text: "Type I: high myoglobin (red), aerobic, many mitochondria, fatigue-resistant, for endurance. Type IIx: low myoglobin (white), anaerobic, few mitochondria, fatigues quickly, for explosive short bursts", correct: true },
      { text: "Type I: low myoglobin (white), uses anaerobic metabolism exclusively, fast contraction speed, paradoxically high fatigue resistance. Type IIx: high myoglobin (red), aerobic, slow contraction, fatigues quickly during any sustained low-intensity activity", correct: false },
      { text: "Type I: intermediate myoglobin content, mixed aerobic and anaerobic capacity, moderate fatigue resistance, used primarily for high-speed sprinting activities. Type IIx: very high myoglobin content, purely aerobic metabolism, essentially never fatigues, found exclusively in postural muscles", correct: false },
      { text: "Both Type I and Type IIx fibers have identical fatigue resistance and capillary density; they differ only in contraction speed and the relative proportion of troponin isoforms within their thin filaments", correct: false },
    ],
    explanation: "TYPE I (slow/red): HIGH myoglobin (O₂ storage), AEROBIC metabolism, MANY mitochondria, HIGH capillary supply, HIGH fatigue resistance, for moderate sustained activity (postural muscles e.g. SOLEUS). TYPE IIA (intermediate): mixed aerobic/anaerobic, medium fatigue resistance (e.g. GASTROCNEMIUS). TYPE IIX (fast/white): LOW myoglobin, ANAEROBIC metabolism, FEW mitochondria, LOW capillary supply, LOW fatigue resistance, for intense short bursts (e.g. OCULAR MUSCLES). Training can convert a small percentage of IIx → I (but NOT the reverse). Each muscle contains a mix of all three types."
  },

  {
    id: 149,
    category: "Muscle System",
    question: "What are the main causes of muscle fatigue?",
    answers: [
      { text: "Glycogen depletion, ATP deficiency, accumulation of metabolites (lactate, H⁺, inorganic phosphate Pi) — all impair the ability to generate force", correct: true },
      { text: "Excess Ca²⁺ in the sarcoplasm, over-activation of troponin, and saturation of myosin heads with too many bound actin cross-bridges simultaneously", correct: false },
      { text: "Depletion of tropomyosin and troponin proteins from thin filaments, preventing cross-bridge formation in subsequent contraction cycles", correct: false },
      { text: "Accumulation of ATP and creatine phosphate that competitively inhibit myosin ATPase, slowing the cross-bridge cycle progressively", correct: false },
    ],
    explanation: "MUSCLE FATIGUE = reversible, exercise-induced reduction in force-generating capacity. Main causes: (1) GLYCOGEN DEPLETION (loss of fuel substrate); (2) ATP DEFICIENCY (insufficient energy for cross-bridge cycling and Ca²⁺ pumping); (3) METABOLITE ACCUMULATION — LACTATE and H⁺ (low pH inhibits enzyme activity), INORGANIC PHOSPHATE (Pi) (impairs power stroke). Fatigue is REVERSIBLE with rest. Note: aerobic training increases mitochondria, myoglobin, and capillary density → delays fatigue onset. Anaerobic training builds hypertrophy but does not directly delay metabolic fatigue."
  },

  {
    id: 150,
    category: "Muscle System",
    question: "What is myofibrillar hypertrophy and how does it differ from sarcoplasmic hypertrophy?",
    answers: [
      { text: "Myofibrillar: increase in size/number of actin and myosin filaments → greater strength. Sarcoplasmic: increase in non-contractile elements (collagen, organelles, sarcoplasm) → larger appearance but no strength increase", correct: true },
      { text: "Myofibrillar hypertrophy involves an increase in the total number of whole muscle fibers (hyperplasia). Sarcoplasmic hypertrophy involves an increase in sarcomere number per fiber → greater force output without increased muscle cross-section", correct: false },
      { text: "Myofibrillar hypertrophy involves an expansion of SR volume and total Ca²⁺ storage capacity → enabling faster and more powerful contraction onset. Sarcoplasmic hypertrophy involves increased myosin head ATPase activity → greater peak force without any visible size change", correct: false },
      { text: "Myofibrillar and sarcoplasmic hypertrophy are essentially identical physiological processes triggered by different training volumes — both produce equally significant increases in both muscle strength and cross-sectional area", correct: false },
    ],
    explanation: "ANAEROBIC training increases muscle mass (hypertrophy) but does NOT increase fiber NUMBER (no hyperplasia). MYOFIBRILLAR HYPERTROPHY: increase in size and number of ACTIN AND MYOSIN FILAMENTS (contractile elements) → associated with INCREASED STRENGTH. New myofibrils form by splitting of thick existing myofibrils into two. SARCOPLASMIC HYPERTROPHY: increase in NON-CONTRACTILE elements (collagen, organelles, sarcoplasm) + glycogen + water (each gram glycogen stored with 3 g water) → larger muscle appearance but NO increase in strength. 13% of muscle mass is non-contractile tissue."
  },

  {
    id: 151,
    category: "Muscle System",
    question: "Why can't skeletal muscle fibers regenerate like most other tissues, and what cells allow limited repair?",
    answers: [
      { text: "Skeletal muscle fibers cannot divide once mature; SATELLITE CELLS (between sarcolemma and endomysium) are normally quiescent but activate at injury sites to differentiate into myoblasts for limited regeneration", correct: true },
      { text: "Skeletal muscle fibers regenerate freely by mitosis; however the process is too slow to replace fibers lost to intense exercise, so scar tissue fills the gap temporarily", correct: false },
      { text: "Skeletal muscle fibers regenerate via de-differentiation of mature fibers back to myoblast stage; satellite cells are responsible only for myelin formation around motor axons", correct: false },
      { text: "Skeletal muscle fibers have unlimited regeneration capacity via satellite cells that continuously divide; scar tissue only forms when satellite cells are also destroyed by the injury", correct: false },
    ],
    explanation: "Mature skeletal muscle fibers CANNOT DIVIDE — once destroyed, remaining healthy fibers cannot replace them by mitosis. However, SATELLITE CELLS provide limited regeneration capacity: located between the SARCOLEMMA and ENDOMYSIUM; normally QUIESCENT; activated by muscle injury → differentiate into MYOBLASTS → fuse to form new muscle fibers (MUSCLE REGENERATION). Physical injury often overwhelms this capacity → injured tissue is replaced by FIBROUS CONNECTIVE TISSUE (SCAR) — a dense fibrous mass, not functional muscle. This is why significant muscle tears do not heal to full original capacity."
  },

  {
    id: 152,
    category: "Muscle System",
    question: "What is the muscle stretch reflex and why is it described as monosynaptic?",
    answers: [
      { text: "A skeletal muscle contracts in response to being stretched; monosynaptic = the sensory neuron synapses directly on the motor neuron in the spinal cord", correct: true },
      { text: "A skeletal muscle relaxes in response to being stretched; monosynaptic = the motor neuron signals the muscle spindle directly without passing through the spinal cord", correct: false },
      { text: "It is a polysynaptic reflex that always requires at least one interneuron in the spinal cord between the sensory input and motor output to the muscle", correct: false },
      { text: "A skeletal muscle contracts when its tendon is compressed; monosynaptic = the Golgi tendon organ connects directly to the muscle fiber without passing through the CNS", correct: false },
    ],
    explanation: "MUSCLE STRETCH REFLEX: a skeletal muscle CONTRACTS in response to being STRETCHED. It is the SIMPLEST reflex and is MONOSYNAPTIC: sensory neuron (from MUSCLE SPINDLE, sensing muscle LENGTH) → synapses DIRECTLY on the α-MOTONEURON in the spinal cord (NO interneuron). The α-motoneuron → muscle fiber contraction. γ-MOTONEURONS innervate INTRAFUSAL fibers (within the spindle); α-motoneurons innervate EXTRAFUSAL fibers (ordinary muscle fibers). Clinical example: KNEE-JERK (patellar tendon) REFLEX, integrated in L2–L4. Reflexes allow neurological diagnosis."
  },

  {
    id: 153,
    category: "Muscle System",
    question: "How does smooth muscle differ from skeletal muscle in its contraction mechanism?",
    answers: [
  { text: "Smooth muscle: Ca²⁺ comes from OUTSIDE the cell and binds CALMODULIN (not troponin); no sarcomeres/striations; actin:myosin ratio 16:1; can contract when greatly stretched", correct: true },
  { text: "Smooth muscle: Ca²⁺ comes from SR (like skeletal muscle) and binds TROPONIN (not calmodulin); no sarcomeres/striations; actin:myosin ratio 2:1; cannot contract when stretched", correct: false },
  { text: "Smooth muscle: Ca²⁺ comes from OUTSIDE the cell and binds TROPONIN (not calmodulin); has clear sarcomeres and striations; actin:myosin ratio 6:1; cannot sustain contraction when stretched", correct: false },
  { text: "Smooth muscle: Ca²⁺ comes from SR and binds CALMODULIN (not troponin); has sarcomeres but no striations; actin:myosin ratio 16:1; contracts identically to skeletal muscle when stretched", correct: false },
],
    explanation: "SMOOTH MUSCLE differences from skeletal/cardiac: (1) NO STRIATIONS — no sarcomeres; filaments form a network; thin filaments attach to DENSE BODIES (analogous to Z discs); (2) HIGH ACTIN:MYOSIN ratio (16:1); (3) Ca²⁺ comes from OUTSIDE THE CELL (not SR) and binds CALMODULIN (not troponin) → calmodulin-Ca²⁺ complex activates myosin; (4) Myosin stacks vertically → BALL-SHAPED contraction; (5) Can contract when greatly stretched (essential for hollow organs like bladder, uterus); (6) SINGLE-UNIT type has gap junctions → behaves as syncytium (like cardiac). MULTIUNIT type: each cell individually innervated (iris, arrector pili)."
  },

  {
    id: 154,
    category: "Muscle System",
    question: "What distinguishes cardiac muscle from skeletal and smooth muscle?",
    answers: [
  { text: "Cardiac: striated with sarcomeres; involuntary; cells joined by intercalated discs (gap junctions) → acts as a syncytium; generates APs automatically but is regulated by the ANS", correct: true },
  { text: "Cardiac: striated with sarcomeres; voluntary; cells joined by tight junctions (no gap junctions) → each cell fires independently; generates APs automatically without ANS regulation", correct: false },
  { text: "Cardiac: no sarcomeres, no striations; involuntary; cells joined by intercalated discs (gap junctions) → acts as a syncytium; requires ANS stimulation to generate every AP", correct: false },
  { text: "Cardiac: striated with sarcomeres; involuntary; cells joined by desmosomes only (no gap junctions) → electrical isolation between cells; no automatic AP generation, fully ANS-dependent", correct: false },
],
    explanation: "CARDIAC MUSCLE: STRIATED — contains actin and myosin in sarcomeres (same sliding filament mechanism). INVOLUNTARY. Cells (cardiomyocytes) are SHORT, BRANCHED, and connected by INTERCALATED DISCS (gap junctions) → electrical impulses spread to ALL connected cells → myocardium behaves as a SYNCYTIUM (single functional unit). Can generate action potentials AUTOMATICALLY (autorhythmicity — pacemaker potentials). Regulated by the ANS (sympathetic speeds up, parasympathetic slows down). Does NOT fatigue. Relies more on extracellular Ca²⁺ than skeletal muscle for contraction."
  },

  {
    id: 155,
    category: "Muscle Drugs",
    question: "What distinguishes cramps, convulsions, and fibrillation as muscle disorders?",
    answers: [
      { text: "Cramps: painful involuntary contraction from fatigue or electrolyte deficit. Convulsions: abnormal uncoordinated contractions from NS hyperactivity. Fibrillation: asynchronous fiber contractions causing muscle flutter — most dangerous in the heart", correct: true },
      { text: "Cramps: abnormal NS over-stimulation causing whole-limb uncontrolled movements affecting multiple muscle groups. Convulsions: single-fiber asynchronous contractions causing local flutter. Fibrillation: a painful electrolyte-driven cramp that is limited exclusively to cardiac muscle", correct: false },
      { text: "Cramps: caused exclusively by severe dehydration with no electrolyte imbalance involved. Convulsions: caused entirely by progressive muscle fatigue and glycogen depletion. Fibrillation: a normal electrophysiological feature of cardiac pacemaker cells that fire spontaneously", correct: false },
      { text: "All three disorders are mechanistically identical — all involve painful involuntary contractions caused by accumulation of excess ACh at the neuromuscular junction, overwhelming the normal refractory period of the muscle fiber", correct: false },
    ],
    explanation: "CRAMPS: painful INVOLUNTARY muscle contraction. Causes: muscle swelling from fatigue OR lack of electrolytes (Na⁺, K⁺, Mg²⁺). CONVULSIONS: ABNORMAL, UNCOORDINATED contractions from NS dysfunction — motor nerve stimulation increases (e.g., epilepsy). FIBRILLATION: muscle fibers contract ASYNCHRONOUSLY rather than simultaneously → ineffective 'flutter'. Most important clinically in the HEART (ventricular fibrillation = cardiac emergency — no coordinated pumping). For physio: cryotherapy reduces pain and edema but can impair anti-inflammatory drug penetration (vasoconstriction); heat has a synergistic effect with NSAIDs for pain and joint stiffness."
  },

  {
    id: 156,
    category: "Muscle Drugs",
    question: "What is the clinical distinction between rheumatoid arthritis and osteoarthritis (arthrosis), and how do their treatments differ?",
    answers: [
  { text: "RA: autoimmune — immune system attacks synovium → inflammation and pain (bilateral); treated with DMARDs. Arthrosis: degenerative — cartilage wear → pain, stiffness; treated with paracetamol and cartilage protectors", correct: true },
  { text: "RA: degenerative — cartilage wear → pain, stiffness (bilateral); treated with paracetamol. Arthrosis: autoimmune — immune system attacks synovium → inflammation; treated with DMARDs and biologics", correct: false },
  { text: "RA: autoimmune — immune system attacks cartilage → stiffness only (unilateral); treated with NSAIDs only. Arthrosis: metabolic — uric acid crystals → acute pain; treated with colchicine", correct: false },
  { text: "RA: infectious — bacteria attack synovium → acute fever and joint pain (unilateral); treated with antibiotics. Arthrosis: autoimmune — cartilage antibodies → chronic bilateral inflammation; treated with DMARDs", correct: false },
],
    explanation: "RHEUMATOID ARTHRITIS (RA): AUTOIMMUNE — immune system attacks the SYNOVIUM (joint lining) → inflammation, pain; typically BILATERAL (same joint both sides), commonly hands, knees, ankles. Treatment: (1) NSAIDs (early pain management); (2) glucocorticoids (low dose oral or intra-articular); (3) DMARDs — METHOTREXATE, SULFASALAZINE (delay disease PROGRESSION). OSTEOARTHRITIS/ARTHROSIS: DEGENERATIVE — chronic wear of joint CARTILAGE → pain, stiffness, reduced mobility. Treatment: (1) PARACETAMOL + intra-articular glucocorticoids (pain); (2) CARTILAGE PROTECTORS — chondroitin sulphate (best), glucosamine sulphate, hyaluronic acid."
  },

    {
    id: 157,
    category: "Endocrine System",
    question: "TSH is secreted by the pituitary. What is its target and primary action?",
    answers: [
      { text: "Target: thyroid gland → stimulates T3/T4 secretion and maintains thyroid tissue", correct: true },
      { text: "Target: adrenal cortex → stimulates cortisol and aldosterone secretion under CRH control", correct: false },
      { text: "Target: thyroid gland → inhibits T3/T4 secretion to prevent hyperthyroidism after stress", correct: false },
      { text: "Target: liver → stimulates IGF-1 production to mediate linear bone and muscle growth", correct: false },
    ],
    explanation: "TSH (thyroid-stimulating hormone) from the adenohypophysis targets the THYROID GLAND: it stimulates T3/T4 secretion AND maintains thyroid tissue (trophic effect). Regulated by TRH from the hypothalamus; T3/T4 provide negative feedback. Trap: ACTH targets the adrenal cortex for cortisol — not TSH. IGF-1 is stimulated by GH, not TSH."
  },
 
  {
    id: 158,
    category: "Endocrine System",
    question: "ACTH is secreted by the pituitary. What is its target and primary action?",
    answers: [
      { text: "Target: adrenal CORTEX → stimulates cortisol (glucocorticoid) secretion", correct: true },
      { text: "Target: adrenal MEDULLA → stimulates adrenaline and noradrenaline release", correct: false },
      { text: "Target: adrenal CORTEX → stimulates aldosterone secretion only", correct: false },
      { text: "Target: thyroid gland → stimulates T3/T4 in response to stress", correct: false },
    ],
    explanation: "ACTH (adrenocorticotropic hormone) from the adenohypophysis targets the ADRENAL CORTEX specifically, stimulating CORTISOL (glucocorticoid) secretion. Regulated by CRH from the hypothalamus; cortisol feeds back negatively. Key trap: the adrenal MEDULLA releases adrenaline/noradrenaline — but that is controlled by the SYMPATHETIC NERVOUS SYSTEM, not ACTH. Aldosterone is regulated by the renin-angiotensin system, not ACTH."
  },
 
  {
    id: 159,
    category: "Endocrine System",
    question: "FSH and LH are gonadotropins secreted by the pituitary. In males, FSH and LH target respectively:",
    answers: [
      { text: "FSH → Sertoli cells (spermatogenesis); LH → Leydig cells (testosterone secretion)", correct: true },
      { text: "FSH → Leydig cells (testosterone); LH → Sertoli cells (sperm production)", correct: false },
      { text: "Both FSH and LH target Leydig cells but stimulate different steps of testosterone synthesis", correct: false },
      { text: "FSH → seminiferous tubules (testosterone); LH → epididymis (sperm maturation)", correct: false },
    ],
    explanation: "In males: FSH targets SERTOLI CELLS → stimulates SPERMATOGENESIS (sperm production). LH targets LEYDIG (interstitial) CELLS → stimulates TESTOSTERONE secretion. Both are regulated by GnRH from the hypothalamus; testosterone and inhibin feed back negatively on FSH/LH. Classic trap: inverting FSH and LH targets — Leydig/LH is the pairing to remember (both start with L)."
  },
 
  {
    id: 160,
    category: "Endocrine System",
    question: "Growth hormone (GH) is secreted by the pituitary. Which statement about its secretion pattern and key actions is correct?",
    answers: [
      { text: "Peaks during sleep; directly stimulates bone/muscle growth and indirectly via IGF-1; hyperglycemic and lipolytic", correct: true },
      { text: "Peaks after meals; directly promotes adipose storage and is hypoglycemic; its secretion is inhibited by GHRH", correct: false },
      { text: "Secreted at a constant basal rate with no pulsatility; acts only indirectly via IGF-1 with no direct metabolic role", correct: false },
      { text: "Peaks exclusively during psychological stress; stimulates cellular glucose uptake; promotes protein catabolism in muscle", correct: false },
    ],
    explanation: "GH from somatotrophs: secretion PEAKS DURING SLEEP (and exercise/stress). Acts DIRECTLY (anabolic on muscle, lipolytic on fat, HYPERGLYCEMIC on carbohydrates) and INDIRECTLY via IGF-1 produced by the liver (stimulates cartilage/bone growth). Stimulated by GHRH; inhibited by GHIH (somatostatin). Trap: GH is HYPERGLYCEMIC (opposes insulin, spares glucose for neurons) — not hypoglycemic. It peaks during sleep, not after meals (that's insulin)."
  },
 
  {
    id: 161,
    category: "Endocrine System",
    question: "Prolactin is secreted by the pituitary. What is its primary function, and what is the dominant control over its secretion?",
    answers: [
      { text: "Initiates and maintains milk secretion; dominantly INHIBITED by dopamine (PIH) — without dopamine, prolactin is secreted", correct: true },
      { text: "Triggers uterine contractions during labor and cervical dilation; dominantly STIMULATED by dopamine from the hypothalamus", correct: false },
      { text: "Initiates and maintains milk secretion; dominantly STIMULATED by PRH — without active stimulation, secretion stops entirely", correct: false },
      { text: "Stimulates mammary gland development during puberty only; has no secretory role after delivery of the placenta", correct: false },
    ],
    explanation: "PROLACTIN from lactotrophs: initiates and maintains MILK SECRETION by mammary glands. Unique regulation: unlike most pituitary hormones, it is dominantly under INHIBITORY control — DOPAMINE (= PIH, prolactin-inhibiting hormone) continuously suppresses it. Remove dopamine → prolactin is secreted. Suckling inhibits dopamine → prolactin rises → milk produced. Trap: oxytocin causes milk EJECTION and uterine contractions — not prolactin. Prolactin makes the milk; oxytocin ejects it."
  },
 
  {
    id: 162,
    category: "Endocrine System",
    question: "ADH (vasopressin) is released from the neurohypophysis. What is its primary renal action and what triggers its release?",
    answers: [
      { text: "Increases water reabsorption in kidney tubules → concentrated urine; triggered by high plasma osmolarity (dehydration)", correct: true },
      { text: "Increases Na⁺ reabsorption in the proximal tubule → raises blood pressure; triggered by low plasma osmolarity after overhydration", correct: false },
      { text: "Promotes K⁺ excretion in the collecting duct → lowers blood K⁺ levels; triggered by a rise in aldosterone secretion", correct: false },
      { text: "Decreases water reabsorption in collecting tubules → produces dilute urine to flush excess solutes; triggered by high osmolarity", correct: false },
    ],
    explanation: "ADH (antidiuretic hormone / vasopressin), SYNTHESISED IN THE HYPOTHALAMUS and released from the NEUROHYPOPHYSIS: acts on renal collecting tubules → inserts aquaporin channels → INCREASES WATER REABSORPTION → produces concentrated, low-volume urine. Triggered by HIGH PLASMA OSMOLARITY detected by hypothalamic osmoreceptors (dehydration). Also causes vasoconstriction at high doses. Trap: Na⁺ reabsorption is aldosterone's job. Low osmolarity inhibits ADH (produces dilute urine — the opposite). The term 'antidiuretic' = against urine production."
  },
 
  {
    id: 163,
    category: "Endocrine System",
    question: "Oxytocin is released from the neurohypophysis. Which TWO actions does it mediate? (Choose the most complete answer)",
    answers: [
      { text: "Uterine contractions during labor (positive feedback) AND milk ejection from mammary glands when suckling", correct: true },
      { text: "Milk PRODUCTION in mammary alveolar cells AND initiation of the next menstrual cycle after delivery", correct: false },
      { text: "Uterine contractions during labor AND water reabsorption in the kidney collecting duct via aquaporin channels", correct: false },
      { text: "Cervical dilation only during the first stage of labor AND inhibition of prolactin secretion to pause milk after birth", correct: false },
    ],
    explanation: "OXYTOCIN, synthesised in the HYPOTHALAMUS and released from the NEUROHYPOPHYSIS, has two key actions: (1) UTERINE CONTRACTIONS during labor — positive feedback loop: cervical pressure → more oxytocin → stronger contractions → more pressure → delivery; (2) MILK EJECTION (not production) from mammary glands in response to suckling. Trap: PROLACTIN produces the milk; oxytocin ejects it. WATER reabsorption is ADH's role, not oxytocin's. Synthetic oxytocin (Pitocin) is used clinically to induce or augment labor."
  },

];

const CATEGORIES = [...new Set(QUESTIONS.map(q => q.category))];