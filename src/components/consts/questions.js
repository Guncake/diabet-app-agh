const QUESTIONS = [
    {
        text: "Do jakiej grupy wiekowej sie zaliczasz?",
        weights:[0,0,0,0],
        possible_ans:['<20 lat', '21-35 lat', '36-50 lat', '>50 lat'],
        third_input: true,
        fourth_input: true
    },
    {
        text: "Jaki jest charakter twojej pracy?",
        weights:[0,0,0],
        possible_ans:['Praca fizyczna', 'Praca umysłowa', 'Nie pracuję'],
        third_input: true,

    },
    {
        text: "W jakim trybie pracujesz?",
        weights:[0,0,0],
        possible_ans:['Praca zdalna', 'Praca stacjonarna', 'Nie dotyczy'],
        third_input: true,

    },
    {
        text: "Miejsce zamieszkania:",
        weights:[0,0,0],
        possible_ans:['Miasto', 'Wieś'],

    },
    {
        text: "Jak bardzo rozwiniętą masz cukrzycę?",
        weights:[1.3,1.73],
        possible_ans:['Jednorazowy incydent', 'Stała cukrzyca']
    },
    {
        text: "Czy kiedykolwiek przeżyłaś zawał serca?",
        weights:[1.14,0],
        possible_ans:['Tak', 'Nie']
    },
    {
        text: "Czy kiedykolwiek chorowałaś na depresję?",
        weights:[1.16,0],
        possible_ans:['Tak', 'Nie']
    },
    {
        text: "Czy kiedykolwiek przeżyłaś udar mózgu?",
        weights:[1.57,0],
        possible_ans:['Tak', 'Nie']
    },
    {
        text: "Czy kiedykolwiek miałaś raka?",
        weights:[1.78,0],
        possible_ans:['Tak', 'Nie']
    },
    {
        text: "Czy chorujesz na astmę?",
        weights:[1.19,0],
        possible_ans:['Tak', 'Nie']
    },
    {
        text: "Czy chorujesz na Alzheimera lub demencję?",
        weights:[2.4,0],
        possible_ans:['Tak', 'Nie']
    },
    {
        text: "Czy jesteś w związku?",
        weights:[0.91,0],
        possible_ans:['Tak', 'Nie']
    },
    {
        text: "Odpowiedz na pytanie dotyczące palenia?",
        weights:[1.2,1.74,0],
        possible_ans:['Paliłam', 'Jestem aktywnym palaczem', 'Nigdy nie paliłam'],
        third_input: true
    },
    {
        text: "Jakie masz BMI?",
        weights:[1.78,0.92,0.97,0],
        possible_ans:['Niedowaga (BMI < 18.5)', 'Nadwaga (BMI > 25 i BMI < 30)', 'Otyłość (BMI > 30)', 'BMI prawidłowe (18.5 - 25)'],
        third_input: true,
        fourth_input: true
    },
]

export default QUESTIONS