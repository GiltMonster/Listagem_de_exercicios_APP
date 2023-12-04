// util/translate.js

export const translateFilters = (name) => {
    switch (name) {
        case 'cardio':
            return 'Cardio';
            break;
        case 'olympic_weightlifting':
            return 'Levantamento de peso olímpico';
            break;
        case 'plyometrics':
            return 'Pliometria';
            break;
        case 'powerlifting':
            return 'Levantamento de peso';
            break;
        case 'strength':
            return 'Força';
            break;
        case 'stretching':
            return 'Alongamento';
            break;
        case 'strongman':
            return 'Strongman';
            break;
        default:
            return name;
    }
};

export const translateDifficulty = (name) => {
    switch (name) {
        case 'beginner':
            return 'Iniciante';
            break;
        case 'intermediate':
            return 'Intermediário';
            break;
        case 'expert':
            return 'Experiente';
            break;
        default:
            return name;
    }
};

export const translateMuscle = (name) => {
    switch (name) {
        case 'abdominals':
            return 'Abdominais';
            break;
        case 'abductors':
            return 'Abdutores';
            break;
        case 'adductors':
            return 'Adutores';
            break;
        case 'biceps':
            return 'Bíceps';
            break;
        case 'calves':
            return 'Panturrilhas';
            break;
        case 'chest':
            return 'Peito';
            break;
        case 'forearms':
            return 'Antebraços';
            break;
        case 'glutes':
            return 'Glúteos';
            break;
        case 'hamstrings':
            return 'Isquiotibiais';
            break;
        case 'lats':
            return 'Dorsais';
            break;
        case 'lower_back':
            return 'Lombar';
            break;
        case 'middle_back':
            return 'Costas';
            break;
        case 'neck':
            return 'Ombros';
            break;
        case 'quadriceps':
            return 'Quadríceps';
            break;
        case 'traps':
            return 'Trapézio';
            break;
        case 'triceps':
            return 'Tríceps';
            break;
        default:
            return name;
    }
};

export const translateEquipment = (name) => {
    switch (name) {
        case 'other': 
            return 'Outro';
            break;
        case 'None':
        case 'none':
            return 'Sem Equipamento';
            break;
        case 'machine':
            return 'Máquina';
            break;
        case 'barbell':
            return 'Barra';
            break;
        case 'dumbbell':
            return 'Halteres';
            break;
        case 'body_only':
            return 'Apenas o Corpo';
            break;
        case 'cable':
            return 'Cabo';
            break;
        case 'foam_roll':
            return 'Rolo de Espuma';
            break;
        case 'bands':
            return 'Faixas Elásticas';
            break;
        case 'e-z_curl_bar':
            return 'Barra de Torção';
            break;
        default:
            return name;
    }
};

