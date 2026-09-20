const q = (text, options, correct, explanation) => ({ text, options, correct, explanation });
const p = (text, options, correct, explanation) => ({ text, options, correct, explanation, type: "practical" });
const w = (week, dates, content, assessment = "") => ({ week, dates, content, assessment });

// Contenidos transcritos y agrupados a partir de los programas UVG 2026
// proporcionados por el usuario. Las preguntas son originales de Nexo Estudio UVG.
export const curriculum = {
  quimica: {
    name: "Química 2", icon: "⬡", program: "Programa Química 2 · UVG · Ciclo 2, 2026",
    topics: {
      termoquimica: { name: "Termoquímica, calorimetría y entalpía", questions: [
        q("En un calorímetro ideal, el calor perdido por el cuerpo caliente es…",["mayor que el ganado","igual y opuesto al ganado por el entorno","siempre cero","igual a la entalpía de formación"],1,"Por conservación de energía, q_sistema + q_entorno = 0 cuando no hay pérdidas."),
        q("La ley de Hess funciona porque la entalpía es…",["una función de estado","una propiedad cinética","siempre positiva","dependiente de la ruta"],0,"El cambio de entalpía depende de los estados inicial y final, no de la trayectoria."),
        q("Para calentar una masa m sin cambio de fase se utiliza…",["q = mcΔT","q = m/ΔT","q = ΔH/T","q = PV"],0,"El calor sensible es el producto de masa, calor específico y cambio de temperatura."),
        q("Una reacción exotérmica a presión constante presenta…",["ΔH > 0","ΔH < 0","ΔH = ΔS","energía de activación nula"],1,"El sistema transfiere calor al entorno y su entalpía disminuye.")
      ]},
      entropia: { name: "Entropía y espontaneidad", questions: [
        q("A temperatura y presión constantes, un proceso es espontáneo si…",["ΔH siempre es positivo","ΔG < 0","ΔS del sistema es cero","Ea = 0"],1,"El criterio termodinámico bajo esas condiciones es un cambio de energía libre de Gibbs negativo."),
        q("La segunda ley exige que en un proceso espontáneo…",["ΔS_sistema siempre disminuya","ΔS_universo sea positiva","ΔH sea cero","la temperatura sea constante"],1,"La entropía total del universo aumenta para un proceso espontáneo."),
        q("Si ΔH > 0 y ΔS > 0, la espontaneidad es favorecida por…",["temperaturas suficientemente altas","temperaturas suficientemente bajas","cualquier temperatura","ninguna temperatura"],0,"En ΔG = ΔH − TΔS, el término entrópico puede dominar a temperatura alta."),
        q("La entropía absoluta de un cristal perfecto a 0 K es…",["infinita","cero","negativa","igual a ΔH"],1,"Es la formulación ideal de la tercera ley de la termodinámica.")
      ]},
      cinetica: { name: "Cinética y mecanismos de reacción", questions: [
        q("Un catalizador aumenta la rapidez porque…",["aumenta ΔG°","reduce la energía de activación","cambia K","crea reactivos"],1,"Proporciona una ruta alternativa con menor barrera energética."),
        q("Para una reacción de primer orden, una gráfica lineal se obtiene con…",["[A] contra t","1/[A] contra t","ln[A] contra t","velocidad contra [A]²"],2,"La ley integrada es ln[A] = ln[A]₀ − kt."),
        q("El orden global de una ley v = k[A]²[B] es…",["1","2","3","no puede saberse"],2,"Se suman los exponentes experimentales: 2 + 1 = 3."),
        q("Un mecanismo propuesto debe reproducir…",["solo la ecuación global","la ecuación global y la ley de velocidad observada","solo el paso más rápido","el valor de ΔH únicamente"],1,"Debe ser compatible tanto con la estequiometría neta como con la evidencia cinética.")
      ]},
      equilibrio: { name: "Equilibrio químico y de solubilidad", questions: [
        q("Si K es mucho mayor que 1, el equilibrio favorece…",["reactivos","productos","catalizadores","cantidades iguales necesariamente"],1,"Un K grande indica una relación de actividades que favorece productos."),
        q("Un catalizador agregado a un sistema en equilibrio…",["aumenta K","desplaza el equilibrio","acelera ambas direcciones","cambia ΔG°"],2,"Reduce las barreras directa e inversa sin alterar la composición de equilibrio."),
        q("Añadir un ion común a una sal poco soluble generalmente…",["aumenta su solubilidad","disminuye su solubilidad","no produce efecto","cambia la temperatura"],1,"El equilibrio se desplaza hacia el sólido para contrarrestar el ion agregado."),
        q("Al aumentar la presión, un equilibrio gaseoso se desplaza hacia…",["el lado con más moles gaseosos","el lado con menos moles gaseosos","los sólidos","ningún lado en todos los casos"],1,"Si los moles gaseosos difieren, el sistema favorece el lado de menor cantidad gaseosa.")
      ]},
      acidos: { name: "Ácidos, bases y amortiguadores", questions: [
        q("Una disolución con pH 3 tiene frente a una de pH 5…",["2 veces más H⁺","20 veces más H⁺","100 veces más H⁺","100 veces menos H⁺"],2,"La escala es logarítmica: dos unidades representan un factor de 10²."),
        q("Un tampón resiste cambios de pH porque contiene…",["solo un ácido fuerte","un ácido débil y su base conjugada","agua pura","una sal insoluble únicamente"],1,"El par conjugado consume pequeñas adiciones de ácido o base."),
        q("En Henderson–Hasselbalch, si [base] = [ácido], entonces…",["pH = 0","pH = pKa","pH = 14","Ka = 0"],1,"El logaritmo de la razón uno es cero, por lo que pH = pKa."),
        q("Según Brønsted–Lowry, una base es una especie que…",["dona protones","acepta protones","dona electrones siempre","libera oxígeno"],1,"La definición se basa en transferencia de protones.")
      ]}
    },
    schedule: [
      w(1,"6–10 jul","Presentación y repaso de Química 1"),w(2,"13–17 jul","Termoquímica; energía y estequiometría"),w(3,"20–24 jul","Calorimetría y cálculo experimental de entalpías"),w(4,"27–31 jul","Calor, energía interna y trabajo","Corto 1"),w(5,"3–7 ago","Ley de Hess y entalpías de formación"),w(6,"10–14 ago","Entropía y predicción de espontaneidad"),w(7,"17–21 ago","Interpretación energética de la entropía","Corto 2"),w(8,"24–28 ago","Primera evaluación formal"),w(9,"31 ago–4 sep","Velocidad y ley de velocidad"),w(10,"7–11 sep","Perfiles y mecanismos de reacción","Corto 3"),w(11,"21–25 sep","Factores que afectan la velocidad"),w(12,"28 sep–2 oct","Cinética de primer y segundo orden","Corto 4"),w(13,"5–9 oct","Segunda evaluación formal"),w(14,"12–16 oct","Equilibrio dinámico, K y Le Châtelier"),w(15,"19–23 oct","Equilibrio gaseoso y de solubilidad"),w(16,"26–30 oct","Ácidos, bases, pH y equilibrio ácido–base"),w(17,"2–6 nov","Amortiguadores, ion común y Henderson–Hasselbalch"),w(18,"9–13 nov","Ejercitación y repaso","Corto 5"),w(19,"16–20 nov","Tercera evaluación formal")
    ]
  },
  fisica: {
    name: "Física 1", icon: "↗", program: "Programa de Iniciativa Académica Física 1 · UVG · Ciclo 2, 2026",
    topics: {
      vectores: { name: "Medición y vectores", questions: [
        q("Para sumar desplazamientos bidimensionales se suman…",["solo magnitudes","componentes correspondientes","tiempos","masas"],1,"La suma vectorial se realiza componente por componente."),
        q("El producto escalar de vectores perpendiculares es…",["1","−1","0","infinito"],2,"A·B = AB cos 90° = 0."),
        q("Un vector unitario se caracteriza por…",["magnitud uno","dirección cero","no tener componentes","ser siempre horizontal"],0,"Describe una dirección conservando magnitud unitaria."),
        q("La consistencia dimensional exige que…",["todos los números sean enteros","los términos sumados tengan iguales dimensiones","no existan constantes","las unidades se cancelen siempre"],1,"Solo pueden sumarse magnitudes dimensionalmente compatibles.")
      ]},
      cinematica: { name: "Cinemática en una y dos dimensiones", questions: [
        q("La pendiente de una gráfica posición–tiempo representa…",["aceleración","velocidad","fuerza","energía"],1,"La razón de cambio de posición respecto del tiempo es la velocidad."),
        q("En el punto más alto de un proyectil sin resistencia del aire…",["la aceleración es cero","la velocidad vertical es cero y la aceleración es g","toda la velocidad es cero","la gravedad cambia de signo"],1,"La componente vertical se anula instantáneamente, pero la gravedad persiste."),
        q("La velocidad relativa de A respecto de B es…",["vA + vB siempre","vA − vB","vA·vB","|vA|/|vB|"],1,"Se resta la velocidad del marco B a la de A."),
        q("En movimiento circular uniforme cambia…",["solo la masa","la dirección de la velocidad","la rapidez y la masa","el tiempo"],1,"La rapidez es constante, pero el vector velocidad gira continuamente.")
      ]},
      dinamica: { name: "Leyes de Newton y movimiento circular", questions: [
        q("Si la fuerza neta es cero, un objeto…",["debe estar detenido","mantiene velocidad constante","acelera","pierde masa"],1,"La primera ley admite reposo o movimiento rectilíneo uniforme."),
        q("Acción y reacción actúan…",["sobre el mismo cuerpo","sobre cuerpos diferentes","solo durante choques","en la misma dirección"],1,"Son fuerzas iguales y opuestas aplicadas a objetos distintos."),
        q("La fuerza centrípeta es…",["una fuerza nueva","la componente radial de la fuerza neta","una reacción ficticia siempre","igual a la velocidad"],1,"Puede ser producida por tensión, gravedad, fricción u otras fuerzas."),
        q("En un diagrama de cuerpo libre deben incluirse…",["fuerzas ejercidas sobre el cuerpo","fuerzas que el cuerpo ejerce sobre otros","velocidades como fuerzas","trayectorias futuras"],0,"El diagrama aísla el objeto y representa únicamente fuerzas externas sobre él.")
      ]},
      energia: { name: "Trabajo, energía y conservación", questions: [
        q("El trabajo neto equivale al cambio de…",["energía cinética","masa","momento angular siempre","temperatura"],0,"Es el teorema trabajo–energía cinética."),
        q("Una fuerza conservativa permite definir…",["energía potencial","masa variable","impulso nulo","velocidad constante"],0,"Su trabajo depende solo de los extremos y se representa mediante energía potencial."),
        q("Si solo actúan fuerzas conservativas, se conserva…",["energía mecánica","fuerza","aceleración","potencia"],0,"La suma de energía cinética y potencial permanece constante."),
        q("El trabajo de una fuerza perpendicular al desplazamiento es…",["máximo","cero","negativo siempre","igual a la potencia"],1,"W = Fd cos θ y cos 90° = 0.")
      ]},
      momento: { name: "Impulso, momento, colisiones y centro de masa", questions: [
        q("El momento lineal total se conserva cuando…",["no hay fuerzas internas","el impulso externo neto es cero","la energía cinética se conserva","las masas son iguales"],1,"Las fuerzas internas se cancelan por pares; importa el impulso externo."),
        q("En un choque perfectamente inelástico se conserva…",["energía cinética","momento lineal","velocidad individual","ninguna magnitud"],1,"El momento se conserva en un sistema aislado aunque disminuya la energía cinética."),
        q("El impulso de una fuerza es igual al cambio de…",["energía potencial","momento lineal","masa","posición"],1,"J = ∫Fdt = Δp."),
        q("El centro de masa de dos partículas se ubica más cerca de…",["la partícula de menor masa","la partícula de mayor masa","el origen siempre","la de mayor velocidad"],1,"La posición promedio está ponderada por las masas.")
      ]}
    },
    schedule: [
      w(1,"6–12 jul","Medición, trigonometría y vectores"),w(2,"13–19 jul","Productos, componentes, posición y desplazamiento"),w(3,"20–26 jul","Vectores y movimiento en una dimensión"),w(4,"27 jul–2 ago","Gráficas, aceleración y caída libre"),w(5,"3–9 ago","Problemas de alcance y encuentro","Parcial 1"),w(6,"10–16 ago","Movimiento bidimensional y proyectiles"),w(7,"17–23 ago","Movimiento circular y velocidad relativa"),w(8,"24–30 ago","Fuerza, masa, peso y leyes de Newton"),w(9,"31 ago–6 sep","Aplicaciones de leyes de Newton","Parcial 2"),w(10,"7–13 sep","Newton y movimiento circular"),w(11,"21–27 sep","Movimiento circular; trabajo y energía"),w(12,"28 sep–4 oct","Trabajo, fuerzas conservativas y energía"),w(13,"5–11 oct","Conservación de energía","Parcial 3"),w(14,"12–18 oct","Aplicaciones de conservación"),w(15,"19–25 oct","Momento lineal e impulso"),w(16,"26 oct–1 nov","Colisiones en una y dos dimensiones"),w(17,"2–8 nov","Centro de masa","Parcial 4"),w(18,"9–15 nov","Problemas integradores de conservación"),w(19,"16–22 nov","Repaso general"),w(20,"23–29 nov","Todos los temas","Examen de cierre")
    ]
  },
  biologia: {
    name: "Biología General", icon: "⌘", program: "PIA Biología General · UVG · Ciclo 2, 2026",
    topics: {
      ecologia: { name: "Ecología de poblaciones, comunidades y ecosistemas", questions: [
        q("Una población biológica está formada por…",["organismos de distintas especies","individuos de la misma especie en un área y tiempo","todos los factores abióticos","un solo organismo"],1,"La definición integra identidad específica, espacio y tiempo."),
        q("La capacidad de carga representa…",["la tasa de mutación","el tamaño poblacional sostenible por el ambiente","la diversidad genética","la productividad primaria"],1,"K expresa el límite ambiental aproximado bajo condiciones dadas."),
        q("La energía disponible suele disminuir entre niveles tróficos porque…",["se crea materia","parte se disipa como calor metabólico","los productores no respiran","la energía se recicla completamente"],1,"La transferencia energética es ineficiente y una fracción se disipa en cada nivel."),
        q("Una comunidad incluye…",["solo una población","poblaciones de distintas especies que interactúan","solo componentes abióticos","todos los biomas"],1,"La ecología de comunidades estudia interacciones entre poblaciones coexistentes.")
      ]},
      evolucion: { name: "Sistemática, especiación y macroevolución", questions: [
        q("Un clado incluye…",["especies visualmente parecidas","un ancestro y todos sus descendientes","solo organismos vivos","taxones de igual tamaño"],1,"Los grupos monofiléticos contienen al ancestro común y toda su descendencia."),
        q("La selección natural actúa directamente sobre…",["necesidades futuras","variación fenotípica heredable","mutaciones dirigidas","ecosistemas completos"],1,"Las diferencias heredables de éxito reproductivo modifican frecuencias poblacionales."),
        q("La especiación requiere el establecimiento de…",["idénticos nichos","aislamiento reproductivo","igualdad genética total","ausencia de selección"],1,"Las barreras al flujo génico permiten divergencia independiente."),
        q("En un cladograma, un nodo representa…",["una extinción obligatoria","un ancestro común hipotético","el organismo más complejo","una similitud superficial"],1,"Los nodos marcan eventos de divergencia desde un ancestro común.")
      ]},
      microbiologia: { name: "Virus, procariotas y microorganismos eucariotas", questions: [
        q("Los virus dependen de células porque…",["carecen de información genética","no poseen maquinaria autónoma completa para replicarse","son bacterias pequeñas","producen ATP por sí solos"],1,"Utilizan maquinaria celular del hospedero para expresar y replicar su genoma."),
        q("Bacteria y Archaea se distinguen, entre otros rasgos, por…",["tener núcleo","composición de membrana y maquinaria molecular","carecer de ADN","ser siempre patógenas"],1,"Poseen diferencias profundas en lípidos de membrana y procesos de información."),
        q("La eucariogénesis explica el origen de…",["virus de ARN","la organización celular eucariota","la fotosíntesis bacteriana únicamente","los minerales"],1,"Integra cambios celulares y eventos endosimbióticos en el origen eucariota."),
        q("La tinción de Gram diferencia bacterias principalmente por…",["forma del ADN","estructura de la envoltura celular","tipo de movimiento","tasa de mutación"],1,"La retención diferencial del colorante depende especialmente del peptidoglucano y la envoltura.")
      ]},
      fungi_plantas: { name: "Fungi y Archaeplastida–Plantae", questions: [
        q("Los hongos obtienen nutrientes principalmente mediante…",["fotosíntesis","absorción después de digestión externa","fagocitosis siempre","quimiosíntesis exclusiva"],1,"Secretan enzimas y absorben moléculas resultantes."),
        q("Una innovación clave de las plantas vasculares es…",["ausencia de pared","tejido conductor especializado","pérdida de clorofila","reproducción viral"],1,"Xilema y floema permiten transporte y mayor tamaño corporal."),
        q("Las briofitas dependen especialmente del agua para…",["fotosintetizar","el desplazamiento de gametos masculinos","formar celulosa","respirar"],1,"Los espermatozoides flagelados requieren una película de agua."),
        q("La alternancia de generaciones implica fases multicelulares…",["diploide y haploide","solo diploides","solo bacterianas","sin meiosis"],0,"Gametofito haploide y esporofito diploide alternan en el ciclo vital.")
      ]},
      animalia: { name: "Animalia: desarrollo, protóstomos y deuteróstomos", questions: [
        q("En términos generales, protóstomos y deuteróstomos difieren en…",["presencia de ADN","patrones tempranos de desarrollo embrionario","capacidad de respirar","uso de ATP"],1,"Se distinguen por patrones de segmentación y destino del blastoporo, entre otros caracteres."),
        q("La gastrulación establece principalmente…",["las capas germinales","el código genético","la pared celular","los anticuerpos"],0,"Reorganiza el embrión y origina las capas germinales."),
        q("Una sinapomorfía es…",["un carácter ancestral compartido","un carácter derivado compartido","cualquier semejanza","un rasgo no heredable"],1,"Es evidencia útil para reconocer clados."),
        q("Los cordados presentan en alguna etapa…",["notocorda","exoesqueleto de quitina siempre","simetría radial exclusiva","ausencia de tubo nervioso"],0,"La notocorda es una característica diagnóstica del filo.")
      ]},
      fisiologia: { name: "Fisiología animal y homeostasis", questions: [
        q("La homeostasis se mantiene principalmente mediante…",["retroalimentación negativa","mutación constante","ausencia de cambio","retroalimentación positiva siempre"],0,"La retroalimentación negativa contrarresta desviaciones del intervalo funcional."),
        q("El intercambio gaseoso eficiente requiere superficies…",["gruesas y secas","delgadas, húmedas y extensas","impermeables","sin gradiente"],1,"Estas propiedades facilitan difusión y sostienen gradientes."),
        q("La función integradora principal del sistema nervioso es…",["transportar oxígeno","recibir, procesar y coordinar respuestas","digerir macromoléculas","filtrar sangre"],1,"Integra información sensorial y genera respuestas rápidas."),
        q("El sistema endocrino comunica mediante…",["impulsos solo eléctricos","hormonas transportadas a células diana","paredes celulares","anticuerpos únicamente"],1,"Las hormonas actúan sobre células con receptores adecuados.")
      ]}
    },
    schedule: [
      w(1,"6–10 jul","Ecología de poblaciones"),w(2,"13–17 jul","Ecología de comunidades y ecosistemas","Corto U1"),w(3,"20–24 jul","Especies, especiación y macroevolución"),w(4,"27–31 jul","Árboles filogenéticos y cladogramas","Corto U2"),w(5,"3–7 ago","Virus y entidades subvirales"),w(6,"10–14 ago","Bacteria y Archaea","Corto U3"),w(7,"17–21 ago","Eucariogénesis y microorganismos eucariotas"),w(8,"24–28 ago","Fungi e invasión de la tierra","Corto U4"),w(9,"31 ago–4 sep","Algas, briofitas y plantas vasculares","Corto U5"),w(10,"7–11 sep","Fisiología de plantas","Corto U6"),w(11,"21–25 sep","Animalia: origen y desarrollo embrionario"),w(12,"28 sep–2 oct","Protóstomos"),w(13,"5–9 oct","Deuteróstomos","Corto U7"),w(14,"12–16 oct","Sistema musculoesquelético"),w(15,"19–23 oct","Sistema nervioso y sentidos"),w(16,"26–30 oct","Sistemas circulatorio y respiratorio"),w(17,"2–6 nov","Sistemas digestivo y excretor"),w(18,"9–13 nov","Sistemas inmune y endocrino","Examen de laboratorio"),w(19,"16–20 nov","Integración de fisiología animal","Corto U8")
    ]
  },
  calculo: {
    name: "Cálculo 1", icon: "∫", program: "MM2028 Cálculo 1 · UVG · Cronograma 2026",
    topics: {
      limites: { name: "Límites y continuidad", questions: [
        q("El límite de una función en x = a depende principalmente de…",["el valor exacto de f(a)","el comportamiento al acercarse a a","la derivada global","el área"],1,"El límite describe comportamiento local y puede existir aunque f(a) no exista."),
        q("Si los límites laterales son distintos, el límite bilateral…",["es cero","es infinito","no existe","es el promedio"],2,"Ambos límites laterales deben existir y coincidir."),
        q("Una función es continua en a cuando…",["solo existe f(a)","existe el límite y coincide con f(a)","su derivada es positiva","no cruza el eje"],1,"Se requieren definición, existencia del límite e igualdad entre ambos valores."),
        q("Una asíntota vertical x = a puede aparecer cuando…",["el límite es infinito al acercarse a a","f(a)=0 siempre","la derivada es constante","el área es finita"],0,"La divergencia de la función cerca de a señala comportamiento asintótico vertical.")
      ]},
      derivadas: { name: "Derivadas y técnicas de diferenciación", questions: [
        q("Geométricamente, f′(a) representa…",["área acumulada","pendiente tangente","intercepto","concavidad siempre"],1,"Es el límite de pendientes secantes."),
        q("La derivada de xⁿ es…",["nxⁿ⁻¹","xⁿ⁺¹/(n+1)","n+x","x/n"],0,"Es la regla de la potencia."),
        q("Para f(g(x)), la regla de la cadena produce…",["f′+g′","f′(g(x))g′(x)","f′/g′","f(g′(x))"],1,"La derivada externa se evalúa en la interna y se multiplica por su derivada."),
        q("La diferenciación implícita es útil cuando…",["y no está despejada fácilmente","la función es constante","no hay variables","solo existen números"],0,"Permite derivar relaciones donde y está definida implícitamente.")
      ]},
      aplicaciones: { name: "Aplicaciones de la derivada", questions: [
        q("Si f′ cambia de positiva a negativa en c, existe…",["mínimo local","máximo local","asíntota obligatoria","discontinuidad"],1,"La función pasa de crecer a decrecer."),
        q("El teorema del valor medio garantiza un c donde…",["f(c)=0","f′(c) iguala la pendiente secante","f′′(c)=0","f(c) es máxima"],1,"Bajo continuidad y derivabilidad, alguna pendiente tangente coincide con la pendiente promedio."),
        q("En optimización se deben revisar…",["solo puntos críticos","puntos críticos y extremos del dominio factible","solo el origen","valores aleatorios"],1,"Los extremos absolutos pueden ocurrir también en fronteras."),
        q("La aproximación lineal cerca de a utiliza…",["f(a)+f′(a)(x−a)","f′(x)²","∫f","f(a)/x"],0,"La recta tangente aproxima localmente la función.")
      ]},
      integrales: { name: "Integrales y aplicaciones", questions: [
        q("Una integral definida representa…",["pendiente instantánea","acumulación neta","máximo siempre","valor inicial"],1,"Suma contribuciones infinitesimales con signo."),
        q("Si F′=f, entonces ∫ₐᵇf(x)dx es…",["F(a)+F(b)","F(b)−F(a)","f(b)−f(a)","F′(b)"],1,"Es la regla de evaluación del teorema fundamental."),
        q("La sustitución u=g(x) busca…",["transformar la integral usando la regla de cadena inversa","eliminar límites siempre","derivar dos veces","aproximar por rectas"],0,"Reconoce una composición acompañada por la derivada de su parte interna."),
        q("El método de discos/arandelas suma…",["longitudes tangentes","áreas de secciones perpendiculares al eje","pendientes","fuerzas"],1,"El volumen se obtiene integrando áreas transversales."),
        q("El trabajo de una fuerza variable F(x) entre a y b es…",["F(b−a) siempre","∫ₐᵇF(x)dx","F′(b)","F(a)+F(b)"],1,"La integral acumula los aportes diferenciales de fuerza por desplazamiento.")
      ]}
    },
    schedule: [
      w(1,"6–10 jul","Límite y leyes de límites"),w(2,"13–17 jul","Límites trigonométricos, compresión y definición gráfica"),w(3,"20–24 jul","Continuidad, límites al infinito y asíntotas"),w(4,"27–31 jul","Derivadas, razones de cambio y funciones elementales","Simulacro 1"),w(5,"3–7 ago","Producto, cociente y derivadas trigonométricas","Parcial 1 / Autoaprendizaje 1"),w(6,"10–14 ago","Regla de la cadena y diferenciación implícita"),w(7,"17–21 ago","Logarítmicas, trigonométricas inversas e hiperbólicas"),w(8,"24–28 ago","Cadena general y razones relacionadas"),w(9,"31 ago–4 sep","Indeterminaciones y regla de L’Hôpital","Parcial 2 / Autoaprendizaje 2"),w(10,"7–11 sep","Aproximaciones lineales, máximos y mínimos"),w(11,"21–25 sep","Teorema del valor medio y forma de gráficas"),w(12,"28 sep–2 oct","Trazo de curvas"),w(13,"5–9 oct","Optimización"),w(14,"12–16 oct","Antiderivadas, área y distancia","Simulacro 2"),w(15,"19–23 oct","Integral definida y teorema fundamental","Parcial 3 / Autoaprendizaje 3"),w(16,"26–30 oct","Sustitución y área entre curvas"),w(17,"2–6 nov","Volúmenes por discos y arandelas"),w(18,"9–13 nov","Volúmenes por cascarones cilíndricos","Simulacro 3"),w(19,"16–20 nov","Trabajo","Parcial 4")
    ]
  }
};

