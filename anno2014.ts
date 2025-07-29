import { Question } from './types';

export const QUESTIONS_2014: Question[] = [
  {
    year: 2014,
    number: 1,
    system: "Cirugía General/Urgencias",
    statement: "Una mujer de 80 años es traída al servicio de urgencias por un cuadro de dolor abdominal agudo que se acompaña de hipotensión, taquicardia y fiebre de 38ºC. Entre sus antecedentes destaca una resección de colon izquierdo por carcinoma siete días antes. Tras la reanimación inicial se realiza una radiografía simple de tórax (que se muestra) que resulta diagnóstica de:",
    options: { A: "Neumoperitoneo", B: "Obstrucción intestinal", C: "Hernia crural estrangulada", D: "Neumotórax izquierdo", E: "Isquemia mesentérica" },
    correctAnswer: 'A',
    image: "/1_2014.png"
  },
  {
    year: 2014,
    number: 2,
    system: "Cirugía General/Urgencias",
    statement: "En la misma paciente, de la observación de la radiografía de tórax, puede deducirse:",
    options: { A: "Que la paciente tiene metástasis pulmonares.", B: "Sospecha de neumonía nosocomial.", C: "Se debe de considerar un fallo (dehiscencia) de la anastomosis cólica.", D: "Sospecha de TEP.", E: "Tiene una infección de la herida quirúrgica." },
    correctAnswer: 'C'
    image: "/1_2014.png"
  },
];
