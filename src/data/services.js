// Business units and service lines. `slug` drives the /services/:slug route.

export const services = [
  {
    slug: 'epc-contracting',
    title: 'EPC Contracting',
    icon: 'HardHat',
    image: '/images/switchgear-room.webp',
    summary: 'Engineering, procurement, construction and commissioning of electrical and automation systems for industrial and non-industrial facilities.',
    intro: [
      'Backed by more than 25 years as an EPC contractor, ASA has a proven track record of executing successful projects across a wide range of industrial and non-industrial facilities.',
      'We provide complete electrical engineering, specification and design covering all loads and power sources — industrial, power, water, residential and commercial — and integrate products from leading manufacturers in our own workshops to local and international standards.',
    ],
    serves: ['Industrial', 'Non-industrial', 'Renewable', 'International projects'],
    blocks: [
      {
        title: 'Engineering',
        text: 'Significant investment in electrical and automation engineering software tools.',
        items: ['System studies', 'Cable sizing & routing', 'Lighting, earthing & lightning protection', 'Light current systems', 'LV/MV equipment design', 'Automation concept development & programming', 'Process control & diagnostics', 'As-built documentation'],
      },
      {
        title: 'Procurement',
        text: 'Our global procurement network combined with local market knowledge.',
        items: ['Transformers', 'Switchgear', 'Bus ducts & cable trays', 'All cable types & terminations', 'AC/DC drives & soft starters', 'Automation systems'],
      },
      {
        title: 'Construction',
        text: 'Large-scale construction of industrial and infrastructure facilities.',
        items: ['Erection & erection supervision', 'HV, MV & LV electrical installation', 'Communication & instrumentation', 'Low current: telephone, fire detection, CCTV', 'Start-up & commissioning', 'Technical assistance & audit'],
      },
      {
        title: 'Training & Post Start-up',
        text: 'Delivered by highly qualified engineers, technicians and professionals.',
        items: ['Standard office training', 'On-site training', 'Post start-up support'],
      },
    ],
    gallery: ['/images/switchgear.webp', '/images/mcc-corridor.webp', '/images/mcc-plant.webp', '/images/breakers.webp'],
  },
  {
    slug: 'infrastructure',
    title: 'Infrastructure',
    icon: 'Route',
    image: '/images/infra-team.webp',
    summary: 'Full electrical infrastructure for mega developments — MV/LV networks, transformers, street lighting, water, sewage, irrigation, fire-fighting, roads and telecom.',
    intro: [
      'ASEC Automation brings decades of expertise delivering comprehensive EPC solutions for infrastructure development. We design, engineer, procure and construct integrated infrastructure systems that meet the highest technical and operational standards.',
      'Our experience spans domestic water networks, sewage and wastewater systems, irrigation, fire-fighting, roads, medium and low voltage networks, street lighting and telecom — so we manage multidisciplinary interfaces efficiently while ensuring reliability, safety and long-term sustainability.',
      'Today ASA is general contractor for full electrical infrastructure on some of the region\'s largest developments, including projects for Madinet Masr, Orascom Development, SODIC, Palm Hills and mega infrastructure in Riyadh.',
    ],
    serves: ['Real estate developers', 'Government & public authorities', 'PPP projects', 'Tourism destinations'],
    blocks: [
      {
        title: 'Electrical Studies & Design',
        items: ['Load schedule studies', 'MV/LV single line diagrams', 'MV/LV cable specifications & layouts', 'Voltage drop & short circuit analysis', 'Discrimination study & relay settings', 'RMU & transformer sizing', 'MV switchgear design'],
      },
      {
        title: 'Distribution & Lighting',
        items: ['Main & sub-main distribution boards', 'Pillar panels & coffrets', 'Distribution boxes & site layout panels', 'Automatic transfer switch panels', 'Lighting design & lux calculations', 'Earthing systems', 'Fire alarm systems design'],
      },
      {
        title: 'Mechanical Networks',
        items: ['Water networks', 'Sewage networks', 'Fire-fighting systems', 'Irrigation networks', 'Catch basin networks'],
      },
      {
        title: 'Civil & Telecom',
        items: ['Shop drawings for road networks', 'Manholes & inspection chambers', 'Kiosk / pillar transformer foundations', 'Telecom network shop drawings', 'Fibre optic installation details'],
      },
    ],
    gallery: ['/images/infra-survey.webp', '/images/infra-ducts.webp', '/images/infra-cable-spacers.webp', '/images/infra-manhole.webp'],
  },
  {
    slug: 'automation',
    title: 'Automation & Digitalization',
    icon: 'Cpu',
    image: '/images/ccr-curved.webp',
    summary: 'Process automation, PLC/DCS/SCADA systems, central control rooms, industrial networks and smart utilities.',
    intro: [
      'ASEC Automation provides the full package of engineering and commissioning for industrial process automation — from concept and PLC programming through SCADA, DCS and industrial networking to central control room delivery.',
      'Because we deliver electrical and automation under one roof, clients get the strength of integration: one company responsible for the complete system.',
    ],
    serves: ['Process automation', 'SCADA systems', 'Smart cities', 'Energy systems', 'Smart utilities & energy networks'],
    blocks: [
      {
        title: 'Cement',
        text: 'Automated material handling, kiln operation and predictive maintenance — including complete CCR-PCS upgrades for LafargeHolcim, CEMEX and Titan plants.',
        items: ['Kiln, raw mill & cement mill control', 'CCR design & build', 'PCS migrations & upgrades'],
      },
      {
        title: 'Water & Wastewater',
        text: 'Safe, potable water with consistent treatment quality and remote fault detection.',
        items: ['Chemical dosing, filtration & disinfection', 'Pressure, flow & quality across the grid', 'Reservoir level & pump control', 'WWTP biological treatment & sludge', 'Leak detection & pipeline health'],
      },
      {
        title: 'Oil & Gas',
        text: 'Upstream-to-downstream automation with integrated safety systems.',
        items: ['PRMS automation systems', 'DCS upgrades & spares', 'SCADA for gas networks', 'Commissioning teams (Zohr, WND)'],
      },
      {
        title: 'Irrigation & Agriculture',
        text: 'Smart systems that use soil and weather data for efficiency.',
        items: ['Precision drip & sprinkler control', 'Canal gate automation', 'Remote pumping stations', 'IoT soil moisture sensing', 'GSM / LoRa remote control'],
      },
    ],
    tech: ['PLC', 'DCS', 'SCADA', 'RTU', 'HMI', 'IoT & smart sensors', 'Industrial Ethernet', 'Smart meters'],
    gallery: ['/images/scada-kiln.webp', '/images/ccr-render-1.webp', '/images/plc-modules.webp', '/images/ccr-wide.webp'],
  },
  {
    slug: 'facility-management',
    title: 'Operation & Maintenance / FM',
    icon: 'Wrench',
    image: '/images/ccr-engineers.webp',
    summary: 'Integrated hard-services facility management, long-term O&M agreements, overhauls, testing and in-house light current / ELV services.',
    intro: [
      'With a maintenance team of around 250 qualified and experienced staff, ASA delivers integrated maintenance through long-term management contracts or service agreements with a defined completion-based timetable.',
      'We apply a life-cycle approach to asset maintenance, prepare and manage spare-part schedules, and coordinate with certified third parties where needed. Unlike most FM providers, we deliver specialised light current and ELV services through dedicated in-house teams rather than subcontractors.',
    ],
    serves: ['Industrial', 'Residential', 'Commercial & retail', 'Healthcare', 'Transportation', 'Digital FM'],
    blocks: [
      {
        title: 'Hard Services',
        items: ['LV & MV electrical systems', 'Indoor & outdoor lighting', 'Generators & UPS', 'Power distribution & switchgear', 'HVAC', 'Elevators & escalators', 'Transformer maintenance & testing', 'Plumbing, water tanks & drainage', 'Building fabric maintenance'],
      },
      {
        title: 'Light Current & ELV',
        items: ['Fire alarm & fire protection', 'CCTV & video surveillance', 'Fibre optic & structured cabling', 'Building management systems (BMS)', 'Access control & security', 'Public address / voice evacuation', 'ELV monitoring & integration'],
      },
      {
        title: 'Operation & Monitoring',
        items: ['24/7 system monitoring', 'Alarm & event response', 'System health & performance monitoring', 'Incident identification & escalation', 'Coordination with site management'],
      },
      {
        title: 'Industrial Maintenance',
        items: ['Long-term service agreements', 'Overhauling projects', 'Commissioning of LV/MV switchgear, drives, motors & instruments', 'Motor analysis & thermal imaging', 'Power quality & circuit breaker testing'],
      },
    ],
    gallery: ['/images/ccr-room.webp', '/images/switchgear-2.webp', '/images/plc-cabinets.webp', '/images/ccr-operators.webp'],
  },
  {
    slug: 'workshops',
    title: 'Manufacturing & Workshops',
    icon: 'Factory',
    image: '/images/panel-row.webp',
    summary: 'Certified Siemens & Schneider panel builder — LV switchboards, MCCs, PLC panels and EV chargers — plus a full motor rewinding workshop.',
    intro: [
      'ASA workshops are well-equipped facilities managed by experts in designing and building all types of electrical switchboards and control panels. With more than 20 years of panel-building experience, ASEC Automation is one of Egypt\'s leading low-voltage panel builders.',
      'We design, build and supply panels to client specification without limitation to a specific brand — only to ultimate quality — with assembly, copper bending and testing equipment in-house and an annual review of the quality of every product used.',
      'Our workshops in Tebbin (Cairo) and the Alexandria Free Zone offer customs-free and sales-tax-free supply for overseas projects, close to the Suez and Alexandria ports.',
    ],
    serves: ['Industrial panels', 'Commercial panels', 'Motor rewinding', 'EV chargers', 'Smart meters'],
    blocks: [
      {
        title: 'Panel Assembly',
        items: ['LV distribution boards & main switchboards', 'Motor control centres (MCC)', 'Auxiliary control centres (ACC)', 'Marshalling panels (MPL / MPI)', 'PLC & industrial control panels', 'Synchronising panels', 'ATS / MTS panels', 'Power factor correction (APFC)'],
      },
      {
        title: 'Control & Special Cabinets',
        items: ['BMS / DDC HVAC control cabinets', 'Variable speed drive cabinets', 'Lighting control cabinets', 'Motor / pump control panels', 'Network & Ethernet switch panels', 'EV charger assembly'],
      },
      {
        title: 'Rewinding Workshop',
        items: ['Motor services & testing', 'MV motor overhaul', 'Stator rewinding', 'Slip-ring motors', 'Motor assembly', 'On-site services & post-overhaul support'],
      },
      {
        title: 'Free-Zone Logistics',
        items: ['Customs-free for overseas projects', 'Sales-tax-free for overseas projects', 'Close to Suez & Alexandria ports', 'Heavy export & import infrastructure', 'Flexible strategic routing'],
      },
    ],
    gallery: ['/images/workshop-panels.webp', '/images/panel-assembly.webp', '/images/panel-wiring.webp', '/images/drives-cabinet.webp'],
  },
  {
    slug: 'solar',
    title: 'Solar Energy',
    icon: 'Sun',
    image: '/images/solar-site-team.webp',
    summary: 'Certified solar EPC: design, installation and commissioning of utility-scale and rooftop PV plants.',
    intro: [
      'ASEC Automation is a certified solar energy EPC company that designs, installs and commissions PV power plants for commercial, industrial and residential clients — providing electricity that is better, cheaper and cleaner than conventional energy.',
      'Solar is one of our newest and fastest-growing sectors. Our success rests on rigorous studies, meticulous execution and a fully engaged PMO.',
    ],
    serves: ['Utility-scale PV', 'Industrial rooftops', 'Hospitality & commercial', 'Agriculture'],
    blocks: [
      {
        title: 'Design Software',
        items: ['PVsyst — yield simulation, losses & economics', 'SketchUp + Skelion — 3D layout & shading', 'Revit — BIM coordination', 'AutoCAD — detailed drawings'],
      },
      {
        title: 'Testing Equipment',
        items: ['Thermal imaging cameras', 'I-V curve testers', 'DC voltage multimeters'],
      },
      {
        title: 'Selected Plants',
        items: ['Al Takamol PV — 30 MWp (phase 1: 8 MWp)', 'El-Minya PV — 7 MWp', 'Dina Farms PV — 6 MWp', 'Nabq, Sharm El-Sheikh PV — 5.6 MWp', 'Aurora PV — 750 kWp', 'Cleopatra PV — 190 kWp'],
      },
      {
        title: 'Our Solar Vision',
        items: ['Build a world-class portfolio of solar assets', 'Lead the energy transition with innovative solutions', 'Efficient and safe execution of every project', 'Highest standards of quality and sustainability'],
      },
    ],
    gallery: ['/images/solar-tracker.webp', '/images/solar-row.webp', '/images/solar-under.webp', '/images/solar-field.webp'],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
