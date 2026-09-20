const q = (text, options, correct, explanation) => ({ text, options, correct, explanation });
const w = (week, dates, content, assessment = "") => ({ week, dates, content, assessment });

// Contenidos transcritos y agrupados a partir de los programas UVG 2026
// proporcionados por el usuario. Las preguntas son originales de Núcleo.
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

export const allQuestions = () => Object.entries(curriculum).flatMap(([subject,s]) => Object.entries(s.topics).flatMap(([topic,t]) => t.questions.map(question => ({...question,subject,topic,subjectName:s.name,topicName:t.name}))));
export function diagnosticQuestions(subject,topic=null){const topics=curriculum[subject].topics;return topic?topics[topic].questions.map(x=>({...x,subject,topic})):Object.entries(topics).flatMap(([key,t])=>t.questions.map(x=>({...x,subject,topic:key})))}