export const practicalQuestionBank = {
  quimica: {
    termoquimica: [
      p("Se calientan 100 g de agua (c = 4.18 J·g⁻¹·°C⁻¹) de 20 a 25 °C. ¿Cuánto calor absorbe?",["2.09 kJ","20.9 kJ","0.478 kJ","209 kJ"],0,"q = mcΔT = (100)(4.18)(5) = 2090 J = 2.09 kJ."),
      p("Una reacción libera 50 kJ por mol. Si reaccionan 0.40 mol, ¿cuál es ΔH del proceso?",["−125 kJ","−20 kJ","+20 kJ","+125 kJ"],1,"Se escala la entalpía molar: (−50 kJ/mol)(0.40 mol) = −20 kJ." )
    ],
    entropia: [
      p("Para un proceso con ΔH = 40 kJ/mol y ΔS = 0.150 kJ·mol⁻¹·K⁻¹ a 300 K, ¿cuál es ΔG?",["−5 kJ/mol","5 kJ/mol","85 kJ/mol","−85 kJ/mol"],0,"ΔG = ΔH − TΔS = 40 − (300)(0.150) = −5 kJ/mol."),
      p("Un proceso tiene ΔH > 0 y ΔS < 0. ¿En qué intervalo de temperatura será espontáneo?",["Solo a temperatura alta","Solo a temperatura baja","A cualquier temperatura","A ninguna temperatura"],3,"ΔG = ΔH − TΔS conserva ambos términos positivos; por ello ΔG > 0 a toda T." )
    ],
    cinetica: [
      p("Si v = k[A]² y [A] se duplica, la velocidad se multiplica por…",["2","4","6","8"],1,"La razón es (2[A])²/[A]² = 4."),
      p("Una reacción de primer orden tiene k = 0.20 min⁻¹. ¿Qué fracción de A queda después de 5 min?",["e⁻¹ ≈ 0.368","e¹ ≈ 2.718","0.80","0.20"],0,"[A]/[A]₀ = e^(−kt) = e^(−0.20·5) = e⁻¹." )
    ],
    equilibrio: [
      p("Para A ⇌ B, inicialmente [A]=1.0 M y [B]=0. Si en equilibrio [B]=0.60 M, ¿cuál es Kc?",["0.40","0.60","1.5","2.5"],2,"[A]eq = 0.40 M y Kc=[B]/[A]=0.60/0.40=1.5."),
      p("Para Q < K, ¿en qué dirección progresa espontáneamente la reacción?",["Hacia reactivos","Hacia productos","No cambia","K disminuye"],1,"El sistema forma productos hasta que el cociente Q alcance K." )
    ],
    acidos: [
      p("¿Cuál es el pH de una disolución con [H⁺] = 1.0×10⁻³ M?",["3","11","−3","7"],0,"pH = −log(1.0×10⁻³) = 3."),
      p("Un tampón tiene pKa = 4.76 y [A⁻]/[HA] = 10. ¿Cuál es su pH?",["3.76","4.76","5.76","14.76"],2,"Henderson–Hasselbalch: pH = 4.76 + log(10) = 5.76." )
    ]
  },
  fisica: {
    vectores: [
      p("Un vector de 10 m forma 30° con +x. ¿Cuál es su componente x?",["5.0 m","8.66 m","10 m","17.3 m"],1,"Ax = A cos θ = 10 cos 30° = 8.66 m."),
      p("A=(3,−2) y B=(−1,4). ¿Cuál es A+B?",["(2,2)","(4,−6)","(−3,−8)","(2,−2)"],0,"Se suman componentes: (3−1, −2+4)=(2,2)." )
    ],
    cinematica: [
      p("Un móvil parte del reposo con a=2 m/s² durante 5 s. ¿Cuál es su velocidad final?",["2.5 m/s","7 m/s","10 m/s","25 m/s"],2,"v = v₀ + at = 0 + (2)(5) = 10 m/s."),
      p("Se lanza horizontalmente un objeto. Sin resistencia del aire, ¿qué variable determina el tiempo de caída?",["La velocidad horizontal","La altura y g","La masa","El alcance horizontal únicamente"],1,"El movimiento vertical es independiente: h = ½gt² si la velocidad vertical inicial es cero." )
    ],
    dinamica: [
      p("Una fuerza neta de 18 N actúa sobre 6 kg. ¿Cuál es la aceleración?",["3 m/s²","12 m/s²","24 m/s²","108 m/s²"],0,"Por la segunda ley, a=Fnet/m=18/6=3 m/s²."),
      p("Un bloque de 10 kg está sobre una mesa con μk=0.20. Use g=9.8 m/s². ¿Cuál es la fricción cinética?",["2.0 N","19.6 N","49 N","98 N"],1,"N=mg=98 N y fk=μkN=(0.20)(98)=19.6 N." )
    ],
    energia: [
      p("Una fuerza constante de 20 N desplaza un objeto 3 m en su misma dirección. ¿Qué trabajo realiza?",["6 J","17 J","23 J","60 J"],3,"W=Fd cos0°=(20)(3)=60 J."),
      p("Un cuerpo cae sin rozamiento desde una altura h. Justo antes de llegar al suelo, su rapidez es…",["√(2gh)","gh","2gh","√(gh/2)"],0,"Conservación: mgh=½mv²; al despejar, v=√(2gh)." )
    ],
    momento: [
      p("Una pelota de 2 kg cambia su velocidad de 3 a −1 m/s. ¿Cuál es Δp?",["−8 kg·m/s","−4 kg·m/s","4 kg·m/s","8 kg·m/s"],0,"Δp=m(vf−vi)=2(−1−3)=−8 kg·m/s."),
      p("Dos masas de 2 kg y 3 kg se pegan. Sus velocidades iniciales son 4 m/s y 0. ¿Velocidad final?",["0.8 m/s","1.6 m/s","2.4 m/s","4.0 m/s"],1,"vf=(m1v1+m2v2)/(m1+m2)=8/5=1.6 m/s." )
    ]
  },
  biologia: {
    ecologia: [
      p("Una población pasa de 200 a 230 individuos, con 20 nacimientos y 5 muertes. ¿Cuál fue la migración neta?",["−15","0","+15","+30"],2,"ΔN=30; el crecimiento natural fue 20−5=15, así que la migración neta fue +15."),
      p("Si productores almacenan 10 000 kJ y la eficiencia trófica es 10 %, ¿cuánta energía llega al consumidor primario?",["10 kJ","100 kJ","1 000 kJ","9 000 kJ"],2,"Se transfiere 0.10×10 000=1 000 kJ." )
    ],
    evolucion: [
      p("En un cladograma, A y B comparten un nodo más reciente que cualquiera con C. ¿Qué conclusión es válida?",["A evolucionó de B","A y B son taxones hermanos","C es ancestro de ambos","A es más complejo"],1,"Compartir el ancestro común más reciente los identifica como grupos hermanos."),
      p("Tras una sequía sobreviven preferentemente aves con picos profundos y el rasgo es heredable. ¿Qué proceso se infiere?",["Deriva obligatoria","Selección direccional","Mutación dirigida","Equilibrio perfecto"],1,"El éxito diferencial asociado a un extremo heredable desplaza la distribución fenotípica." )
    ],
    microbiologia: [
      p("Una célula retiene cristal violeta después de la decoloración de Gram. La inferencia más directa es…",["Es un virus","Posee una capa gruesa de peptidoglucano","Carece de membrana","Es necesariamente patógena"],1,"La retención del complejo violeta-yodo caracteriza una envoltura Gram positiva."),
      p("Un agente atraviesa un filtro bacteriano y solo se multiplica en células vivas. ¿Qué hipótesis priorizar?",["Hongo filamentoso","Virus","Archaea autotrófica","Protozoo grande"],1,"La dependencia intracelular y el tamaño filtrable son compatibles con un virus; se requieren pruebas adicionales." )
    ],
    fungi_plantas: [
      p("Una muestra presenta hifas septadas y cadenas de conidios. ¿Qué conclusión es más prudente?",["Es Rhizopus con certeza","Es compatible con un moho con reproducción conidial","Es una bacteria","Es una planta vascular"],1,"La morfología orienta a mohos con conidios, pero no basta por sí sola para identificar especie."),
      p("Una planta tiene xilema y floema, pero no semillas. ¿A qué grupo funcional es compatible?",["Briofita","Planta vascular sin semilla","Angiosperma obligatoria","Alga unicelular"],1,"Los tejidos conductores indican vascularidad; la ausencia de semillas descarta gimnospermas y angiospermas." )
    ],
    animalia: [
      p("Un embrión presenta blastoporo que origina el ano y segmentación radial. ¿Con qué linaje es compatible?",["Protóstomos","Deuteróstomos","Hongos","Archaea"],1,"Ambos rasgos son patrones clásicos asociados a deuteróstomos, aunque el análisis moderno usa más evidencia."),
      p("Dos taxones comparten un carácter derivado ausente en el grupo externo. Ese carácter se interpreta como…",["Homoplasia obligatoria","Sinapomorfía candidata","Plesiomorfía exclusiva","Rasgo ambiental no heredable"],1,"La comparación con el grupo externo permite proponerlo como carácter derivado compartido." )
    ],
    fisiologia: [
      p("La glucosa sanguínea aumenta y se libera insulina, que favorece su disminución. Esto ejemplifica…",["Retroalimentación positiva","Retroalimentación negativa","Ausencia de regulación","Selección natural"],1,"La respuesta se opone a la desviación inicial y restaura el intervalo funcional."),
      p("Si se duplica el área de una superficie respiratoria y lo demás permanece constante, la difusión esperada…",["Se reduce a la mitad","Se duplica aproximadamente","No cambia","Se hace cero"],1,"La ley de Fick predice proporcionalidad directa entre tasa de difusión y área." )
    ]
  },
  calculo: {
    limites: [
      p("Evalúa lim x→2 de (x²−4)/(x−2).",["0","2","4","No existe"],2,"Factoriza x²−4=(x−2)(x+2), cancela para x≠2 y evalúa x+2 en 2: 4."),
      p("Si lim x→a⁻ f(x)=3 y lim x→a⁺ f(x)=5, entonces lim x→a f(x)…",["vale 4","vale 8","no existe","vale 3"],2,"El límite bilateral existe solo si ambos límites laterales coinciden." )
    ],
    derivadas: [
      p("Deriva f(x)=x²eˣ.",["2xeˣ","eˣ(x²+2x)","x²eˣ","2x+eˣ"],1,"Regla del producto: f′=2xeˣ+x²eˣ=eˣ(x²+2x)."),
      p("Si x²+y²=25, ¿cuál es dy/dx?",["x/y","−x/y","−y/x","2x+2y"],1,"Deriva implícitamente: 2x+2y y′=0; por tanto y′=−x/y." )
    ],
    aplicaciones: [
      p("Un rectángulo tiene perímetro 20. Si un lado es x, su área es…",["A=x(10−x)","A=20x","A=x²+20","A=10−x"],0,"2x+2y=20 implica y=10−x; entonces A=xy=x(10−x)."),
      p("Para f(x)=x³−3x, ¿cuáles son sus puntos críticos?",["x=0","x=±1","x=±3","No tiene"],1,"f′=3x²−3=3(x²−1); f′=0 en x=±1." )
    ],
    integrales: [
      p("Calcula ∫₀² 3x² dx.",["6","8","9","12"],1,"Una antiderivada es x³; al evaluar, 2³−0³=8."),
      p("Para ∫2x cos(x²)dx, la sustitución adecuada es…",["u=2x","u=cos x","u=x²","u=x³"],2,"Con u=x² se tiene du=2x dx, y la integral se transforma en ∫cos u du." )
    ]
  }
};

