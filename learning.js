export const curriculum = {
  quimica: {
    name: "Química", icon: "⬡",
    topics: {
      estructura: { name: "Estructura y enlace", questions: [
        q("¿Qué propiedad aumenta generalmente de izquierda a derecha en un período?",["Radio atómico","Electronegatividad","Carácter metálico","Número de capas"],1,"La carga nuclear efectiva aumenta y atrae con mayor intensidad los electrones de valencia."),
        q("¿Qué interacción explica principalmente el elevado punto de ebullición del agua?",["Enlace iónico","Fuerzas de London únicamente","Puentes de hidrógeno","Enlace metálico"],2,"Los puentes de hidrógeno intermoleculares requieren energía considerable para romperse."),
        q("Una molécula puede contener enlaces polares y ser apolar cuando…",["no tiene electrones","sus dipolos se cancelan por simetría","todos los átomos son iguales","es un sólido"],1,"La polaridad molecular depende de la suma vectorial de los dipolos y de la geometría." )
      ]},
      reacciones: { name: "Estequiometría y reacciones", questions: [
        q("El reactivo limitante determina…",["la rapidez instantánea","la cantidad máxima de producto","la constante de equilibrio","la energía de activación"],1,"Se consume primero y fija la cantidad teórica máxima de producto."),
        q("¿Qué conserva necesariamente una ecuación química balanceada?",["Número de moléculas","Masa y número de átomos por elemento","Volumen de gases en todo caso","Concentración"],1,"El balance expresa conservación de átomos y, por tanto, de masa."),
        q("Si el rendimiento teórico es 10 g y se obtienen 8 g, el rendimiento porcentual es…",["20 %","80 %","100 %","125 %"],1,"Rendimiento = 8/10 × 100 = 80 %." )
      ]},
      energia: { name: "Termodinámica y cinética", questions: [
        q("A temperatura y presión constantes, un proceso es espontáneo si…",["ΔH siempre es positivo","ΔG < 0","la energía de activación es cero","ΔS del sistema es negativa"],1,"El criterio de espontaneidad bajo esas condiciones es ΔG negativo."),
        q("Un catalizador modifica directamente…",["ΔG°","K","la energía de activación","la composición final de equilibrio"],2,"Proporciona una ruta con menor barrera sin alterar la termodinámica."),
        q("Aumentar la temperatura suele aumentar la rapidez porque…",["cambia la masa","más colisiones superan la energía de activación","K siempre aumenta","desaparecen los reactivos"],1,"La distribución energética deja una mayor fracción de moléculas por encima de Ea." )
      ]},
      equilibrio: { name: "Equilibrio, ácidos y bases", questions: [
        q("Si K es mucho mayor que 1, el equilibrio favorece…",["reactivos","productos","catalizadores","igual cantidad necesariamente"],1,"Un K grande indica una relación de actividades que favorece productos."),
        q("Al añadir un ion común a un equilibrio de solubilidad generalmente…",["aumenta la solubilidad","disminuye la solubilidad","no ocurre nada","destruye el sólido"],1,"El sistema se desplaza hacia el sólido para contrarrestar el ion añadido."),
        q("Una disolución con pH 3 tiene, frente a una de pH 5…",["2 veces más H⁺","20 veces más H⁺","100 veces más H⁺","1000 veces menos H⁺"],2,"La escala es logarítmica: dos unidades equivalen a un factor de 10²." )
      ]}
    }
  },
  fisica: {
    name: "Física", icon: "↗",
    topics: {
      movimiento: { name: "Vectores y movimiento", questions: [
        q("Pendiente de una gráfica posición–tiempo representa…",["aceleración","velocidad","fuerza","energía"],1,"La derivada de la posición respecto al tiempo es la velocidad."),
        q("Un objeto puede tener velocidad cero y aceleración no nula…",["nunca","en un punto de retorno","solo en el vacío","solo si su masa es cero"],1,"En el punto más alto de un tiro vertical la velocidad instantánea es cero, pero actúa g."),
        q("Para sumar desplazamientos en dos dimensiones se deben sumar…",["solo sus magnitudes","sus componentes vectoriales","sus tiempos","sus masas"],1,"Los vectores se suman componente a componente." )
      ]},
      fuerzas: { name: "Fuerzas y dinámica", questions: [
        q("Si la fuerza neta es cero, un objeto…",["debe estar detenido","mantiene velocidad constante","acelera uniformemente","pierde masa"],1,"La primera ley permite reposo o movimiento rectilíneo uniforme."),
        q("La pareja de acción y reacción actúa…",["sobre el mismo cuerpo","sobre cuerpos distintos","solo en choques","en la misma dirección"],1,"Son fuerzas iguales y opuestas ejercidas sobre objetos diferentes."),
        q("En movimiento circular uniforme la fuerza neta apunta…",["tangencialmente","hacia el centro","hacia afuera","en dirección de la velocidad"],1,"La aceleración centrípeta cambia la dirección de la velocidad." )
      ]},
      conservacion: { name: "Energía y momento", questions: [
        q("El trabajo neto sobre una partícula equivale al cambio de…",["momento angular","energía cinética","energía potencial siempre","masa"],1,"Es el teorema trabajo–energía cinética."),
        q("El momento lineal total se conserva cuando…",["no hay fuerzas internas","el impulso externo neto es cero","la energía cinética se conserva","los objetos tienen igual masa"],1,"Las fuerzas internas se cancelan por pares; importa el impulso externo."),
        q("En un choque perfectamente inelástico se conserva…",["solo energía cinética","momento lineal, no necesariamente energía cinética","ninguna magnitud","velocidad de cada cuerpo"],1,"El momento total se conserva en un sistema aislado, aunque parte de K se transforma." )
      ]},
      campos: { name: "Ondas, electricidad y campos", questions: [
        q("Si la frecuencia de una onda aumenta y su rapidez es constante, su longitud…",["aumenta","disminuye","no cambia","se hace cero"],1,"v = fλ; a rapidez fija, frecuencia y longitud son inversas."),
        q("El campo eléctrico apunta en la dirección de la fuerza sobre…",["una carga de prueba positiva","un electrón","cualquier masa","un imán"],0,"Por definición se usa una carga de prueba positiva."),
        q("En un circuito en serie, la magnitud común a todos los elementos es…",["voltaje","corriente","resistencia","potencia"],1,"Existe una sola trayectoria, por lo que circula la misma corriente." )
      ]}
    }
  },
  biologia: {
    name: "Biología", icon: "⌘",
    topics: {
      celular: { name: "Biología celular", questions: [
        q("La permeabilidad selectiva de la membrana depende principalmente de…",["su pared rígida","bicapa lipídica y proteínas","ADN superficial","ATP extracelular"],1,"La bicapa crea una barrera hidrofóbica y las proteínas controlan transportes específicos."),
        q("Una proteína destinada a secreción inicia su síntesis en…",["lisosomas","ribosomas asociados al RER","núcleo","peroxisomas"],1,"La señal dirige el ribosoma al retículo endoplásmico rugoso."),
        q("La ósmosis describe el movimiento neto de…",["soluto contra gradiente","agua a través de una membrana","ATP","proteínas vesiculares"],1,"El agua se mueve según su potencial químico a través de una membrana selectiva." )
      ]},
      metabolismo: { name: "Metabolismo y bioenergética", questions: [
        q("La función directa de la cadena respiratoria es…",["sintetizar ADN","crear un gradiente de protones","formar glucosa","degradar proteínas"],1,"La transferencia electrónica bombea protones y almacena energía electroquímica."),
        q("El ATP impulsa procesos endergónicos principalmente mediante…",["aumento de temperatura","acoplamiento de reacciones","cambio del ADN","difusión simple"],1,"La reacción global acoplada puede adquirir ΔG negativa."),
        q("Una enzima acelera una reacción porque…",["cambia ΔG","estabiliza el estado de transición","crea materia","eleva K"],1,"Reduce la barrera de activación sin alterar el equilibrio termodinámico." )
      ]},
      genetica: { name: "Genética y biología molecular", questions: [
        q("La replicación del ADN es semiconservativa porque…",["usa ARN únicamente","cada molécula hija conserva una hebra parental","elimina mutaciones","ocurre solo en meiosis"],1,"Cada doble hélice hija contiene una hebra vieja y una nueva."),
        q("La traducción convierte información de…",["ADN a ADN","ARNm a secuencia de aminoácidos","proteína a ARN","lípido a glucosa"],1,"El ribosoma interpreta codones del ARNm mediante ARNt."),
        q("Una mutación silenciosa no cambia el aminoácido debido a…",["reparación perfecta","degeneración del código genético","ausencia de ribosomas","dominancia"],1,"Varios codones pueden especificar el mismo aminoácido." )
      ]},
      sistemas: { name: "Evolución y sistemas biológicos", questions: [
        q("La selección natural actúa directamente sobre…",["necesidades futuras","variación fenotípica heredable","mutaciones dirigidas","ecosistemas completos únicamente"],1,"Diferencias heredables en supervivencia y reproducción cambian frecuencias poblacionales."),
        q("La homeostasis se mantiene principalmente mediante…",["retroalimentación negativa","mutación constante","ausencia de cambio","retroalimentación positiva siempre"],0,"La retroalimentación negativa contrarresta desviaciones de un punto funcional."),
        q("Una hipótesis científica se distingue porque es…",["una opinión incuestionable","comprobable y potencialmente refutable","siempre verdadera","idéntica a una predicción"],1,"Debe producir consecuencias observables capaces de ponerla a prueba." )
      ]}
    }
  },
  calculo: {
    name: "Cálculo", icon: "∫",
    topics: {
      limites: { name: "Límites y continuidad", questions: [
        q("El límite de una función en x = a depende principalmente de…",["el valor exacto de f(a)","el comportamiento de f(x) al acercarse a a","la derivada en todo el dominio","el área bajo la curva"],1,"Un límite describe el comportamiento cercano al punto; puede existir aunque f(a) no exista o sea diferente."),
        q("Si los límites laterales en a son distintos, entonces el límite bilateral…",["es cero","es infinito","no existe","es el promedio"],2,"Para que exista el límite bilateral, ambos límites laterales deben existir y coincidir."),
        q("Una función es continua en a cuando…",["solo existe f(a)","existe el límite y coincide con f(a)","su derivada es positiva","no cruza el eje x"],1,"La continuidad exige que f(a) esté definida, que exista el límite y que ambos valores coincidan.")
      ]},
      derivadas: { name: "Derivadas y tasas de cambio", questions: [
        q("Geométricamente, f′(a) representa…",["el área acumulada","la pendiente de la tangente","el intercepto vertical","la concavidad siempre"],1,"La derivada es el límite de las pendientes secantes y da la pendiente tangente."),
        q("La derivada de xⁿ es…",["nxⁿ⁻¹","xⁿ⁺¹/(n+1)","n+x","x/n"],0,"La regla de la potencia establece d(xⁿ)/dx = nxⁿ⁻¹."),
        q("En una composición f(g(x)), la regla de la cadena exige…",["sumar las derivadas","derivar la externa y multiplicar por la derivada interna","derivar solo g","integrar primero"],1,"Se calcula f′(g(x))·g′(x), conservando la dependencia entre capas.")
      ]},
      aplicaciones: { name: "Aplicaciones de la derivada", questions: [
        q("Un punto crítico interior ocurre cuando…",["f siempre vale cero","f′ es cero o no existe","f′′ siempre es positiva","la función es lineal"],1,"Los extremos interiores solo pueden aparecer donde la derivada sea cero o no esté definida."),
        q("Si f′ cambia de positiva a negativa en c, f tiene allí…",["un mínimo local","un máximo local","una asíntota obligatoria","un punto sin dominio"],1,"La función pasa de crecer a decrecer, lo que identifica un máximo local."),
        q("En un problema de optimización, después de construir la función objetivo se debe…",["sustituir números al azar","definir el dominio factible y analizar puntos críticos y extremos","derivar todas las variables por separado sin restricciones","ignorar unidades"],1,"El dominio y sus extremos son esenciales para comparar todos los candidatos admisibles.")
      ]},
      integrales: { name: "Integrales y acumulación", questions: [
        q("Una integral definida puede interpretarse como…",["pendiente instantánea","acumulación neta","máximo absoluto siempre","valor inicial"],1,"La integral suma contribuciones infinitesimales y representa cambio o área con signo."),
        q("El teorema fundamental del cálculo relaciona…",["límites laterales","derivación e integración","vectores y matrices","series y probabilidad"],1,"Establece que derivar una función de acumulación recupera el integrando y permite evaluar integrales con antiderivadas."),
        q("Si F′(x)=f(x), entonces ∫ₐᵇ f(x)dx es…",["F(a)+F(b)","F(b)−F(a)","f(b)−f(a)","F′(b)"],1,"La regla de evaluación del teorema fundamental es F(b)−F(a).")
      ]}
    }
  }
};

function q(text, options, correct, explanation) { return { text, options, correct, explanation }; }
export const allQuestions = () => Object.entries(curriculum).flatMap(([subject,s]) => Object.entries(s.topics).flatMap(([topic,t]) => t.questions.map(question => ({...question,subject,topic,subjectName:s.name,topicName:t.name}))));
export function diagnosticQuestions(subject, topic = null) {
  const topics = curriculum[subject].topics;
  return topic ? topics[topic].questions.map(x=>({...x,subject,topic})) : Object.entries(topics).flatMap(([key,t])=>t.questions.map(x=>({...x,subject,topic:key})));
}