export const translateInstructions = (instruction) => {
    switch (instruction) {
        case 'Position the frame at the starting point, and load with the appropriate weight. Standing in the center of the frame, begin by gripping the handles and driving through your heels to lift the frame. Ensure your chest and head are up and your back is straight. Immediately begin walking briskly with quick, controlled steps. Keep your chest up and head forward, and make sure you continue breathing. Bring the frame to the ground after you have reached the end point.':
            return 'Posicione o suporte no ponto de partida e carregue-o com o peso adequado. De pé, no centro da estrutura, comece por agarrar as alças e empurre com os calcanhares para levantar a estrutura. Certifique-se de que o peito e a cabeça estão levantados e que as costas estão retas. Comece imediatamente a caminhar rapidamente com passos rápidos e controlados. Mantenha o peito levantado e a cabeça virada para a frente. Não esqueça de controlar a respiração. Coloque a estrutura no chão depois de ter atingido o ponto final.';
            break;
        case 'Load the sled to an appropriate weight. Seat yourself on the machine, planting one foot on the platform in line with your hip. Your free foot can be placed on the ground. Maintain good spinal position with your head and chest up. Supporting the weight, fully extend the knee and unlock the sled. This will be your starting position. Lower the weight by flexing the hip and knee, continuing as far as flexibility allows. Do not allow your lumbar to take the load by moving your pelvis. At the bottom of the motion pause briefly and then return to the starting position by extending the hip and knee. Complete all repetitions for one leg before switching to the other.':
            return 'Carregar o carro com um peso adequado. Sente-se na máquina, colocando um pé na plataforma, alinhado com a anca. O pé livre pode ser colocado no chão. Mantenha uma boa posição da coluna vertebral, com a cabeça e o peito para cima. Apoiando o peso, estenda totalmente o joelho e desbloqueie o carro. Esta será a sua posição inicial. Desça o peso flexionando a anca e o joelho, continuando até onde a flexibilidade o permitir. Não deixe que a lombar assuma a carga através do movimento da bacia. Na parte inferior do movimento, faça uma breve pausa e regresse à posição inicial, estendendo a anca e o joelho. Complete todas as repetições numa perna antes de passar para a outra.';
            break;
        case 'Position a bar into a landmine or securely anchor it in a corner. Load the bar to an appropriate weight. Raise the bar from the floor, taking it to shoulder height with both hands with your arms extended in front of you. Adopt a wide stance. This will be your starting position. Perform the movement by rotating the trunk and hips as you swing the weight all the way down to one side. Keep your arms extended throughout the exercise. Reverse the motion to swing the weight all the way to the opposite side. Continue alternating the movement until the set is complete.':
            return 'Colocar uma barra numa base ou fixá-la firmemente num canto. Carregue a barra com um peso adequado. Levante a barra do chão, levando-a à altura dos ombros com as duas mãos e com os braços estendidos à sua frente. Adotar uma postura ampla. Esta será a sua posição inicial. Execute o movimento rodando o tronco e as ancas enquanto balança o peso para um dos lados. Mantenha os braços esticados durante todo o exercício. Inverta o movimento para balançar o peso até ao lado oposto. Continue a alternar o movimento até terminar a série.';
            break;
        case "Attach a weight to a dip belt and secure it around your waist. Grab the pull-up bar with the palms of your hands facing forward. For a medium grip, your hands should be spaced at shoulder width. Both arms should be extended in front of you holding the bar at the chosen grip. You'll want to bring your torso back about 30 degrees while creating a curvature in your lower back and sticking your chest out. This will be your starting position. Now, exhale and pull your torso up until your head is above your hands. Concentrate on squeezing your shoulder blades back and down as you reach the top contracted position. After a brief moment at the top contracted position, inhale and slowly lower your torso back to the starting position with your arms extended and your lats fully stretched.":
                return 'Prenda um peso a um cinto e prenda-o à cintura. Agarre a barra pull-up com as palmas das mãos viradas para a frente. Para uma pegada média, as mãos devem estar espaçadas à largura dos ombros. Ambos os braços devem estar estendidos à sua frente, segurando a barra com a pegada escolhida. Deve trazer o tronco para trás cerca de 30 graus, criando uma curvatura na zona lombar e esticando o peito. Esta será a sua posição inicial. Agora, expire e puxe o tronco para cima até a cabeça ficar acima das mãos. Concentre-se em apertar as omoplatas para trás e para baixo à medida que atinge a posição mais contraída. Após um breve momento na posição mais contraída, inspire e baixe lentamente o tronco de volta à posição inicial, com os braços esticados e os dorsais totalmente esticados.';
                break;
        case 'Position a bar into a landmine or in a corner to keep it from moving. Load an appropriate weight onto your end. Stand over the bar, and position a Double D row handle around the bar next to the collar. Using your hips and legs, rise to a standing position. Assume a wide stance with your hips back and your chest up. Your arms should be extended. This will be your starting position. Pull the weight to your upper abdomen by retracting the shoulder blades and flexing the elbows. Do not jerk the weight or cheat during the movement. After a brief pause, return to the starting position.':
            return 'Coloque uma barra numa base ou num canto para evitar que se mova. Coloque um peso adequado na sua extremidade. Coloque-se de pé sobre a barra e coloque uma pegada de remada dupla em volta da barra. Usando as ancas e as pernas, levante-se para uma posição de pé. Assuma uma postura larga com as ancas para trás e o peito para cima. Os braços devem estar esticados. Esta será a sua posição inicial. Puxe o peso para a parte superior do abdómen, retraindo as omoplatas e flexionando os cotovelos. Não sacuda o peso durante o movimento. Após uma breve pausa, volte à posição inicial.';
            break;
        case 'Start out by placing a barbell on one side of a flat bench. Kneel down on both of your knees so that your body is facing the flat bench. Use your arms to grab the barbell with a pronated grip (palms down) and bring them up so that your forearms are resting against the flat bench. Your wrists should be hanging over the edge. Start out by curling your wrist upwards and exhaling. Slowly lower your wrists back down to the starting position while inhaling. Your forearms should be stationary as your wrist is the only movement needed to perform this exercise. Repeat for the recommended amount of repetitions.  Variations:  This exercise can also be performed sitting down by using your thighs as a resting position for your forearms. Your wrist can hang over your knees and the same movements as mentioned above can be performed. You can also use a dumbbell instead of a barbell.':
                return 'Comece por colocar uma barra num dos lados de um banco plano. Ajoelhe-se sobre os dois joelhos, de modo a que o seu corpo fique virado para o banco plano. Com os braços, agarre a barra em pronação (palmas das mãos para baixo) e levante-os de forma a que os antebraços fiquem encostados ao banco plano. Os pulsos devem ficar pendurados sobre a borda. Comece por curvar o pulso para cima e expire. Baixe lentamente os pulsos de volta à posição inicial enquanto inspira. Os seus antebraços devem estar parados, uma vez que o pulso é o único movimento necessário para realizar este exercício. Repita o número de repetições recomendado.  Variações:  Este exercício também pode ser realizado sentado, utilizando as coxas como posição de descanso para os antebraços. O pulso pode ficar suspenso sobre os joelhos e podem ser executados os mesmos movimentos mencionados acima. Também pode utilizar um haltere em vez de uma barra.';
                break;
        case 'Begin with the atlas stone between your feet. Bend at the hips to wrap your arms vertically around the Atlas Stone, attempting to get your fingers underneath the stone. Many stones will have a small flat portion on the bottom, which will make the stone easier to hold. Pulling the stone into your torso, drive through the back half of your feet to pull the stone from the ground. As the stone passes the knees, lap it by sitting backward, pulling the stone on top of your thighs. Sit low, getting the stone high onto your chest as you change your grip to reach over the stone. Stand, driving through with your hips. Close distance to the loading platform, and lean back, extending the hips to get the stone as high as possible.':
            return 'Comece com a pedra atlas entre os seus pés. Dobre as ancas para envolver verticalmente os braços em volta da pedra atlas, tentando colocar os dedos por baixo da pedra. Muitas pedras têm uma pequena porção plana na parte inferior, o que torna a pedra mais fácil de segurar. Puxando a pedra para dentro do seu tronco, dirija a metade de trás dos seus pés para puxar a pedra do chão. Quando a pedra passar pelos joelhos, dê-lhe uma volta sentando-se para trás, puxando a pedra para cima das coxas. Agaixe-se, colocando a pedra no alto do peito enquanto muda a pegada para alcançar a pedra. Levante-se, conduzindo-a com as ancas. Aproxime-se da plataforma de carga e incline-se para trás, estendendo as ancas para colocar a pedra o mais alto possível.';
            break;
        case 'In a standing position, hold a pair of dumbbells at your side. This will be your starting position. Keeping your elbows slightly bent, raise the weights directly in front of you to shoulder height, avoiding any swinging or cheating. At the top of the exercise move the weights out in front of you, keeping your arms extended. Lower the weights with a controlled motion. On the next repetition, raise the weights in front of you to shoulder height before moving the weights laterally to your sides. Lower the weights to the starting position.':
            return 'Em posição de pé, segure um par de halteres ao seu lado. Esta será a sua posição inicial. Mantendo os cotovelos ligeiramente dobrados, levante os pesos diretamente à sua frente até à altura dos ombros, evitando qualquer balanço. No topo do exercício, mova os pesos para a sua frente, mantendo os braços esticados. Baixe os pesos com um movimento controlado. Na repetição seguinte, levante os pesos à sua frente até à altura dos ombros antes de os mover lateralmente para os lados. Baixe os pesos até à posição inicial.';
            break;
        case 'With a barbell on boxes or stands of the desired height, take an overhand or hook grip just outside the legs. Lower your hips with the weight focused on the heels, back straight, head facing forward, chest up, with your shoulders just in front of the bar. This will be your starting position. Begin the first pull by driving through the heels, extending your knees. Your back angle should stay the same, and your arms should remain straight with the elbows pointed out. Next comes the second pull, the main source of acceleration for the clean. As the bar approaches the mid-thigh position, begin extending through the hips. In a jumping motion, accelerate by extending the hips, knees, and ankles, using speed to move the bar upward. There should be no need to actively pull through the arms to accelerate the weight. At the end of the second pull, the body should be fully extended, leaning slightly back, with the arms still extended.3.  As full extension is achieved, transition into the receiving position by aggressively shrugging and flexing the arms with the elbows up and out. Aggressively pull yourself down, rotating your elbows under the bar as you do so. Receive the bar in a front squat position, the depth of which is dependent upon the height of the bar at the end of the third pull. The bar should be racked onto the protracted shoulders, lightly touching the throat with the hands relaxed. Continue to descend to the bottom squat position, which will help in the recovery. Immediately recover by driving through the heels, keeping the torso upright and elbows up. Continue until you have risen to a standing position. Return the weight to the boxes for the next rep.':
            return 'Com uma barra em cima de caixas ou suportes da altura pretendida, agarre-a com a mão aberta. Baixe as ancas com o peso concentrado nos calcanhares, costas retas, cabeça virada para a frente, peito para cima, com os ombros à frente da barra. Esta será a sua posição inicial. Comece a primeira puxada, passando pelos calcanhares e estendendo os joelhos. O ângulo das costas deve manter-se igual e os braços devem permanecer retos com os cotovelos apontados para fora. Em seguida, vem a segunda puxada, a principal fonte de aceleração. Quando a barra se aproximar do meio da coxa, comece a estender as ancas. Num movimento de salto, acelere estendendo as ancas, os joelhos e os tornozelos, usando a velocidade para mover a barra para cima. Não deve haver necessidade de puxar ativamente pelos braços para acelerar o peso. No final da segunda puxada, o corpo deve estar totalmente estendido, inclinando-se ligeiramente para trás, com os braços ainda estendidos.Quando a extensão total for atingida, passar para a posição de receção, encolhendo e flexionando agressivamente os braços com os cotovelos para cima e para fora. Puxar agressivamente para baixo, rodando os cotovelos por baixo da barra. Receber a barra numa posição de agachamento frontal, cuja profundidade depende da altura da barra no final da terceira puxada. A barra deve ser colocada sobre os ombros estendidos, tocando levemente a garganta com as mãos relaxadas. Continuar a descer até à posição de agachamento inferior, o que ajudará na recuperação. Recuperar de imediato, passando pelos calcanhares, mantendo o tronco na vertical e os cotovelos para cima. Continuar até à posição de pé. Voltar a colocar o peso nas caixas para a próxima repetição.';
            break;
        case 'Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position.':
            return 'Sente-se num banco inclinado com um haltere em cada mão. Encoste firmemente às costas com os pés juntos. Deixe os halteres penderem diretamente para baixo ao seu lado, segurando-os com uma pegada neutra. Esta será a sua posição inicial. Inicie o movimento com uma flexão do cotovelo, tentando manter o braço parado. Continue até ao topo do movimento e faça uma pausa, depois regresse lentamente à posição inicial.';
            break;
        case 'With a barbell on boxes of the desired height, take a grip just outside the legs. Lower your hips with the weight focused on the heels, back straight, head facing forward, chest up, with your shoulders just in front of the bar. This will be your starting position. Begin the first pull by driving through the heels, extending your knees. Your back angle should stay the same, and your arms should remain straight. As the bar approaches the mid-thigh position, begin extending through the hips. In a jumping motion, accelerate by extending the hips, knees, and ankles, using speed to move the bar upward. There should be no need to actively pull through the arms to accelerate the weight. At the end of the second pull, the body should be fully extended, leaning slightly back, with the arms still extended. As full extension is achieved, transition into the third pull by aggressively shrugging and flexing the arms with the elbows up and out. At peak extension, pull yourself under the bar far enough that it can be racked onto the shoulders, rotating your elbows under the bar as you do so. The bar should be racked onto the protracted shoulders, lightly touching the throat with the hands relaxed. Immediately recover by driving through the heels, keeping the torso upright and elbows up. Continue until you have risen to a standing position, and complete the repetition by returning the weight to the boxes.':
            return 'Com uma barra em caixas da altura pretendida, agarre-a pela parte exterior das pernas. Baixe as ancas com o peso concentrado nos calcanhares, costas retas, cabeça virada para a frente, peito para cima, com os ombros à frente da barra. Esta será a sua posição inicial. Comece a primeira puxada, passando pelos calcanhares e estendendo os joelhos. O ângulo das costas deve manter-se igual e os braços devem permanecer retos. Quando a barra se aproximar do meio da coxa, comece a estender as ancas. Num movimento de salto, acelere estendendo as ancas, os joelhos e os tornozelos, utilizando a velocidade para mover a barra para cima. Não deve haver necessidade de puxar ativamente pelos braços para acelerar o peso. No final da segunda puxada, o corpo deve estar totalmente estendido, inclinando-se ligeiramente para trás, com os braços ainda estendidos. Quando a extensão total for atingida, passe para a terceira puxada, encolhendo e flexionando agressivamente os braços com os cotovelos para cima e para fora. No pico da extensão, puxe-se para baixo da barra o suficiente para que esta possa ser colocada nos ombros, rodando os cotovelos por baixo da barra enquanto o faz. A barra deve ser colocada sobre os ombros retraídos, tocando levemente a garganta com as mãos relaxadas. Recuperar imediatamente com a passagem dos calcanhares, mantendo o tronco reto e os cotovelos levantados. Continuar até à posição de pé e completar a repetição devolvendo o peso às caixas.';
            break;
        default:
            return instruction;
    }
};