const supplementalPracticalBank = {
  quimica: {
    termoquimica:[
      p("Un metal absorbe 900 J y aumenta 15 °C. Si su masa es 200 g, ¿cuál es su calor específico?",["0.30 J·g⁻¹·°C⁻¹","3.0 J·g⁻¹·°C⁻¹","13.3 J·g⁻¹·°C⁻¹","135 J·g⁻¹·°C⁻¹"],0,"c=q/(mΔT)=900/(200·15)=0.30 J·g⁻¹·°C⁻¹."),
      p("Si A→B tiene ΔH=+25 kJ y B→C tiene ΔH=−40 kJ, ¿cuál es ΔH para A→C?",["−65 kJ","−15 kJ","+15 kJ","+65 kJ"],1,"Por la ley de Hess se suman los cambios: 25−40=−15 kJ.")
    ],
    entropia:[
      p("Un proceso transfiere reversiblemente 600 J como calor a 300 K. ¿Cuál es ΔS?",["0.5 J/K","2 J/K","300 J/K","180 000 J/K"],1,"Para transferencia reversible isotérmica, ΔS=qrev/T=600/300=2 J/K."),
      p("Si ΔH=60 kJ/mol y ΔS=0.200 kJ·mol⁻¹·K⁻¹, ¿a qué temperatura ΔG=0?",["120 K","300 K","600 K","12 000 K"],1,"En el umbral, T=ΔH/ΔS=60/0.200=300 K.")
    ],
    cinetica:[
      p("Una reacción de primer orden tiene k=0.693 h⁻¹. ¿Cuál es su vida media?",["0.5 h","1.0 h","1.44 h","2.0 h"],1,"t½=ln2/k=0.693/0.693=1.0 h."),
      p("Al triplicar [A], la velocidad se multiplica por 3. ¿Cuál es el orden respecto de A?",["0","1","2","3"],1,"3^n=3, por lo que n=1.")
    ],
    equilibrio:[
      p("Para N₂O₄(g) ⇌ 2NO₂(g), ¿cuál es Kc?",["[N₂O₄]/[NO₂]²","[NO₂]²/[N₂O₄]","2[NO₂]/[N₂O₄]","[NO₂]/2[N₂O₄]"],1,"Los exponentes son los coeficientes estequiométricos: Kc=[NO₂]²/[N₂O₄]."),
      p("Una sal MX tiene Ksp=4.0×10⁻⁶ y se disocia MX⇌M⁺+X⁻. ¿Cuál es su solubilidad molar en agua?",["2.0×10⁻⁶ M","2.0×10⁻³ M","4.0×10⁻³ M","4.0×10⁻⁶ M"],1,"Ksp=s²; s=√(4.0×10⁻⁶)=2.0×10⁻³ M.")
    ],
    acidos:[
      p("Se mezclan 0.010 mol de HCl y 0.006 mol de NaOH. ¿Cuántos moles de H⁺ quedan?",["0.004 mol","0.006 mol","0.010 mol","0.016 mol"],0,"La neutralización es 1:1; sobra 0.010−0.006=0.004 mol de H⁺."),
      p("Si pOH=4.0 a 25 °C, ¿cuál es el pH?",["4.0","7.0","10.0","18.0"],2,"A 25 °C, pH+pOH=14; pH=14−4=10.")
    ]
  },
  fisica:{
    vectores:[
      p("Un desplazamiento tiene componentes (6,8) m. ¿Cuál es su magnitud?",["7 m","10 m","14 m","48 m"],1,"|A|=√(6²+8²)=10 m."),
      p("A=(2,3) y B=(4,−1). ¿Cuál es A·B?",["5","8","11","−5"],0,"A·B=(2)(4)+(3)(−1)=8−3=5.")
    ],
    cinematica:[
      p("Un auto viaja a 20 m/s durante 8 s con velocidad constante. ¿Qué distancia recorre?",["2.5 m","28 m","160 m","320 m"],2,"Δx=vt=(20)(8)=160 m."),
      p("Se deja caer un objeto desde el reposo durante 2 s. Use g=9.8 m/s². ¿Qué distancia cae?",["9.8 m","19.6 m","39.2 m","4.9 m"],1,"Δy=½gt²=0.5(9.8)(2²)=19.6 m.")
    ],
    dinamica:[
      p("Un bloque de 5 kg recibe 30 N a la derecha y 10 N a la izquierda. ¿Cuál es su aceleración?",["4 m/s² a la derecha","8 m/s² a la derecha","4 m/s² a la izquierda","2 m/s² a la derecha"],0,"Fnet=20 N a la derecha; a=20/5=4 m/s²."),
      p("Un auto de 1000 kg gira a 10 m/s en un radio de 50 m. ¿Qué fuerza radial neta requiere?",["200 N","2 000 N","5 000 N","20 000 N"],1,"Fc=mv²/r=1000·100/50=2000 N.")
    ],
    energia:[
      p("¿Cuál es la energía cinética de 4 kg que se mueve a 3 m/s?",["6 J","12 J","18 J","36 J"],2,"K=½mv²=0.5(4)(9)=18 J."),
      p("Una máquina realiza 600 J en 3 s. ¿Cuál es su potencia media?",["1800 W","603 W","200 W","0.005 W"],2,"P=W/Δt=600/3=200 W.")
    ],
    momento:[
      p("Una fuerza media de 50 N actúa 0.20 s. ¿Cuál es el impulso?",["10 N·s","50 N·s","100 N·s","250 N·s"],0,"J=FpromΔt=(50)(0.20)=10 N·s."),
      p("Masas de 1 kg en x=0 y 3 kg en x=4 m. ¿Dónde está el centro de masa?",["1 m","2 m","3 m","4 m"],2,"xcm=(1·0+3·4)/(1+3)=12/4=3 m.")
    ]
  },
  biologia:{
    ecologia:[
      p("En captura-recaptura se marcan 40 individuos; luego se capturan 50 y 10 están marcados. ¿Estimación de N?",["100","200","400","500"],1,"N≈(40·50)/10=200, suponiendo mezcla y probabilidades de captura comparables."),
      p("Una población crece de 500 a 550 en un año. ¿Cuál es su tasa finita λ?",["0.10","0.50","1.00","1.10"],3,"λ=N(t+1)/N(t)=550/500=1.10.")
    ],
    evolucion:[
      p("En una población, p=0.7 para el alelo A. Bajo Hardy–Weinberg, ¿frecuencia esperada de AA?",["0.09","0.21","0.49","0.70"],2,"La frecuencia de AA es p²=(0.7)²=0.49."),
      p("Una población pequeña cambia sus frecuencias alélicas al azar tras un huracán. ¿Qué proceso domina?",["Selección estabilizadora","Deriva genética por cuello de botella","Flujo génico","Mutación dirigida"],1,"La reducción azarosa del tamaño produce un cuello de botella y deriva intensa.")
    ],
    microbiologia:[
      p("Tras una tinción de Gram se observan bacilos rosados. ¿Cuál descripción es compatible?",["Cocos Gram positivos","Bacilos Gram negativos","Levaduras","Virus envueltos"],1,"La forma alargada indica bacilos y el color rosado, reacción Gram negativa."),
      p("Un microorganismo crece sin O₂, pero también lo utiliza cuando está disponible. Se clasifica como…",["Aerobio obligado","Anaerobio obligado","Anaerobio facultativo","Virus"],2,"Un anaerobio facultativo puede crecer con o sin oxígeno.")
    ],
    fungi_plantas:[
      p("En Rhizopus se observa una estructura oscura de pared gruesa formada por conjugación. ¿Qué es?",["Conidio","Zigospora","Basidio","Semilla"],1,"La zigospora es una estructura sexual resistente producida tras conjugación."),
      p("Una planta posee semillas desnudas pero no flores. ¿Con qué grupo es compatible?",["Briofitas","Helechos","Gimnospermas","Angiospermas"],2,"Las gimnospermas producen semillas no encerradas en frutos y carecen de flores verdaderas.")
    ],
    animalia:[
      p("Un organismo presenta simetría bilateral, tres capas germinales y celoma verdadero. ¿Cuál afirmación es válida?",["Es diploblástico","Es un animal triblástico celomado","Es necesariamente vertebrado","Carece de mesodermo"],1,"Tres capas implican condición triblástica y el celoma verdadero permite clasificarlo como celomado."),
      p("Si un carácter aparece independientemente en dos linajes por presiones semejantes, se trata de…",["Homología obligatoria","Convergencia y homoplasia","Sinapomorfía exclusiva","Deriva sin variación"],1,"La evolución independiente de rasgos similares constituye convergencia y produce homoplasia.")
    ],
    fisiologia:[
      p("Una membrana separa 100 mM de soluto de 20 mM y es permeable al agua, no al soluto. El agua tenderá a…",["Moverse hacia 20 mM","Moverse hacia 100 mM","No moverse","Convertirse en soluto"],1,"Por ósmosis, el agua se desplaza hacia la mayor concentración efectiva de soluto."),
      p("La frecuencia cardiaca es 75 min⁻¹ y el volumen sistólico 80 mL. ¿Gasto cardiaco?",["0.94 L/min","6.0 L/min","60 L/min","155 L/min"],1,"GC=FC·VS=75·80=6000 mL/min=6.0 L/min.")
    ]
  },
  calculo:{
    limites:[
      p("Evalúa lim x→0 sen(x)/x.",["0","1","No existe","∞"],1,"Es el límite trigonométrico fundamental: sen(x)/x→1."),
      p("Evalúa lim x→∞ (3x²+1)/(x²−4).",["0","1","3","∞"],2,"Para grados iguales, el límite es la razón de coeficientes principales: 3/1=3.")
    ],
    derivadas:[
      p("Deriva f(x)=ln(3x).",["1/x","3/x","ln3","3lnx"],0,"Por cadena, (ln(3x))′=3/(3x)=1/x."),
      p("Deriva f(x)=(x²+1)/(x−1).",["(x²−2x−1)/(x−1)²","(2x)/(x−1)","(x²+2x−1)/(x−1)²","1"],0,"Cociente: [2x(x−1)−(x²+1)]/(x−1)²=(x²−2x−1)/(x−1)².")
    ],
    aplicaciones:[
      p("El radio de un círculo aumenta a 2 cm/s. Cuando r=5 cm, ¿a qué razón cambia el área?",["10π cm²/s","20π cm²/s","25π cm²/s","50π cm²/s"],1,"A=πr²; dA/dt=2πr·dr/dt=2π(5)(2)=20π cm²/s."),
      p("Para f(x)=x²−4x, ¿dónde ocurre el mínimo?",["x=−2","x=0","x=2","x=4"],2,"f′=2x−4=0 da x=2 y f′′=2>0 confirma mínimo.")
    ],
    integrales:[
      p("Calcula ∫(4x³−2)dx.",["x⁴−2x+C","4x⁴−2x+C","12x²+C","x⁴−2+C"],0,"Se integra término a término: ∫4x³dx=x⁴ y ∫−2dx=−2x."),
      p("El área entre y=x y y=x² en [0,1] es…",["1/6","1/2","2/3","1"],0,"En [0,1], x≥x²; ∫₀¹(x−x²)dx=1/2−1/3=1/6."),
      p("Al girar y=x, 0≤x≤2, alrededor del eje x, el volumen por discos es…",["2π","8π/3","4π","8π"],1,"V=π∫₀²x²dx=π[x³/3]₀²=8π/3.")
    ]
  }
};

export const learningGuides = {
  quimica: {
    termoquimica: { theory:["Distingue sistema y entorno; el signo de q indica la dirección de la transferencia de energía. A presión constante, el calor de reacción se expresa mediante ΔH.","La calorimetría conecta una variación de temperatura con q=mcΔT. La ley de Hess permite sumar ecuaciones termoquímicas porque la entalpía es una función de estado."], practice:["Dibuja la frontera del sistema y fija la convención de signos.","Convierte unidades antes de sustituir; calcula q con mcΔT o capacidad calorífica.","Aplica conservación: q_sistema+q_entorno=0; verifica signo y orden de magnitud."], example:"Para agua que aumenta 5 °C, q debe ser positivo; si el calor proviene de una reacción, el q de la reacción tendrá igual magnitud y signo opuesto."},
    entropia: { theory:["La espontaneidad no equivale a rapidez. A temperatura y presión constantes se decide con ΔG=ΔH−TΔS; ΔG<0 favorece el proceso directo.","La segunda ley exige considerar sistema y entorno: un proceso espontáneo aumenta la entropía total del universo."], practice:["Convierte ΔS a las mismas unidades de ΔH.","Calcula TΔS y luego ΔG conservando los signos.","Si se pide una temperatura umbral, impone ΔG=0 y despeja T=ΔH/ΔS."], example:"Cuando ΔH y ΔS son positivos, el término −TΔS puede dominar a temperatura suficientemente alta."},
    cinetica: { theory:["La ley de velocidad se determina experimentalmente. El orden indica la sensibilidad de la velocidad a cada concentración.","La constante k depende de la temperatura; un catalizador cambia la ruta y reduce la energía de activación, pero no modifica K."], practice:["Compara experimentos donde cambie una sola concentración.","Obtén el orden mediante razones de velocidades y después calcula k.","Para datos concentración-tiempo, prueba la forma integrada correspondiente y revisa unidades de k."], example:"Si duplicar [A] cuadruplica v, la reacción es de segundo orden respecto de A."},
    equilibrio: { theory:["En equilibrio las velocidades directa e inversa son iguales, no las concentraciones. K describe la composición a una temperatura dada.","Q tiene la misma forma que K y permite predecir la dirección de evolución antes de alcanzar equilibrio."], practice:["Escribe la reacción balanceada y la expresión de K omitiendo sólidos y líquidos puros.","Organiza cambios con una tabla inicial-cambio-equilibrio.","Compara Q con K o resuelve la ecuación; descarta raíces físicamente imposibles."], example:"Si Q<K faltan productos respecto del equilibrio, por lo que el sistema avanza hacia la derecha."},
    acidos: { theory:["El pH mide logarítmicamente la actividad aproximada de H⁺. Ácidos y bases débiles establecen equilibrios descritos por Ka o Kb.","Un amortiguador combina un ácido débil y su base conjugada; funciona mejor cuando pH≈pKa."], practice:["Identifica primero si la especie es fuerte, débil o parte de un tampón.","Haz la estequiometría de neutralización antes del equilibrio.","Usa pH=−log[H⁺] o Henderson–Hasselbalch solo cuando sus supuestos se cumplen."], example:"En un tampón con iguales concentraciones de base y ácido, log(1)=0 y pH=pKa."}
  },
  fisica: {
    vectores:{theory:["Un vector tiene magnitud y dirección. Las componentes cartesianas permiten operar desplazamientos, velocidades y fuerzas sin perder orientación.","El producto escalar mide proyección; el producto vectorial produce una magnitud perpendicular."],practice:["Define ejes y dibuja el vector con su ángulo.","Descompón con coseno en el eje adyacente y seno en el opuesto, asignando signos.","Opera componentes y reconstruye magnitud y dirección; comprueba unidades."],example:"Para 10 m a 30° sobre +x: Ax=10cos30° y Ay=10sin30°."},
    cinematica:{theory:["La posición describe ubicación; velocidad y aceleración son sus razones de cambio. Las gráficas conectan pendiente y área con estas magnitudes.","En proyectiles, los movimientos horizontal y vertical comparten tiempo, pero se modelan por separado."],practice:["Dibuja el movimiento, fija el signo positivo y lista datos con unidades.","Elige una ecuación que contenga la incógnita y solo datos conocidos.","En 2D separa ejes, resuelve el tiempo en uno y úsalo en el otro."],example:"En un lanzamiento horizontal, vx es constante y la caída vertical satisface Δy=½gt²."},
    dinamica:{theory:["La aceleración proviene de la fuerza neta, no de una fuerza aislada. La tercera ley relaciona fuerzas sobre cuerpos distintos.","La fuerza centrípeta es el resultado radial de fuerzas reales y vale mv²/r."],practice:["Aísla un solo cuerpo y dibuja todas las fuerzas externas.","Proyecta ΣF=ma en cada eje; no introduzcas una fuerza centrípeta adicional.","Resuelve el sistema y verifica que signos y unidades concuerden con el movimiento."],example:"En una mesa horizontal sin aceleración vertical, N=mg; la fricción vale μN cuando corresponde."},
    energia:{theory:["El trabajo transfiere energía mediante una fuerza a lo largo de un desplazamiento. El trabajo neto cambia la energía cinética.","Las fuerzas conservativas permiten usar energía potencial; las no conservativas cambian la energía mecánica."],practice:["Elige estados inicial y final y fija el nivel cero de energía potencial.","Escribe Ki+Ui+Wnc=Kf+Uf.","Cancela términos justificadamente, despeja y comprueba que la energía esté en joules."],example:"En caída sin rozamiento, mgh se transforma en ½mv² y la masa se cancela."},
    momento:{theory:["El impulso externo cambia el momento lineal. En un sistema aislado, el momento total se conserva incluso si la energía cinética no.","El centro de masa es un promedio de posiciones ponderado por masa."],practice:["Define el sistema y un eje con signos antes y después del evento.","Escribe Σpi=Σpf; decide si los cuerpos se separan o quedan unidos.","Comprueba momento y, solo si el choque es elástico, también energía cinética."],example:"Si dos cuerpos se pegan, usan una velocidad final común obtenida de conservación del momento."}
  },
  biologia: {
    ecologia:{theory:["Las poblaciones cambian por nacimientos, muertes y migración. Las comunidades incorporan interacciones entre especies y los ecosistemas añaden el ambiente abiótico.","La materia circula, mientras la energía fluye y se disipa parcialmente en cada transferencia trófica."],practice:["Define la escala: individuo, población, comunidad o ecosistema.","Identifica variables, unidades y periodo de observación.","Construye un balance y distingue correlación de mecanismo causal."],example:"ΔN=(nacimientos−muertes)+(inmigración−emigración)."},
    evolucion:{theory:["La selección natural cambia frecuencias por éxito reproductivo diferencial sobre variación heredable. La especiación requiere reducción del flujo génico.","La sistemática infiere parentesco mediante caracteres derivados compartidos y múltiples fuentes de evidencia."],practice:["Separa observación, hipótesis evolutiva y predicción comprobable.","En cladogramas localiza el ancestro común más reciente; no leas progreso de izquierda a derecha.","Compara con un grupo externo y busca sinapomorfías, considerando homoplasias."],example:"Dos puntas vecinas no son necesariamente hermanas: importa el nodo que comparten."},
    microbiologia:{theory:["Virus, Bacteria, Archaea y eucariotas microbianos difieren en organización, replicación y metabolismo. Ningún rasgo único identifica siempre una especie.","La tinción de Gram informa sobre la envoltura bacteriana y debe combinarse con morfología y pruebas adicionales."],practice:["Describe primero evidencia observable sin asignar identidad.","Formula varias hipótesis compatibles y elige pruebas que las discriminen.","Reporta la resolución alcanzable: morfotipo, grupo probable o identificación confirmada."],example:"Cocos Gram positivos permiten acotar hipótesis, pero no justifican por sí solos un nombre de especie."},
    fungi_plantas:{theory:["Los hongos son heterótrofos por absorción y forman estructuras somáticas y reproductivas diversas. Las plantas muestran innovaciones sucesivas para vida terrestre.","Tejidos vasculares, semillas y flores permiten distinguir grandes linajes vegetales."],practice:["Registra color, textura y estructura microscópica por separado.","Relaciona cada estructura con nutrición, dispersión o reproducción.","Usa una clave de caracteres y evita identificar especie solo por apariencia."],example:"Hifas septadas y conidios orientan el diagnóstico, pero cultivo y microscopía detallada deben respaldarlo."},
    animalia:{theory:["El desarrollo embrionario establece capas y ejes corporales. Protóstomos y deuteróstomos resumen patrones, pero la filogenia moderna integra evidencia molecular.","Las sinapomorfías sustentan clados; una semejanza puede ser ancestral o convergente."],practice:["Identifica el carácter y su estado en cada taxón.","Compara con grupo externo para polarizar el carácter.","Construye la hipótesis más parsimoniosa y señala incertidumbres."],example:"Notocorda, tubo nervioso dorsal y hendiduras faríngeas sustentan la pertenencia a Chordata."},
    fisiologia:{theory:["La homeostasis mantiene variables dentro de intervalos mediante sensores, centros integradores y efectores.","Los sistemas animales intercambian materia e información; su función depende de gradientes, superficies y transporte."],practice:["Identifica variable regulada, estímulo, sensor, integrador y efector.","Predice qué ocurre si aumenta o disminuye un componente.","Conecta niveles molecular, celular, órgano y sistema mediante una cadena causal."],example:"Si sube la glucosa, una respuesta que la reduce constituye retroalimentación negativa."}
  },
  calculo: {
    limites:{theory:["Un límite describe el comportamiento de f(x) al acercarse a un punto, aunque f(a) sea distinto o no exista.","La continuidad exige que f(a) exista, el límite bilateral exista y ambos coincidan."],practice:["Intenta sustitución directa y clasifica la indeterminación.","Si aparece 0/0, factoriza, racionaliza o usa identidades antes de evaluar.","Compara límites laterales y confirma el resultado gráfica o numéricamente."],example:"En (x²−4)/(x−2), factorizar elimina el factor común para x≠2 y revela el límite 4."},
    derivadas:{theory:["La derivada es una tasa instantánea y la pendiente de la tangente. Sus reglas proceden de la linealidad y de cómo se componen productos, cocientes y funciones.","La regla de la cadena multiplica la derivada externa por la derivada interna."],practice:["Identifica la estructura exterior: suma, producto, cociente o composición.","Aplica la regla correspondiente sin simplificar prematuramente.","Factoriza el resultado y verifica con unidades, valores simples o derivación simbólica."],example:"Para e^(x²), la función externa es e^u y u=x²; la derivada es 2xe^(x²)."},
    aplicaciones:{theory:["El signo de f′ describe crecimiento y sus cambios identifican extremos. f′′ informa sobre concavidad.","Optimizar exige construir una función objetivo sujeta a restricciones y revisar todo el dominio factible."],practice:["Define variables con unidades y traduce la restricción.","Expresa el objetivo en una sola variable y determina el dominio.","Encuentra puntos críticos, compara con fronteras e interpreta el resultado en contexto."],example:"Con perímetro fijo, sustituir y=10−x convierte el área en A(x)=x(10−x)."},
    integrales:{theory:["La integral definida acumula cambio neto y puede interpretarse como suma de Riemann. El teorema fundamental conecta acumulación y antiderivación.","La sustitución revierte la regla de la cadena; discos, arandelas y cascarones acumulan volúmenes diferenciales."],practice:["Identifica variable de integración, límites y significado de la cantidad diferencial.","Elige una antiderivada o sustitución; transforma también los límites cuando corresponda.","Evalúa extremos, conserva unidades y distingue área neta de área geométrica."],example:"En ∫2x cos(x²)dx, u=x² convierte exactamente 2x dx en du."}
  }
};

function enriched(question, subject, topic, type="theory") {
  const s=curriculum[subject], t=s.topics[topic];
  return {...question,type:question.type||type,subject,topic,subjectName:s.name,topicName:t.name};
}
export function topicQuestions(subject,topic,type="mixed"){
  const theory=curriculum[subject].topics[topic].questions.map(x=>enriched(x,subject,topic,"theory"));
  const practical=[...(practicalQuestionBank[subject]?.[topic]||[]),...(supplementalPracticalBank[subject]?.[topic]||[])].map(x=>enriched(x,subject,topic,"practical"));
  if(type==="theory")return theory;
  if(type==="practical")return practical;
  const count=Math.min(theory.length,practical.length);
  return theory.slice(0,count).flatMap((item,i)=>[item,practical[i]]);
}
export const allQuestions = () => Object.entries(curriculum).flatMap(([subject,s]) => Object.keys(s.topics).flatMap(topic => topicQuestions(subject,topic)));
export function diagnosticQuestions(subject,topic=null){return topic?topicQuestions(subject,topic):Object.keys(curriculum[subject].topics).flatMap(key=>topicQuestions(subject,key))}
