/* SALA */
const roomName = "𝙓𝟯 𝙁𝘼𝙍𝙈 𝘿𝙀 𝘼𝙐𝙍𝘼 💀🗿";
const botName = "Juiz";
const maxPlayers = 24; // máximo de jogadores dentro 
const roomPublic = true; // true = sala pública | false = jogadores entram apenas pelo o link da sala (ela não aparece na lista de salas)
const geo = [{"lat": -22.9201, "lon": -43.3307, "code": "br"}, {"code": "FR", "lat": 46.2, "lon": 2.2}, {"code": "PL", "lat": 51.9, "lon": 19.1}, {"code": "GB", "lat": 55.3, "lon": -3.4}, {"code": "PT", "lat": 39.3, "lon": -8.2}]; 

// Movi estas variáveis para CIMA para poder configurar a sala já na criação
const scoreLimitPractice = 3;
const timeLimitPractice = 3; // Coloquei 3 minutos (padrão X3). Se quiser 1, altere aqui.

const room = HBInit({
    roomName: roomName,
    maxPlayers: maxPlayers,
    public: roomPublic,
    playerName: botName,
    geo: geo[0],
    scoreLimit: scoreLimitPractice, // <--- Define 3 gols logo ao nascer a sala
    timeLimit: timeLimitPractice    // <--- Define 3 min logo ao nascer a sala (Adeus tempo infinito)
});

const penaltyMap = `{
	"name" : "Penalty Futsal I Maestro",
	"width" : 430,
	"height" : 339,
	"spawnDistance" : 190,
	"bg" : { "type" : "hockey", "width" : 0, "height" : 0, "kickOffRadius" : 0, "cornerRadius" : 0 },
	"vertexes" : [
		/* 0 */ { "x" : -429, "y" : 290, "bCoef" : 1, "cMask" : ["red","blue","ball" ], "trait" : "ballArea", "color" : "FFFFFF", "curve" : 0 },
		/* 1 */ { "x" : -429, "y" : -290, "bCoef" : 1, "cMask" : ["red","blue","ball" ], "trait" : "ballArea", "color" : "FFFFFF", "curve" : 0 },
		/* 2 */ { "x" : -429, "y" : 290, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "dd807e", "curve" : -33 },
		/* 3 */ { "x" : -429, "y" : -290, "bCoef" : 1, "cMask" : ["red","blue","ball" ], "trait" : "ballArea", "color" : "FFFFFF" },
		/* 4 */ { "x" : 165, "y" : 290, "bCoef" : 1, "cMask" : ["red","blue","ball" ], "trait" : "ballArea", "color" : "FFFFFF" },
		/* 5 */ { "x" : 165, "y" : 80, "bCoef" : 1, "cMask" : ["ball","red","blue" ], "cGroup" : ["ball","red","blue" ], "trait" : "ballArea", "color" : "FFFFFF", "curve" : -33 },
		/* 6 */ { "x" : 165, "y" : -80, "bCoef" : 1, "cMask" : ["ball","red","blue" ], "cGroup" : ["ball","red","blue" ], "trait" : "ballArea", "color" : "FFFFFF", "curve" : 33 },
		/* 7 */ { "x" : 165, "y" : -290, "bCoef" : 1, "cMask" : ["red","blue","ball" ], "trait" : "ballArea", "color" : "FFFFFF" },
		/* 8 */ { "x" : 165, "y" : 215, "cMask" : ["blue" ], "trait" : "kickOffBarrier", "color" : "cafc48", "curve" : -35 },
		/* 9 */ { "x" : 165, "y" : -215, "cMask" : ["blue" ], "trait" : "line", "color" : "cafc48", "curve" : -35 },
		/* 10 */ { "x" : 193, "y" : -80, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "cGroup" : ["ball","red","blue" ], "trait" : "goalNet", "color" : "FFFFFF", "curve" : 33 },
		/* 11 */ { "x" : 193, "y" : 80, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "cGroup" : ["ball","red","blue" ], "trait" : "goalNet", "color" : "FFFFFF", "curve" : 33 },
		/* 12 */ { "x" : 165, "y" : -215, "cMask" : ["red","blue" ], "cGroup" : ["ball" ], "trait" : "line", "color" : "FFFFFF" },
		/* 13 */ { "x" : 0, "y" : -50, "cMask" : ["red","blue" ], "cGroup" : ["ball" ], "trait" : "line", "color" : "FFFFFF" },
		/* 14 */ { "x" : 165, "y" : 215, "cMask" : ["red","blue" ], "cGroup" : ["ball" ], "trait" : "line", "color" : "FFFFFF" },
		/* 15 */ { "x" : 0, "y" : 50, "cMask" : ["red","blue" ], "cGroup" : ["ball" ], "trait" : "line", "color" : "FFFFFF" },
		/* 16 */ { "x" : 165, "y" : 290, "bCoef" : 1, "cMask" : ["red","blue","ball" ], "trait" : "ballArea", "color" : "FFFFFF" },
		/* 17 */ { "x" : 165, "y" : -290, "bCoef" : 1, "cMask" : ["red","blue","ball" ], "trait" : "ballArea", "color" : "FFFFFF" },
		/* 18 */ { "x" : 174, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line" },
		/* 19 */ { "x" : 174, "y" : -290, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 20 */ { "x" : -439, "y" : 290, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line" },
		/* 21 */ { "x" : -439, "y" : 290, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 22 */ { "x" : 174, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "line" },
		/* 23 */ { "x" : 174, "y" : 290, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 24 */ { "x" : 165, "y" : 215, "cMask" : ["blue" ], "trait" : "kickOffBarrier", "color" : "cafc48", "curve" : 17.2316542913 },
		/* 25 */ { "x" : 165, "y" : -215, "cMask" : ["blue" ], "trait" : "line", "color" : "cafc48", "curve" : 17.2316542913 },
		/* 26 */ { "x" : 165, "y" : 215, "bCoef" : 1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "line", "curve" : 17.2316542913 },
		/* 27 */ { "x" : 165, "y" : -215, "bCoef" : 1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "line", "curve" : 17.2316542913 },
		/* 28 */ { "x" : 165, "y" : 215, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blue" ], "trait" : "line", "curve" : -47 },
		/* 29 */ { "x" : 165, "y" : -215, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blue" ], "trait" : "line", "curve" : -47 }
	],
	"segments" : [
		{ "v0" : 0, "v1" : 1, "trait" : "ballArea" },
		{ "v0" : 2, "v1" : 3, "trait" : "ballArea", "x" : -429 },
		{ "v0" : 4, "v1" : 5, "trait" : "ballArea" },
		{ "v0" : 6, "v1" : 7, "trait" : "ballArea" },
		{ "v0" : 6, "v1" : 10, "curve" : 33, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "cGroup" : ["ball","red","blue" ], "trait" : "goalNet" },
		{ "v0" : 5, "v1" : 11, "curve" : -33, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "cGroup" : ["ball","red","blue" ], "trait" : "goalNet" },
		{ "v0" : 10, "v1" : 11, "curve" : 33, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "cGroup" : ["ball","red","blue" ], "trait" : "goalNet", "x" : 585 },
		{ "v0" : 12, "v1" : 13, "curve" : -90, "color" : "FFFFFF", "cMask" : ["red","blue" ], "cGroup" : ["ball" ], "trait" : "line" },
		{ "v0" : 14, "v1" : 15, "curve" : 90, "color" : "FFFFFF", "cMask" : ["red","blue" ], "cGroup" : ["ball" ], "trait" : "line" },
		{ "v0" : 13, "v1" : 15, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["ball" ], "trait" : "line", "x" : 0 },
		{ "v0" : 1, "v1" : 0, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["red","blue","ball" ], "trait" : "ballArea", "x" : -429 },
		{ "v0" : 5, "v1" : 4, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["red","blue","ball" ], "trait" : "ballArea", "x" : 165 },
		{ "v0" : 6, "v1" : 7, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["red","blue","ball" ], "trait" : "ballArea", "x" : 165 },
		{ "v0" : 0, "v1" : 16, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["red","blue","ball" ], "trait" : "ballArea", "y" : 290 },
		{ "v0" : 3, "v1" : 17, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["red","blue","ball" ], "trait" : "ballArea", "y" : -290 },
		{ "v0" : 6, "v1" : 5, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 18, "v1" : 19, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 614 },
		{ "v0" : 20, "v1" : 21, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -614 },
		{ "v0" : 22, "v1" : 23, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 614 },
		{ "v0" : 26, "v1" : 27, "curve" : 17.2316542913, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "line", "x" : 165 },
		{ "v0" : 28, "v1" : 29, "curve" : -47, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blue" ], "trait" : "line", "x" : 165 }
	],
	"goals" : [
		{ "p0" : [174,80 ], "p1" : [174,-80 ], "team" : "blue" },
		{ "p0" : [-25,-10 ], "p1" : [200,110 ], "team" : "red" },
		{ "p0" : [-25,10 ], "p1" : [200,-110 ], "team" : "red" },
		{ "p0" : [-25,-10 ], "p1" : [200,-130 ], "team" : "red" },
		{ "p0" : [-25,10 ], "p1" : [200,130 ], "team" : "red" }
	],
	"discs" : [
		{ "radius" : 5, "pos" : [165,80 ], "color" : "FFFFFF", "trait" : "goalPost" },
		{ "radius" : 5, "pos" : [165,-80 ], "color" : "FFFFFF", "trait" : "goalPost" }
	],
	"planes" : [
		{ "normal" : [0,1 ], "dist" : -290, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -290, "trait" : "ballArea" },
		{ "normal" : [0,1 ], "dist" : -299, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [0,-1 ], "dist" : -299, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [1,0 ], "dist" : -439, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [-1,0 ], "dist" : -215, "bCoef" : 0.2, "cMask" : ["all" ] }
	],
	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 1 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["all" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"line" : { "vis" : true, "bCoef" : 0, "cMask" : ["" ] },
		"arco" : { "radius" : 2, "cMask" : ["n/d" ], "color" : "cccccc" }
	},
	"playerPhysics" : {
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.1,
		"kickStrength" : 7
	},
	"ballPhysics" : {
		"radius" : 6.4,
		"color" : "EAFF00"
	}
}`
var inPenaltyMode = false;
var historicoPartidas = [];
var penaltyStep = 0; 
var penaltyTurn = 1;
var penScoreRed = 0;
var penScoreBlue = 0;
// Arrays para rotação
var penaltyReds = [];
var penaltyBlues = [];
var penaltyIndexRed = 0;
var penaltyIndexBlue = 0;
// --- CONTROLE DE PING ---
var pingWarnings = {}; // Armazena quando foi o último aviso para cada ID
const PING_LIMITE = 200; // Defina aqui o que é "net lixo" (recomendado: 150 a 200)
const PING_COOLDOWN = 30000; // Tempo em ms para avisar de novo (30 segundos)
var auraLogs = {}; 
const AURA = {
    GOL: 100,
    ASSIST: 50,
    GOL_CONTRA: -200,
    VITORIA: 300,
    DERROTA: -300,
    SG: 200, 
    CHUTE_FORTE: 150, // 100 do gol + 50 bonus
    RAGEQUIT: -500,
    MVP: 100,
    QUEBRA_STREAK: 300,
    TEMPO: 10,
    HUMILHACAO: -200, // Perder de 3-0
    VITORIA_PENALTI: 500
};

function getAura(auth) {
    if (!auth) return 0;
    var key = "aura_" + auth;
    return localStorage.getItem(key) ? parseInt(localStorage.getItem(key)) : 0;
}

function addAura(player, valor, motivo) {
    if (!player) return;
    var auth = getAuth(player); 
    if (!auth) return;

    var atual = getAura(auth);
    var nova = atual + valor;
    localStorage.setItem("aura_" + auth, nova);
   

    // Log para !resumoaura
    if (motivo) {
        if (!auraLogs[player.id]) auraLogs[player.id] = { msg: [], total: 0 };
        var sinal = valor > 0 ? "+" : "";
        auraLogs[player.id].msg.push(motivo + ": " + sinal + valor);
        auraLogs[player.id].total += valor;
    }
}

// ========================================================
// -------------------------------------
let Cor = {
    Vermelho: 0xFA5646,
    Laranja: 0xFFC12F,
    Verde: 0x7DFA89,
    Azul: 0x05C5FF,
    Amarelo: 0xFFFF17,
    Cinza: 0xCCCCCC,
    Branco: 0xFFFFFF,
    Azulclaro: 0x6ECAFF,
    Powderblue: 0xB0E0E6,
    Roxo: 0x800080,
    Platina: 0xE5E4E2,
    Ouro: 0xffd700,
    Prata: 0xd5d5d5,
    Bronze: 0x896728,
    Thistle: 0xD8BFD8,
    Khaki: 0xF0E68C,
    AliceBlue: 0xF0F8FF,
    GhostWhite: 0xF8F8FF,
    Snow: 0xFFFAFA,
    Seashell:0xFFF5EE,
    FloralWhite: 0xFFFAF0,
    WhiteSmoke: 0xF5F5F5,
    Beige: 0xF5F5DC,
    OldLace: 0xFDF5E6,
    Ivory: 0xFFFFF0,
    Linen: 0xFAF0E6,
    Cornsilk: 0xFFF8DC,
    AntiqueWhite: 0xFAEBD7,
    BlanchedAlmond: 0xFFEBCD,
    Bisque: 0xFFE4C4,
    LightYellow: 0xFFFFE0,
    LemonChiffon: 0xFFFACD,
    LightGoldenrodYellow: 0xFAFAD2,
    PapayaWhip: 0xFFEFD5,
    PeachPuff: 0xFFDAB9,
    Moccasin: 0xFFE4B5,
    PaleGoldenrod: 0xEEE8AA,
    Azulescuro: 0x426AD6,
    Warn: 0xff9966
        }
    // aqui você pode colocar/editar mensagens de gol, sempre respeitando a " , ". Exemplo: "Belo gooool, " o nome do jogador ficará sempre depois da vírgula.     
    const frasesGols = [" QUE GOL É ESSE, SENHORAS E SENHORES! Você é uma lenda, ",
        " GOOOOOOOOOOL! O MUNDO PRECISA DE MAIS COMO VOCÊ, ",
        " Olha esse gol do(a) ",
        " É GOOOOOL do(a) ",
        " Que golaço do(a) ",
        " GOOOOOOOOOOL! APARECENDO QUANDO MAIS PRECISAMOS, GRAÇAS AO ",
        " MINHA NOSSA SENHORA!!!! O IMPOSSÍVEL ACONTECEU MEU DEUS DO CÉU, É GOL DO(A) ",
        " QUE GOLAÇO DO(A) ",
        " Impresionante a finalização do(a) ",
        " Desculpe o xingamento, MAS PUTA QUE PARIUUU, QUE GOL É ESSE, ",
        " É CAIXA, É CAIXA, É CAIXA, É GOOOOOOOOOL DO(A) "
    ];
    // aqui você pode colocar/editar mensagens de assistência, sempre respeitando a " , ". Exemplo: "Belo passe, " o nome do jogador ficará sempre depois da vírgula.
    const frasesasis = [" com o lindo passe de ",
        " acompanhado do belíssimo passe de ",
        " com o bolão na boca do gol de ",
        " com a assistência fenomenal de ",
        " e não podemos esquecer do passe magnífico de"
    ];
    // aqui você pode colocar/editar mensagens de zoeira, para gol contra, sempre respeitando a " , ". Exemplo: "Tenta chutar pro outro lado, " o nome do jogador ficará sempre depois da vírgula.
    const frasesautogol = [" Tenho certeza que foi sem querer né, ",
        " TÁ JOGANDO NO TIME ERRADO, ",
        " PARABÉNS!! O TIME ADVERSÁRIO AGRADECE, ",
        " É GOOOOOOOOOL... contra do  ",
        " Volta pro mar oferenda, "
    ];

const secondsToResetAvatar = 3;
var registro = new Map();
const css = "border:2px solid;padding:8px;background:";
room.setTeamsLock(true);
var message;
var spamTime = {};   // Guarda o tempo da última mensagem
var spamLastMsg = {}; // Guarda o texto da última mensagem
var votacao = {
    ativa: false,
    targetId: null,
    targetName: null,
    targetAuth: null,
    votosBan: 0,
    votosNao: 0,
    votaram: [], // Lista de IDs que já votaram
    timer: null // Relógio da votação
};

// Verifica se tem bans salvos no navegador (limpa bans antigos automaticamente)
function verificarBansExpirados() {
    for (var key in localStorage) {
        if (key.startsWith("ban_temp_")) {
            var tempoDesban = parseInt(localStorage.getItem(key));
            if (Date.now() > tempoDesban) {
                localStorage.removeItem(key); // Remove ban vencido
            }
        }
    }
}
verificarBansExpirados(); // Roda ao iniciar
var Botdivulga;
var msg1;
var msg1Time = 1500000;
var Deus = [];
var BotdivulgaTime = 900000;
var adminPassword = 4002;

var vip1 = [];
var vip2 = [];
var vip3 = [];

/* ESTÁDIO */

const playerRadius = 15;
var ballRadius = 6.25;
const triggerDistance = playerRadius + ballRadius + 0.01;

var practiceMap = `{"name":"Fcz x3 Bazinga by Drxco from HaxMaps","width":620,"height":270,"spawnDistance":350,"bg":{"type":"hockey","width":550,"height":240,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":550,"y":240,"trait":"ballArea"},{"x":550,"y":-240,"trait":"ballArea"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.15,"trait":"kickOffBarrier","color":"171717","vis":true,"curve":180},{"x":0,"y":-80,"bCoef":0.15,"trait":"kickOffBarrier","color":"171717","vis":true,"curve":180},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":-550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"171717","pos":[-700,-80]},{"x":-590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"171717","pos":[-700,-80]},{"x":-590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"171717","pos":[-700,80]},{"x":-550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"171717","pos":[-700,80]},{"x":550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"171717","pos":[700,-80]},{"x":590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"171717","pos":[700,-80]},{"x":590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"171717","pos":[700,80]},{"x":550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"171717","pos":[700,80]},{"x":-550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"171717","pos":[-700,80]},{"x":-550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"171717"},{"x":-550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"171717","pos":[-700,-80]},{"x":-550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"171717"},{"x":-550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"171717"},{"x":550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"171717"},{"x":550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[700,80],"color":"171717"},{"x":550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"171717"},{"x":550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"171717"},{"x":550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"171717","pos":[700,-80]},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"171717"},{"x":550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"171717"},{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"171717"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"171717"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"171717"},{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier","color":"171717"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":-557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80]},{"x":-557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":-557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":-557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80]},{"x":557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-80]},{"x":557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80]},{"x":557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":0,"y":-80,"bCoef":0.1,"trait":"line","color":"efb810"},{"x":0,"y":80,"bCoef":0.1,"trait":"line","color":"efb810"},{"x":-550,"y":-80,"bCoef":0.1,"trait":"line","color":"efb810"},{"x":-550,"y":80,"bCoef":0.1,"trait":"line","color":"efb810"},{"x":550,"y":-80,"bCoef":0.1,"trait":"line","color":"efb810"},{"x":550,"y":80,"bCoef":0.1,"trait":"line","color":"efb810"},{"x":-550,"y":200,"bCoef":0.1,"trait":"line","color":"171717","curve":-90},{"x":-390,"y":70,"bCoef":0.1,"trait":"line","color":"171717","curve":0},{"x":-550,"y":226,"bCoef":0.1,"trait":"line","curve":-90,"color":"efb810"},{"x":-536,"y":240,"bCoef":0.1,"trait":"line","curve":-90,"color":"efb810"},{"x":-550,"y":-200,"bCoef":0.1,"trait":"line","color":"171717","curve":90},{"x":-390,"y":-70,"bCoef":0.1,"trait":"line","color":"171717","curve":0},{"x":-550,"y":-226,"bCoef":0.1,"trait":"line","curve":90,"color":"efb810"},{"x":-536,"y":-240,"bCoef":0.1,"trait":"line","curve":90,"color":"efb810"},{"x":-381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":550,"y":-226,"bCoef":0.1,"trait":"line","curve":-90,"color":"efb810"},{"x":536,"y":-240,"bCoef":0.1,"trait":"line","curve":-90,"color":"efb810"},{"x":550,"y":226,"bCoef":0.1,"trait":"line","curve":90,"color":"efb810"},{"x":536,"y":240,"bCoef":0.1,"trait":"line","curve":90,"color":"efb810"},{"x":550,"y":200,"bCoef":0.1,"trait":"line","color":"171717","curve":90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"171717","curve":90},{"x":550,"y":-200,"bCoef":0.1,"trait":"line","color":"171717","curve":-90},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"171717","curve":-90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"171717","curve":0},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"171717","curve":0},{"x":-375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-240,"y":224,"bCoef":0.1,"trait":"line"},{"x":-240,"y":256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":224,"bCoef":0.1,"trait":"line"},{"x":-120,"y":256,"bCoef":0.1,"trait":"line"},{"x":240,"y":224,"bCoef":0.1,"trait":"line"},{"x":240,"y":256,"bCoef":0.1,"trait":"line"},{"x":120,"y":224,"bCoef":0.1,"trait":"line"},{"x":120,"y":256,"bCoef":0.1,"trait":"line"},{"x":-381,"y":240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":256,"bCoef":0.1,"trait":"line"},{"x":-556,"y":123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":123,"bCoef":0.1,"trait":"line"},{"x":556,"y":123,"bCoef":0.1,"trait":"line"},{"x":575,"y":123,"bCoef":0.1,"trait":"line"},{"x":-556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":381,"y":240,"bCoef":0.1,"trait":"line"},{"x":381,"y":256,"bCoef":0.1,"trait":"line"},{"x":381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":553,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","vis":false},{"x":553,"y":-80,"bCoef":0,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[700,-80],"vis":false},{"x":553,"y":80,"bCoef":0,"cMask":["ball"],"trait":"ballArea","pos":[700,80],"vis":false},{"x":553,"y":240,"bCoef":0,"cMask":["ball"],"trait":"ballArea","vis":false},{"x":-553,"y":80,"bCoef":0,"cMask":["ball"],"trait":"ballArea","color":"171717","pos":[-700,80],"vis":false},{"x":-553,"y":240,"bCoef":0,"cMask":["ball"],"trait":"ballArea","color":"171717","vis":false},{"x":-553,"y":-80,"bCoef":0,"cMask":["ball"],"trait":"ballArea","color":"171717","pos":[-700,-80],"vis":false},{"x":-553,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea","color":"171717","vis":false}],"segments":[{"v0":6,"v1":7,"curve":0,"cMask":["red","blue","ball"],"color":"171717","trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":7,"v1":8,"cMask":["red","blue","ball"],"color":"171717","trait":"goalNet","x":-590},{"v0":8,"v1":9,"curve":0,"cMask":["red","blue","ball"],"color":"171717","trait":"goalNet","pos":[-700,80],"y":80},{"v0":10,"v1":11,"curve":0,"cMask":["red","blue","ball"],"color":"171717","trait":"goalNet","pos":[700,-80],"y":-80},{"v0":11,"v1":12,"cMask":["red","blue","ball"],"color":"171717","trait":"goalNet","x":590},{"v0":12,"v1":13,"curve":0,"cMask":["red","blue","ball"],"color":"171717","trait":"goalNet","pos":[700,80],"y":80},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":3,"v1":4,"bCoef":0.15,"curve":180,"cGroup":["blueKO"],"vis":true,"color":"171717","trait":"kickOffBarrier"},{"v0":3,"v1":4,"bCoef":0.15,"curve":-180,"cGroup":["redKO"],"vis":true,"color":"171717","trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"kickOffBarrier"},{"v0":14,"v1":15,"bCoef":1.15,"cMask":["ball"],"vis":true,"color":"171717","trait":"ballArea","x":-550},{"v0":16,"v1":17,"bCoef":1.15,"cMask":["ball"],"vis":true,"color":"171717","trait":"ballArea","x":-550},{"v0":18,"v1":19,"bCoef":1,"cMask":["ball"],"vis":true,"color":"171717","trait":"ballArea","y":240},{"v0":20,"v1":21,"bCoef":1.15,"cMask":["ball"],"vis":true,"color":"171717","trait":"ballArea","x":550},{"v0":22,"v1":23,"bCoef":1.15,"cMask":["ball"],"vis":true,"color":"171717","trait":"ballArea","x":550},{"v0":24,"v1":25,"bCoef":0,"cMask":["ball"],"vis":true,"color":"F8F8F8","trait":"ballArea","x":550,"y":-240},{"v0":26,"v1":27,"bCoef":1,"curve":0,"cMask":["ball"],"vis":true,"color":"171717","trait":"ballArea","y":-240},{"v0":28,"v1":29,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":true,"color":"171717","trait":"kickOffBarrier"},{"v0":30,"v1":31,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"vis":true,"color":"171717","trait":"kickOffBarrier"},{"v0":38,"v1":39,"bCoef":1,"curve":0,"cMask":["ball"],"vis":false,"color":"F8F8F8","trait":"ballArea","x":-557.5},{"v0":40,"v1":41,"bCoef":1,"curve":0,"cMask":["ball"],"vis":false,"color":"F8F8F8","trait":"ballArea","x":-557.5},{"v0":42,"v1":43,"bCoef":1,"curve":0,"cMask":["ball"],"vis":false,"color":"F8F8F8","trait":"ballArea","x":557.5},{"v0":44,"v1":45,"bCoef":1,"curve":0,"cMask":["ball"],"vis":false,"color":"F8F8F8","trait":"ballArea","x":557.5},{"v0":46,"v1":47,"bCoef":0.1,"curve":0,"vis":true,"color":"efb810","trait":"line","x":0},{"v0":48,"v1":49,"bCoef":0.1,"curve":0,"vis":true,"color":"efb810","trait":"line","x":-550},{"v0":50,"v1":51,"bCoef":0.1,"curve":0,"vis":true,"color":"efb810","trait":"line","x":550},{"v0":52,"v1":53,"bCoef":0.1,"curve":-90,"vis":true,"color":"171717","trait":"line"},{"v0":55,"v1":54,"bCoef":0.1,"curve":-90,"vis":true,"color":"efb810","trait":"line"},{"v0":56,"v1":57,"bCoef":0.1,"curve":90,"vis":true,"color":"171717","trait":"line"},{"v0":53,"v1":57,"bCoef":0.1,"curve":0,"vis":true,"color":"171717","trait":"line"},{"v0":59,"v1":58,"bCoef":0.1,"curve":90,"vis":true,"color":"efb810","trait":"line"},{"v0":62,"v1":61,"bCoef":0.1,"curve":-90,"vis":true,"color":"efb810","trait":"line"},{"v0":64,"v1":63,"bCoef":0.1,"curve":90,"vis":true,"color":"efb810","trait":"line"},{"v0":65,"v1":66,"bCoef":0.1,"curve":90,"vis":true,"color":"171717","trait":"line"},{"v0":67,"v1":68,"bCoef":0.1,"curve":-90,"vis":true,"color":"171717","trait":"line"},{"v0":69,"v1":70,"bCoef":0.1,"curve":0,"vis":true,"color":"171717","trait":"line","x":390},{"v0":72,"v1":71,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":-375},{"v0":71,"v1":72,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":-375},{"v0":74,"v1":73,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":-375},{"v0":73,"v1":74,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":-375},{"v0":76,"v1":75,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":-375},{"v0":75,"v1":76,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":-375},{"v0":78,"v1":77,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":-375},{"v0":77,"v1":78,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":-375},{"v0":80,"v1":79,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":375},{"v0":79,"v1":80,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":375},{"v0":82,"v1":81,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":375},{"v0":81,"v1":82,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":375},{"v0":84,"v1":83,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":375},{"v0":83,"v1":84,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":375},{"v0":86,"v1":85,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":375},{"v0":85,"v1":86,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":375},{"v0":88,"v1":87,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":-277.5},{"v0":87,"v1":88,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":-277.5},{"v0":90,"v1":89,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":-277.5},{"v0":89,"v1":90,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":-277.5},{"v0":92,"v1":91,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":-277.5},{"v0":91,"v1":92,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":-277.5},{"v0":94,"v1":93,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":-277.5},{"v0":93,"v1":94,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":-277.5},{"v0":96,"v1":95,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":277.5},{"v0":95,"v1":96,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":277.5},{"v0":98,"v1":97,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":277.5},{"v0":97,"v1":98,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":277.5},{"v0":100,"v1":99,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":277.5},{"v0":99,"v1":100,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":277.5},{"v0":102,"v1":101,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":277.5},{"v0":101,"v1":102,"bCoef":0.1,"curve":180,"vis":true,"color":"F8F8F8","trait":"line","x":277.5},{"v0":103,"v1":104,"bCoef":0.1,"curve":0,"vis":true,"color":"F8F8F8","trait":"line","x":-240},{"v0":105,"v1":106,"bCoef":0.1,"curve":0,"vis":true,"color":"F8F8F8","trait":"line","x":-120},{"v0":107,"v1":108,"bCoef":0.1,"curve":0,"vis":true,"color":"F8F8F8","trait":"line","x":240},{"v0":109,"v1":110,"bCoef":0.1,"curve":0,"vis":true,"color":"F8F8F8","trait":"line","x":120},{"v0":111,"v1":112,"bCoef":0.1,"curve":0,"vis":true,"color":"F8F8F8","trait":"line","x":-381},{"v0":113,"v1":114,"bCoef":0.1,"curve":0,"vis":true,"color":"F8F8F8","trait":"line","x":-240,"y":123},{"v0":115,"v1":116,"bCoef":0.1,"curve":0,"vis":true,"color":"F8F8F8","trait":"line","x":-240,"y":123},{"v0":117,"v1":118,"bCoef":0.1,"curve":0,"vis":true,"color":"F8F8F8","trait":"line","x":-240,"y":-123},{"v0":119,"v1":120,"bCoef":0.1,"curve":0,"vis":true,"color":"F8F8F8","trait":"line","x":-240,"y":-123},{"v0":121,"v1":122,"bCoef":0.1,"curve":0,"vis":true,"color":"F8F8F8","trait":"line","x":-381},{"v0":123,"v1":124,"bCoef":0.1,"curve":0,"vis":true,"color":"F8F8F8","trait":"line","x":381},{"v0":125,"v1":126,"bCoef":0.1,"curve":0,"vis":true,"color":"F8F8F8","trait":"line","x":381},{"v0":127,"v1":128,"bCoef":0,"cMask":["ball"],"vis":false,"color":"F8F8F8","trait":"ballArea","x":553},{"v0":129,"v1":130,"bCoef":0,"cMask":["ball"],"vis":false,"color":"F8F8F8","trait":"ballArea","x":553},{"v0":131,"v1":132,"bCoef":0,"cMask":["ball"],"vis":false,"color":"171717","trait":"ballArea","x":-553},{"v0":133,"v1":134,"bCoef":0,"cMask":["ball"],"vis":false,"color":"171717","trait":"ballArea","x":-553}],"goals":[{"p0":[-556.25,-80],"p1":[-556.25,80],"team":"red"},{"p0":[556.25,80],"p1":[556.25,-80],"team":"blue"}],"discs":[{"pos":[-550,80],"radius":5,"color":"171717","trait":"goalPost","y":80},{"pos":[-550,-80],"radius":5,"color":"171717","trait":"goalPost","y":-80,"x":-560},{"pos":[550,80],"radius":5,"color":"171717","trait":"goalPost","y":80},{"pos":[550,-80],"radius":5,"color":"171717","trait":"goalPost","y":-80},{"pos":[-550,240],"radius":3,"invMass":0,"color":"FFCC00","bCoef":0.1,"trait":"line"},{"pos":[-550,-240],"radius":3,"invMass":0,"color":"FFCC00","bCoef":0.1,"trait":"line"},{"pos":[550,-240],"radius":3,"invMass":0,"color":"FFCC00","bCoef":0.1,"trait":"line"},{"pos":[550,240],"radius":3,"invMass":0,"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-240,"bCoef":1,"trait":"ballArea","vis":false,"curve":0},{"normal":[0,-1],"dist":-240,"bCoef":1,"trait":"ballArea"},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-620,"bCoef":0.1},{"normal":[-1,0],"dist":-620,"bCoef":0.1},{"normal":[1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0},{"normal":[-1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"line":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5},"ballPhysics":{"radius":6.25,"bCoef":0.4,"invMass":1.5,"damping":0.99,"color":"FFCC00"},"joints":[],"canBeStored":true,"_version":"v1.00","_memo":""}`;
/* OPÇÕES */

var afkLimit = 12; // limite de afk (12 segundos)
var drawTimeLimit = 1; // minutos
var maxTeamSize = 3; // máximo de jogadores num time, isso funciona para 1 (você pode querer adaptar as coisas para remover algumas estatísticas inúteis em 1v1, como assist ou cs), 2, 3 ou 4
var slowMode = 0;

/* JOGADORES */

const Team = {
    SPECTATORS: 0,
    RED: 1,
    BLUE: 2
};
var extendedP = [];
const eP = {
    ID: 0,
    AUTH: 1,
    CONN: 2,
    AFK: 3,
    ACT: 4,
    GK: 5,
    MUTE: 6
};
const Ss = {
    GA: 0,
    WI: 1,
    DR: 2,
    LS: 3,
    WR: 4,
    GL: 5,
    AS: 6,
    GK: 7,
    CS: 8,
    CP: 9,
    RL: 10,
    NK: 11,
    MVP: 12
}
var players;
var TeamR;
var TeamB;
var teamS;
var messageHistory = [0, 0, 0, 0, 0, 0];
var messageCounter = 0;

/* JOGO */

let forbid = ['macaco', 'adolf hitler', 'nazismo', 'cuzao', 'cuzão', 'autista', 'cu', 'hitler', 'Macaco', 'Hitler', "Pênis"];

let link = ['https://www.haxball.com/play?c=_', 'https://www.haxball.com', 'haxball.com', '.com', 'https://', 'https:', 'https://www.'];
let regex = ["fdp", "cu", "carai", "cuzao", "porra", "arrombado", "cu preto", "lixo", "autista", "lixeira", "verme", "Horrível", "seu merda", "filho da puta", "vsfd",
"caralho", "seu gordo", "cuzão", "vadia", "sua mãe", "seu fdp", "cala a boca", "puta", "fudido", "krl", "f d p", "vtnc", "vai tomar no cu", "crl", "cadeirante", "caderante",
"nigga", "prr", "CARALHO", "PORRA", "CARAI", "CUZAO", "CUZÃO", "FDP", "FILHO DA PUTA", "Cu", "CU", "CÚ", "PORR", "porr", "PRRA", "fodido", "FODIDO", "CRALHO", "CARLHO", "poha",
"prr" , "PRR", "POHA", "bct", "BCT"];
let xingo = ["seu preto", "seu macaco", "macaco", "seu negro", "pretinho", "resto de aborto", "seu mcc", "Negrinho", "carvão", "nazista", "Nazista"];

function nameForbid(player) {
    if (forbid.includes(player.name)) { room.kickPlayer(player.id, 'nick proibido nessa sala', false) }
};

var lastTeamTouched; // registra quem foi o último a tocar na bola
var lastPlayersTouched; // permite receber boas notificações de gols (deve ser lastPlayersKicked, aguardando uma próxima atualização para obter melhor controle dos chutes no alvo)
var countAFK = false; // criado para obter melhor controle da atividade, kicka se estiver AFK
var activePlay = false; // criado para obter melhor controle da posse de bola
var goldenGoal = false;
var SMSet = new Set(); // conjunto criado para obter o modo lento que é útil no ChooseMode
var banList = []; // acompanhar os bans, para que possamos cancelar o banimento de pessoas, se quisermos

/* ESTATÍSTICAS */

var game;
var GKList = ["", ""];
var Rposs = 0;
var Bposs = 0;
var point = [{
    "x": 0,
    "y": 0
}, {
    "x": 0,
    "y": 0
}]; // criado para obter velocidade da bola
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streak = 0;
var allBlues = []; // isto é para contar os jogadores que devem ser contados para as estatísticas. Isso inclui jogadores que saíram após o início do jogo.
var allReds = [];

// --- NOVO: SISTEMA DE MVP ---
var matchStats = {}; 

var convitesPendentes = {};

// ========================================================
// 🏆 SISTEMA DE CONQUISTAS SEMANAIS 🏆
// ========================================================

const METAS = {
    GOLS: 50,    // Meta de Gols na semana
    ASSISTS: 30, // Meta de Assists na semana
    SG: 15       // Meta de Clean Sheets (SG) na semana
};

// Tempo de 1 semana em milissegundos (7 dias * 24h * 60m * 60s * 1000ms)
const TEMPO_SEMANA = 7 * 24 * 60 * 60 * 1000; 

// Função que pega (e reseta se necessário) o progresso do jogador
function getProgressoSemanal(auth) {
    if (!auth) return null;
    
    var keyProg = "week_prog_" + auth;
    var data = localStorage.getItem(keyProg);
    var progresso = data ? JSON.parse(data) : null;
    var agora = Date.now();

    // Se não existir ou se a semana já passou, cria/reseta
    if (!progresso || agora > progresso.resetTime) {
        progresso = {
            goals: 0,
            assists: 0,
            cs: 0,
            resetTime: agora + TEMPO_SEMANA, // Define o próximo reset para daqui 7 dias
            concluido: { goals: false, assists: false, cs: false } // Controle para não ganhar 2x na mesma semana
        };
        localStorage.setItem(keyProg, JSON.stringify(progresso));
    }
    return progresso;
}

// Função para pegar as medalhas eternas
function getMedalhas(auth) {
    if (!auth) return null;
    var keyMedal = "medals_perm_" + auth;
    var data = localStorage.getItem(keyMedal);
    return data ? JSON.parse(data) : { goals: 0, assists: 0, cs: 0 };
}

// Função Principal: Atualiza progresso e entrega medalha se atingir a meta
function somarConquista(player, tipo, quantidade) {
    var auth = getAuth(player);
    if (!auth) return;

    var prog = getProgressoSemanal(auth);
    
    // Atualiza o stat específico
    if (tipo == "goals") prog.goals += quantidade;
    if (tipo == "assists") prog.assists += quantidade;
    if (tipo == "cs") prog.cs += quantidade;

    // VERIFICA SE BATEU A META (E SE AINDA NÃO GANHOU NA SEMANA)
    
    // 1. GOLS
    if (tipo == "goals" && prog.goals >= METAS.GOLS && !prog.concluido.goals) {
        darMedalha(player, "goals", "⚽ Artilheiro Semanal");
        prog.concluido.goals = true;
    }
    // 2. ASSISTS
    if (tipo == "assists" && prog.assists >= METAS.ASSISTS && !prog.concluido.assists) {
        darMedalha(player, "assists", "👟 Garçom Semanal");
        prog.concluido.assists = true;
    }
    // 3. CLEAN SHEETS
    if (tipo == "cs" && prog.cs >= METAS.SG && !prog.concluido.cs) {
        darMedalha(player, "cs", "🧤 Paredão Semanal");
        prog.concluido.cs = true;
    }

    // Salva o progresso atualizado
    localStorage.setItem("week_prog_" + auth, JSON.stringify(prog));
}

function darMedalha(player, tipo, nomeConquista) {
    var auth = getAuth(player);
    var medalhas = getMedalhas(auth);
    
    medalhas[tipo]++; // Adiciona +1 medalha eterna
    localStorage.setItem("medals_perm_" + auth, JSON.stringify(medalhas));

    room.sendAnnouncement("🏆 PARABÉNS " + player.name + "! 🏆", null, 0xFFD700, "bold");
    room.sendAnnouncement("Você completou a conquista: " + nomeConquista, null, 0xFFFFFF);
    room.sendAnnouncement("Uma nova medalha foi adicionada ao seu perfil!", null, 0x00FF00);
}

var clubes = JSON.parse(localStorage.getItem("haxball_clubes")) || {};
var solicitacoesClube = {}; // Armazena quem pediu para entrar: { ID_LIDER: ID_SOLICITANTE }

function salvarClubes() {
    localStorage.setItem("haxball_clubes", JSON.stringify(clubes));
}

// Retorna a TAG do clube do jogador (ou null se não tiver)
function getClubeDoPlayer(playerAuth) {
    for (let tag in clubes) {
        if (clubes[tag].membros.includes(playerAuth)) {
            return tag;
        }
    }
    return null;
}

// Calcula pontuação do clube (Soma dos stats dos membros)
function calcularPontuacaoClube(tag) {
    let clube = clubes[tag];
    let pontuacaoTotal = 0;

    clube.membros.forEach(auth => {
        let stats = localStorage.getItem(auth) ? JSON.parse(localStorage.getItem(auth)) : null;
        if (stats) {
            // Fórmula: Gols + (SG * 5)  --> Mesma lógica do Rank Hard
            let gols = stats[Ss.GL] || 0;
            let cs = stats[Ss.CS] || 0;
            pontuacaoTotal += gols + (cs * 5);
        }
    });
    return pontuacaoTotal;
}

// Perguntas para a entrevista do MVP
const perguntasMVP = [
    "qual é o segredo para jogar tanto assim?",
    "você treina quantas horas por dia pra ter essa habilidade?",
    "esse desempenho foi sorte ou pura habilidade?",
    "quem você gostaria de agradecer por essa vitória?",
    "o que você comeu hoje pra jogar desse jeito?",
    "tá carregando o time nas costas não pesa?",
    "acha que consegue repetir esse desempenho na próxima?",
    "tem algum recado para os seus fãs no chat?"
];
/* EQUILÍBRIO E RECRUTAMENTO */

var inChooseMode = false; // esta variável permite distinguir as 2 fases do jogo e escolher quais devem ser tratadas de forma muito diferente
var redCaptainChoice = "";
var blueCaptainChoice = "";
var chooseTime = 20;
var timeOutCap;

/* AUXILIAR */

var checkTimeVariable = false; // isso é criado para que o bate-papo não receba spam quando um jogo termina via timeLimit
var announced = false;
var statNumber = 0; // isso permite que a sala receba informações estatísticas a cada X minutos
var endGameVariable = false; // esta variável com a abaixo ajuda a distinguir os casos em que os jogos são interrompidos porque terminaram daqueles em que os jogos são interrompidos devido a movimentos de jogadores ou redefinição de equipes
var resettingTeams = false;
var capLeft = false;
var statInterval = 6;

loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);

/* OBJETOS */

function Goal(time, team, striker, assist) {
    this.time = time;
    this.team = team;
    this.striker = striker;
    this.assist = assist;
}

function Game(date, scores, goals) {
    this.date = date;
    this.scores = scores;
    this.goals = goals;
}

// function setRegister(player, senha) {
//    if (registro.get(player.name)) room.sendAnnouncement('Você já está registrado.', player.id);
//    else {
//        registro.set(player.name, senha);
//        localStorage.setItem("registros", JSON.stringify([...registro]));
//        room.sendAnnouncement('Registrado!', player.id, 0x2FE436);
//        room.sendAnnouncement(`Senha: ${senha}`, player.id, 0x2FE436);
//    }
//}

//function getLogin(player, senha) {
//    if (registro.get(player.name)) {
//        if (registro.get(player.name) == senha) {
//            room.sendAnnouncement(`${player.name} logou!`, null, 0x2FE436);
//        } else room.sendAnnouncement('Senha incorreta.', player.id, 0xFF0000);
//    } else room.sendAnnouncement('Você não está registrado.', player.id, 0xFF0000);
//}

/* FUNÇÕES */

function centerText(string) {
    var space = parseInt((80 - string.length) * 0.8, 10);
    if (space <= 0) {
        return '';
    }
    return ' '.repeat(space) + string + ' '.repeat(space);
};

/* ZOEIRAS */
function golcontra(goaler) {
    var messages = [
        "Tenho certeza que foi sem querer né, " + goaler.name + "?",
        "TÁ JOGANDO NO TIME ERRADO, " + goaler.name,
        "PARABÉNS, " + goaler.name + " O TIME ADVERSÁRIO AGRADECE!",
        "Dica pro " + goaler.name + ": Na próxima... NÃO MIRA NO SEU GOL!!",
        goaler.name + " tentou, quem sou eu pra julgar?"
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    setTimeout(function () {
        room.sendAnnouncement(centerText(announcement), null, Cor.White, "bold");
    }, 3000);
};

/* FUNÇÕES AUXILIARES */

function mostrarConquistas(solicitante, alvo) {
    var auth = getAuth(alvo);
    var medalhas = getMedalhas(auth);
    var prog = getProgressoSemanal(auth);

    // Calcula dias restantes para o reset
    var diasRestantes = Math.ceil((prog.resetTime - Date.now()) / (1000 * 60 * 60 * 24));
    if (diasRestantes < 0) diasRestantes = 0;

    room.sendAnnouncement("📊 Conquistas de " + alvo.name + " (Reseta em " + diasRestantes + " dias):", solicitante.id, 0xFFD700, "bold");

    // Lógica para desenhar as medalhas e o progresso
    // GOLS
    var txtMedalhasGols = medalhas.goals > 0 ? "🎖️".repeat(medalhas.goals) + " " : "";
    var statusGols = prog.concluido.goals ? "✅ (Concluído)" : "[" + prog.goals + "/" + METAS.GOLS + "]";
    room.sendAnnouncement(txtMedalhasGols + "Artilheiro Semanal (" + METAS.GOLS + " Gols) " + statusGols, solicitante.id, 0xFFFFFF);

    // ASSISTS
    var txtMedalhasAssists = medalhas.assists > 0 ? "🎖️".repeat(medalhas.assists) + " " : "";
    var statusAssists = prog.concluido.assists ? "✅ (Concluído)" : "[" + prog.assists + "/" + METAS.ASSISTS + "]";
    room.sendAnnouncement(txtMedalhasAssists + "Garçom Semanal (" + METAS.ASSISTS + " Assists) " + statusAssists, solicitante.id, 0xFFFFFF);

    // SG
    var txtMedalhasCS = medalhas.cs > 0 ? "🎖️".repeat(medalhas.cs) + " " : "";
    var statusCS = prog.concluido.cs ? "✅ (Concluído)" : "[" + prog.cs + "/" + METAS.SG + "]";
    room.sendAnnouncement(txtMedalhasCS + "Paredão Semanal (" + METAS.SG + " SGs) " + statusCS, solicitante.id, 0xFFFFFF);
}

function verificarUniformes() {
    // Definição dos uniformes PADRÃO do HaxBall (para resetar)
    // Red: Angle 0, Text FFFFFF, Color E56E56
    // Blue: Angle 0, Text FFFFFF, Color 5689E5
    
    // TIME RED
    var playersRed = room.getPlayerList().filter(p => p.team == 1);
    validarTimeClube(playersRed, 1);

    // TIME BLUE
    var playersBlue = room.getPlayerList().filter(p => p.team == 2);
    validarTimeClube(playersBlue, 2);
}

function validarTimeClube(listaJogadores, timeID) {
    // Se não tiver ninguém, reseta para o padrão
    if (listaJogadores.length === 0) {
        resetarUniforme(timeID);
        return;
    }

    // Pega o clube do primeiro jogador
    var authPrimeiro = getAuth(listaJogadores[0]);
    var tagClube = getClubeDoPlayer(authPrimeiro);

    // Se o primeiro não tem clube, já falhou. Reseta.
    if (!tagClube) {
        resetarUniforme(timeID);
        return;
    }

    // Verifica se TODOS os outros também são desse clube
    var timePuro = true;
    for (var i = 1; i < listaJogadores.length; i++) {
        var authOutro = getAuth(listaJogadores[i]);
        if (getClubeDoPlayer(authOutro) !== tagClube) {
            timePuro = false;
            break;
        }
    }

    // APLICAÇÃO OU RESET
    if (timePuro) {
        // Todo mundo é do mesmo clube! Vamos ver se tem uniforme salvo.
        var dadosClube = clubes[tagClube];
        if (dadosClube && dadosClube.uniforme) {
            var uni = dadosClube.uniforme;
            // Aplica o uniforme do clube
            room.setTeamColors(timeID, uni.angle, uni.textColor, uni.colors);
        } else {
            // Clube não tem uniforme configurado, reseta.
            resetarUniforme(timeID);
        }
    } else {
        // Time misturado, reseta.
        resetarUniforme(timeID);
    }
}

function resetarUniforme(timeID) {
    if (timeID == 1) { // Red Padrão
        room.setTeamColors(1, 0, 0xFFFFFF, [0xE56E56]);
    } else { // Blue Padrão
        room.setTeamColors(2, 0, 0xFFFFFF, [0x5689E5]);
    }
}

function mostrarTopJogadores(player, indiceStat, titulo, emoji) {
    var ranking = [];

    // 1. Varre todo o banco de dados do navegador
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);

        // Pula chaves que não são de jogadores (ex: bios, bans, configs)
        if (key.includes("_bio") || key.includes("ban_") || key.includes("clubes_")) continue;

        try {
            var data = JSON.parse(localStorage.getItem(key));
            
            // Verifica se é um array de stats válido e se tem nome salvo (índice 11)
            if (Array.isArray(data) && data[11]) {
                var nome = data[11]; // O nome costuma ficar no índice 11
                var valor = data[indiceStat] ? parseInt(data[indiceStat]) : 0;

                // Só adiciona se o jogador tiver pelo menos 1 ponto nesse stat
                if (valor > 0) {
                    ranking.push({ nome: nome, valor: valor });
                }
            }
        } catch (e) {
            // Ignora erros de leitura (dados corrompidos)
        }
    }

    // 2. Ordena do maior para o menor
    ranking.sort(function(a, b) {
        return b.valor - a.valor;
    });

    // 3. Exibe o Top 5
    room.sendAnnouncement("🏆 === TOP 5 " + titulo + " === 🏆", player.id, 0xFFD700, "bold");
    
    var limite = ranking.length < 5 ? ranking.length : 5; // Mostra até 5
    if (limite === 0) {
        room.sendAnnouncement("Nenhum registro encontrado.", player.id, 0xFFFFFF);
        return;
    }

    for (var j = 0; j < limite; j++) {
        var pos = j + 1;
        var medalha = pos === 1 ? "🥇" : (pos === 2 ? "🥈" : (pos === 3 ? "🥉" : "🔸"));
        room.sendAnnouncement(medalha + " " + pos + "º " + ranking[j].nome + " - " + ranking[j].valor + " " + emoji, player.id, 0xFFFFFF);
    }
}


function encerrarVotacao() {
    if (!votacao.ativa) return;

    var totalVotos = votacao.votosBan + votacao.votosNao;
    var jogadoresNaSala = room.getPlayerList().length;
    
    // Regra: Maioria simples dos votos, mas precisa de um mínimo de participação?
    // Vou usar a regra que você pediu: Maioria vence, empate salva.

    room.sendAnnouncement("📊 FIM DA VOTAÇÃO!", null, Cor.Ouro, "bold");
    room.sendAnnouncement("Sim: " + votacao.votosBan + " vs Não: " + votacao.votosNao, null, 0xFFFFFF);

    if (votacao.votosBan > votacao.votosNao) {
        // BANIMENTO APROVADO
        room.sendAnnouncement("⛔ O povo decidiu! " + votacao.targetName + " será banido por 24h.", null, Cor.Vermelho, "bold");
        
        // Salva o banimento no localStorage (Auth + Timestamp de 24h depois)
        var tempoAgora = Date.now();
        var tempoFimBan = tempoAgora + (24 * 60 * 60 * 1000); // 24 horas em milissegundos
        localStorage.setItem("ban_temp_" + votacao.targetAuth, tempoFimBan);

        // Kicka o jogador (se ele ainda estiver na sala)
        // O false no final significa que não é ban permanente do Haxball, nós controlamos via script
        room.kickPlayer(votacao.targetId, "⛔ Você foi banido por votação por 24 horas.", false); 
    } else {
        // EMPATE OU VITÓRIA DO NÃO
        room.sendAnnouncement("🛡️ O jogador " + votacao.targetName + " foi PERDOADO (Empate ou maioria Não).", null, Cor.Verde, "bold");
    }

    // Reseta a votação
    votacao.ativa = false;
    votacao.targetId = null;
    votacao.targetAuth = null;
    votacao.votaram = [];
    clearTimeout(votacao.timer);
}



function calcularPontuacaoClube(tag) {
    // 1. Segurança: Se o clube não existe, retorna 0
    if (!clubes[tag] || !clubes[tag].membros) return 0;

    var totalPontos = 0;
    var membros = clubes[tag].membros;

    // 2. Loop: Passa por cada membro do clube
    for (var i = 0; i < membros.length; i++) {
        var authMembro = membros[i];
        
        // 3. Pega stats do localStorage com segurança (blindado contra erros)
        var stats = null;
        try {
            var data = localStorage.getItem(authMembro);
            if (data) stats = JSON.parse(data);
        } catch (e) { stats = null; }

        // Se achou stats desse membro, soma na pontuação
        if (stats) {
            // Pega os Gols (Verifique se Ss.GL é o índice correto dos seus gols)
            var gols = stats[Ss.GL] ? parseInt(stats[Ss.GL]) : 0;
            
            // Pega Clean Sheets (Verifique se Ss.CS é o índice correto)
            var cleanSheets = stats[Ss.CS] ? parseInt(stats[Ss.CS]) : 0;
            
            // Pega Assistências
            // ⚠️ ATENÇÃO: Verifique qual é a variável das assistências no seu código.
            // Estou assumindo que é Ss.AS. Se for outro nome (ex: Ss.AST), mude aqui!
            var assistencias = stats[Ss.AS] ? parseInt(stats[Ss.AS]) : 0; 

            // A LÓGICA DO SEU PEDIDO: Soma simples dos 3
            totalPontos += (gols + assistencias + cleanSheets);
        }
    }

    return totalPontos;
}


function atualizarNickComRank(arg1, arg2) {
    // 1. Lógica de Segurança (Room vs Player)
    var r, p;
    if (arg1 && arg1.setPlayerName) { r = arg1; p = arg2; } 
    else { r = room; p = arg1; }

    if (!p || !p.name) return; 

    // 2. Pega os stats
    var auth = getAuth(p);
    var stats = null;
    try {
        if (localStorage.getItem(auth)) stats = JSON.parse(localStorage.getItem(auth));
    } catch (e) {}

    // 3. Define Nome Original
    var nomeOriginal = p.name; 
    if (stats && stats[11]) nomeOriginal = String(stats[11]);

    // 4. Calcula Rank (Define um padrão caso não tenha stats)
    var rank = "Sem rank"; 
    if (stats) {
        try { rank = obterRank(stats[Ss.GL], stats[Ss.CS]); } catch(e){}
    }

    // 5. Monta o Prefixo
    var prefixo = "";
    var tagClube = getClubeDoPlayer(auth);

    if (tagClube) {
        // --- CENÁRIO COM CLUBE (SEU PEDIDO) ---
        // Se tem clube, mostra a TAG e o RANK sempre (mesmo se for "Sem rank")
        prefixo = "[" + tagClube + "] [" + rank + "] ";
    } else {
        // --- CENÁRIO SEM CLUBE ---
        // Se NÃO tem clube, continua escondendo o "Sem rank" pra não ficar feio
        // (Se quiser mostrar sempre pra todo mundo, é só tirar esse if)
        if (rank !== "Sem rank" && rank !== "🥚 Unranked") {
             prefixo = "[" + rank + "] ";
        }
    }

    // 6. Calcula espaço e Aplica
    var espacoSobra = 25 - prefixo.length;
    if (espacoSobra < 1) espacoSobra = 1;

    var novoNick = prefixo + nomeOriginal.substring(0, espacoSobra);

    if (p.name != novoNick) {
        r.setPlayerName(p.id, novoNick);
    }
}

function calcularMVP(winningTeam) {
    let melhorPontuacao = -1;
    let mvpPlayer = null;
    let players = room.getPlayerList().filter(p => p.team != 0); 
    
    players.forEach(p => {
        let stats = matchStats[p.id] || { touches: 0 };
        let gols = 0;
        let assists = 0;
        let touches = stats.touches || 0;

        game.goals.forEach(g => {
            if (g.striker && g.striker.id == p.id) gols++;
            if (g.assist && g.assist.name == p.name) assists++;
        });

        let pontos = (gols * 3) + (assists * 2) + (touches * 0.1);
        if (p.team == winningTeam) pontos += 1; 

        if (pontos > melhorPontuacao) {
            melhorPontuacao = pontos;
            mvpPlayer = p;
        }
    });

    if (mvpPlayer) {
        room.sendAnnouncement("⭐ MVP DA PARTIDA: " + mvpPlayer.name + " ⭐", null, 0xFFD700, "bold");
        room.sendAnnouncement("📊 Pontuação: " + melhorPontuacao.toFixed(1) + " (Toques: " + (matchStats[mvpPlayer.id]?.touches || 0) + ")", null, 0xFFFFFF, "normal");

        // --- AURA MVP ---
        if (TeamR.length >= 3 && TeamB.length >= 3) {
            addAura(mvpPlayer, AURA.MVP, "⭐ MVP da Partida");
        }
        // ----------------

        let isOfficialParams = false;
        if (typeof allReds !== 'undefined' && typeof allBlues !== 'undefined' && game && game.scores) {
            if (players.length >= 2 * maxTeamSize && 
               (game.scores.time >= (5 / 6) * game.scores.timeLimit || game.scores.red == game.scores.scoreLimit || game.scores.blue == game.scores.scoreLimit) && 
               allReds.length >= maxTeamSize && 
               allBlues.length >= maxTeamSize) {
                isOfficialParams = true;
            }
        }

        if (isOfficialParams) {
            let auth = getAuth(mvpPlayer);
            if (auth) {
                let statsSalvas = localStorage.getItem(auth) ? JSON.parse(localStorage.getItem(auth)) : null;
                if (statsSalvas) {
                    if (!statsSalvas[Ss.MVP]) statsSalvas[Ss.MVP] = 0;
                    statsSalvas[Ss.MVP]++;
                    localStorage.setItem(auth, JSON.stringify(statsSalvas));
                    room.sendAnnouncement("✅ MVP contabilizado nas estatísticas oficiais!", mvpPlayer.id, 0x00FF00, "normal");
                }
            }
        }

        setTimeout(() => {
            let pergunta = perguntasMVP[Math.floor(Math.random() * perguntasMVP.length)];
            room.sendAnnouncement("[🎤 Repórter] " + mvpPlayer.name + ", " + pergunta, null, 0x00FFFF, "bold");
        }, 2000);
    }
}

function obterRank(goals, cs) {
    // Ranks Altos (Hard - SG vale muito)
    if (goals >= 500 || cs >= 100) return "👑 Deus da Aura"; 
    if (goals >= 200 || cs >= 60)  return "🗿 Gigachad VI";
    if (goals >= 150 || cs >= 45)  return "🗿 Gigachad III";
    if (goals >= 120 || cs >= 35)  return "🗿 Gigachad II";
    if (goals >= 80  || cs >= 25)  return "🗿 Gigachad I";
    
    // Ranks Médios
    if (goals >= 60  || cs >= 20)  return "🐺 Omega III";
    if (goals >= 55  || cs >= 18)  return "🐺 Omega II";
    if (goals >= 50  || cs >= 15)  return "🐺 Omega I";
    if (goals >= 40  || cs >= 12)  return "🦁 Sigma III";
    if (goals >= 35  || cs >= 10)  return "🦁 Sigma II";
    if (goals >= 30  || cs >= 8)   return "🦁 Sigma I";
    
    // Ranks Iniciais
    if (goals >= 20  || cs >= 6)   return "👽 Alpha III";
    if (goals >= 15  || cs >= 4)   return "👽 Alpha II";
    if (goals >= 10  || cs >= 3)   return "👽 Alpha I";
    if (goals >= 8   || cs >= 2)   return "👶 Betinha III";
    if (goals >= 5   || cs >= 1)   return "👶 Betinha II";
    if (goals >= 2   || cs >= 0)   return "👶 Betinha I";
    
    return "🥚 Unranked";
}





function getRandomInt(max) { // retorna um número aleatório de 0 a max-1
    return Math.floor(Math.random() * Math.floor(max));
}

function getTime(scores) { // retorna a hora atual do jogo
    return "[" + Math.floor(Math.floor(scores.time / 60) / 10).toString() + Math.floor(Math.floor(scores.time / 60) % 10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) / 10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) % 10).toString() + "]"
}

function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}

function obterRank(goals, cs) {
    // Ranks Altos (Hard - SG vale muito)
    if (goals >= 500 || cs >= 100) return "👑 Deus da Aura"; 
    if (goals >= 200 || cs >= 60)  return "🗿 Gigachad VI";
    if (goals >= 150 || cs >= 45)  return "🗿 Gigachad III";
    if (goals >= 120 || cs >= 35)  return "🗿 Gigachad II";
    if (goals >= 80  || cs >= 25)  return "🗿 Gigachad I";
    
    // Ranks Médios
    if (goals >= 60  || cs >= 20)  return "🐺 Omega III";
    if (goals >= 55  || cs >= 18)  return "🐺 Omega II";
    if (goals >= 50  || cs >= 15)  return "🐺 Omega I";
    if (goals >= 40  || cs >= 12)  return "🦁 Sigma III";
    if (goals >= 35  || cs >= 10)  return "🦁 Sigma II";
    if (goals >= 30  || cs >= 8)   return "🦁 Sigma I";
    
    // Ranks Iniciais
    if (goals >= 20  || cs >= 6)   return "👽 Alpha III";
    if (goals >= 15  || cs >= 4)   return "👽 Alpha II";
    if (goals >= 10  || cs >= 3)   return "👽 Alpha I";
    if (goals >= 8   || cs >= 2)   return "👶 Betinha III";
    if (goals >= 5   || cs >= 1)   return "👶 Betinha II";
    if (goals >= 2   || cs >= 0)   return "👶 Betinha I";
    
    return "🥚 Unranked";
}

/* BOTÕES */

function download(conteudo, nomeDoArquivo, tipoDeArquivo) {
    let blob = new Blob([conteudo], {
        type: tipoDeArquivo
    });
    const link = window.document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = nomeDoArquivo;
    link.click();
    window.URL.revokeObjectURL(link.href);
}

function topBtn() {
    if (teamS.length == 0) {
        return;
    } else {
        if (TeamR.length == TeamB.length) {
            if (teamS.length > 1) {
                room.setPlayerTeam(teamS[0].id, Team.RED);
                room.setPlayerTeam(teamS[1].id, Team.BLUE);
            }
            return;
        } else if (TeamR.length < TeamB.length) {
            room.setPlayerTeam(teamS[0].id, Team.RED);
        } else {
            room.setPlayerTeam(teamS[0].id, Team.BLUE);
        }
    }
}

function randomBtn() {
    if (teamS.length == 0) {
        return;
    } else {
        if (TeamR.length == TeamB.length) {
            if (teamS.length > 1) {
                var r = getRandomInt(teamS.length);
                room.setPlayerTeam(teamS[r].id, Team.RED);
                teamS = teamS.filter((spec) => spec.id != teamS[r].id);
                room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
            }
            return;
        } else if (TeamR.length < TeamB.length) {
            room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED);
        } else {
            room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
        }
    }
}

function blueToSpecBtn() {
    resettingTeams = true;
    setTimeout(() => {
        resettingTeams = false;
    }, 100);
    for (var i = 0; i < TeamB.length; i++) {
        room.setPlayerTeam(TeamB[TeamB.length - 1 - i].id, Team.SPECTATORS);
    }
}

function redToSpecBtn() {
    resettingTeams = true;
    setTimeout(() => {
        resettingTeams = false;
    }, 100);
    for (var i = 0; i < TeamR.length; i++) {
        room.setPlayerTeam(TeamR[TeamR.length - 1 - i].id, Team.SPECTATORS);
    }
}

function resetBtn() {
    resettingTeams = true;
    setTimeout(() => {
        resettingTeams = false;
    }, 100);
    if (TeamR.length <= TeamB.length) {
        for (var i = 0; i < TeamR.length; i++) {
            room.setPlayerTeam(TeamB[TeamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(TeamR[TeamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = TeamR.length; i < TeamB.length; i++) {
            room.setPlayerTeam(TeamB[TeamB.length - 1 - i].id, Team.SPECTATORS);
        }
    } else {
        for (var i = 0; i < TeamB.length; i++) {
            room.setPlayerTeam(TeamB[TeamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(TeamR[TeamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = TeamB.length; i < TeamR.length; i++) {
            room.setPlayerTeam(TeamR[TeamR.length - 1 - i].id, Team.SPECTATORS);
        }
    }
}

function blueToRedBtn() {
    resettingTeams = true;
    setTimeout(() => {
        resettingTeams = false;
    }, 100);
    for (var i = 0; i < TeamB.length; i++) {
        room.setPlayerTeam(TeamB[i].id, Team.RED);
    }
}

/* FUNÇÕES DO JOGO */

function checkTime() {
    const scores = room.getScores();
    game.scores = scores;
    if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
        if (scores.red != scores.blue) {
            if (checkTimeVariable == false) {
                checkTimeVariable = true;
                setTimeout(() => {
                    checkTimeVariable = false;
                }, 3000);
                scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
                setTimeout(() => {
                    room.stopGame();
                }, 2000);
            }
            return;
        }
        goldenGoal = true;
        room.sendAnnouncement(centerText("PRORROGAÇÃO"), null, Cor.Amarelo, "bold");
        room.sendAnnouncement(centerText("Vou dar " + drawTimeLimit * 60 + " segundos!"), null, Cor.White, "normal");
        room.sendAnnouncement(centerText("⚽ Primeiro gol vence! ⚽"), null, Cor.White, "normal");
    }
    if (scores.time > scores.timeLimit + drawTimeLimit * 60 - 15 && scores.time <= scores.timeLimit + drawTimeLimit * 60) {
        if (checkTimeVariable == false && announced == false) {
            checkTimeVariable = true;
            announced = true;
            setTimeout(() => {
                checkTimeVariable = false;
            }, 10);
            room.sendAnnouncement(centerText("⌛ 15 segundos para os PÊNALTIS!"), null, Cor.Amarelo, "bold");
        }
    }
    if (scores.time > (scores.timeLimit + drawTimeLimit * 60)) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 10);
            
            // Lógica idêntica à sua: se persistir o empate após o tempo limite da prorrogação
            if (scores.red == scores.blue) {
                startPenaltyShootout(); // Inicia o sistema de pênaltis
            } else {
                scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
                room.stopGame();
            }
            
            goldenGoal = false;
        }
    }
};

function endGame(winner) { 
    players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null;
    const scores = room.getScores();
    game.scores = scores;

    // --- HISTÓRICO DE PARTIDAS ---
    var resultado = "";
    if (typeof inPenaltyMode !== 'undefined' && inPenaltyMode) {
        resultado = "🔴 Red " + scores.red + "(" + penScoreRed + ") x (" + penScoreBlue + ")" + scores.blue + " Blue 🔵";
    } else {
        resultado = "🔴 Red " + scores.red + " x " + scores.blue + " Blue 🔵";
    }
    if (typeof historicoPartidas !== 'undefined') {
        historicoPartidas.unshift(resultado);
        if (historicoPartidas.length > 5) historicoPartidas.pop();
    }

    // ==========================================================
    // ✨ SISTEMA DE AURA & CONQUISTAS: CÁLCULO FINAL ✨
    // ==========================================================
    // Só conta se for 3x3 oficial
    if (TeamR.length >= 3 && TeamB.length >= 3) {
        var isPenaltyWin = (typeof inPenaltyMode !== 'undefined' && inPenaltyMode);
        
        // Limpa logs antigos do comando !resumoaura
        room.getPlayerList().forEach(p => { auraLogs[p.id] = { msg: [], total: 0 }; });

        var winners = winner == Team.RED ? TeamR : TeamB;
        var losers = winner == Team.RED ? TeamB : TeamR;

        // VENCEDORES
        winners.forEach(function(p) {
            addAura(p, AURA.VITORIA, "🏆 Vitória");

            // Clean Sheet (Sem sofrer gols e não foi penaltis)
            if (!isPenaltyWin) {
                if ((winner == Team.RED && scores.blue == 0) || (winner == Team.BLUE && scores.red == 0)) {
                    addAura(p, AURA.SG, "🧤 Clean Sheet (SG)");
                    
                    // --- CONQUISTA SEMANAL: SG (Paredão) ---
                    somarConquista(p, "cs", 1);
                    // ---------------------------------------
                }
            } else {
                // Se venceu nos penaltis ganha bonus de aura
                addAura(p, AURA.VITORIA_PENALTI, "🥅 Vitória nos Pênaltis");
            }

            // Quebra de Streak (Se o jogo anterior tinha streak >= 3)
            if (streak >= 3) addAura(p, AURA.QUEBRA_STREAK, "🔥 Quebra de Streak");
        });

        // PERDEDORES
        losers.forEach(function(p) {
            addAura(p, AURA.DERROTA, "💀 Derrota");
            // Humilhação (3-0)
            if (!isPenaltyWin) {
                if ((winner == Team.RED && scores.red >= 3 && scores.blue == 0) || 
                    (winner == Team.BLUE && scores.blue >= 3 && scores.red == 0)) {
                    addAura(p, AURA.HUMILHACAO, "😭 Humilhação (3-0)");
                }
            }
        });

        // Avisa no chat
        [...winners, ...losers].forEach(p => {
             room.sendAnnouncement("✨ Aura calculada! Digite !resumoaura", p.id, 0xFFD700, "bold");
        });
    }
    // ==========================================================

    Rposs = Rposs/(Rposs+Bposs);
    Bposs = 1 - Rposs;
    lastWinner = winner;
    endGameVariable = true;
    
    inPenaltyMode = false; 
    announced = false; 

    if (winner == Team.RED) {
        streak++;
        room.sendAnnouncement(centerText("🏆 Time vermelho venceu! | Sequência de Vitória(s):") + streak + " 🏆", null, 0xFDC43A);
    }
    else if (winner == Team.BLUE) {
        streak = 1;
        room.sendAnnouncement(centerText("🏆 Time azul venceu! | Sequência de Vitória(s):") + streak + " 🏆", null, 0xFDC43A);
    }
    else {
        streak = 0;
        room.sendAnnouncement("💤 Tempo limite alcançado");
    }
    room.sendAnnouncement(centerText("🏆 FIM DE PARTIDA 🏆"), null, Cor.White, "bold");
    room.sendAnnouncement(centerText(" " + scores.red + " - " + scores.blue), null, Cor.White, "normal");
    room.sendAnnouncement(centerText((Rposs * 100).toPrecision(3).toString() + "% | Posse de bola | " + (Bposs * 100).toPrecision(3).toString() + "% "), null, Cor.White, "normal");
    scores.red == 0 ? (scores.blue == 0 ? room.sendAnnouncement("🥅 " + GKList[0].name + " é um homem? não, é uma barreira! " + GKList[1].name + " não tomou gol. ", null, 0xFDC43A) : room.sendAnnouncement("🥅 é um homem? não, é uma barreira! " + GKList[1].name + " não tomou nenhum gol ", null, 0xFDC43A)) : scores.blue == 0 ? room.sendAnnouncement("🥅 é um homem? não, é uma barreira! " + GKList[0].name + " não tomou nenhum gol ", null, 0xFDC43A) : null;

    calcularMVP(winner); // Chama MVP e calcula Aura do MVP lá dentro
    updateStats();
}

function quickRestart() {
    room.stopGame();
    setTimeout(() => {
        room.startGame();
    }, 2000);
}

function resumeGame() {
    setTimeout(() => {
        room.startGame();
    }, 2000);
    setTimeout(() => {
        room.pauseGame(false);
    }, 1000);
}

function activateChooseMode() {
    inChooseMode = true;
    slowMode = 2;
    room.sendAnnouncement("Modo de recrutamento ativado!", null, 0x55bae2, "normal");
}

function deactivateChooseMode() {
    inChooseMode = false;
    clearTimeout(timeOutCap);
    if (slowMode != 0) {
        slowMode = 0;
        room.sendAnnouncement("Modo de recrutamento encerrado.", null, 0xf2a000, "normal");
    }
    redCaptainChoice = "";
    blueCaptainChoice = "";
}

function loadMap(map, scoreLim, timeLim) {
    if (map != '') {
        room.setCustomStadium(map);
    } else {
        console.log("deu um erro carregando o estádio")
        room.setDefaultStadium("Classic");
    }
    room.setScoreLimit(scoreLim);
    room.setTimeLimit(timeLim);
}

/* FUNÇÕES DO JOGADOR */

function updateTeams() { // atualiza a lista de jogadores e a lista de todos os times
    players = room.getPlayerList().filter((player) => player.id != 0 && !getAFK(player));
    TeamR = players.filter(p => p.team === Team.RED);
    TeamB = players.filter(p => p.team === Team.BLUE);
    teamS = players.filter(p => p.team === Team.SPECTATORS);
}

function handleInactivity() { 
    // --- TRAVA DE PÊNALTI ---
    if (inPenaltyMode) return;
    // -----------------------

    if (countAFK && (TeamR.length + TeamB.length) > 1) {
        for (var i = 0; i < TeamR.length; i++) setActivity(TeamR[i], getActivity(TeamR[i]) + 1);
        for (var i = 0; i < TeamB.length; i++) setActivity(TeamB[i], getActivity(TeamB[i]) + 1);
    }
    for (var i = 0; i < extendedP.length; i++) {
        if (extendedP[i][eP.ACT] == 60 * (2 / 3 * afkLimit)) {
            room.sendAnnouncement("@" + room.getPlayer(extendedP[i][eP.ID]).name + ", se você não se mexer nos próximos " + Math.floor(afkLimit / 3) + " segundos, você será kickado!", extendedP[i][eP.ID], 0xf4a404, "bold", 2);
        }
        if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
            extendedP[i][eP.ACT] = 0;
            if (room.getScores().time <= afkLimit - 0.5) {
                setTimeout(() => { !inChooseMode ? quickRestart() : room.stopGame(); }, 10);
            }
            room.kickPlayer(extendedP[i][eP.ID], "AFK", false);
        }
    }
}

function getAuth(player) {
    if (!player) return null;
    // Tenta encontrar os dados do jogador na lista
    let pData = extendedP.find((a) => a[0] == player.id);
    // Se achou, retorna o Auth (que fica no índice 1/eP.AUTH), se não, retorna null
    return pData ? pData[eP.AUTH] : null;
}

function getAFK(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
}

function setAFK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
}

function getActivity(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
}

function setActivity(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}

function getGK(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;
}

function setGK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);
}

function getMute(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
}

function setMute(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
}

/* BALANÇO E FUNÇÕES DE RECRUTAMENTO */

function updateRoleOnPlayerIn() {
    updateTeams();
    if (inChooseMode) {
        if (players.length == 6) {
            loadMap(practiceMap, scoreLimitPractice, timeLimitp);
        }
        getSpecList(TeamR.length <= TeamB.length ? TeamR[0] : TeamB[0]);
    }
    balanceTeams();
}

function updateRoleOnPlayerOut() {
    updateTeams();
    if (room.getScores() != null) {
        var scores = room.getScores();
        if (players.length >= 2 * maxTeamSize && scores.time >= (5 / 6) * game.scores.timeLimit && TeamR.length != TeamB.length) {
            if (TeamR.length < TeamB.length) {
                if (scores.blue - scores.red == 2) {
                    endGame(Team.BLUE);
                   // room.sendChat("🤖 Ragequit 🤖");
                    room.sendAnnouncement("[Juiz] Ragequit por parte do time vermelho detectado, partida terminada!", null, 0xbfff00, "normal");
                    setTimeout(() => {
                        room.stopGame();
                    }, 100);
                    return;
                }
            } else {
                if (scores.red - scores.blue == 2) {
                    endGame(Team.RED);
                   // room.sendChat("🤖 Ragequit 🤖");
                    room.sendAnnouncement("[Juiz] Ragequit por parte do time azul detectado, partida terminada!", null, 0xbfff00, "normal");
                    setTimeout(() => {
                        room.stopGame();
                    }, 100);
                    return;
                }
            }
        }
    }
    if (inChooseMode) {
        if (players.length < 6) {
            loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);
        }
        if (TeamR.length == 0 || TeamB.length == 0) {
            TeamR.length == 0 ? room.setPlayerTeam(teamS[0].id, Team.RED) : room.setPlayerTeam(teamS[0].id, Team.BLUE);
            return;
        }
        if (Math.abs(TeamR.length - TeamB.length) == teamS.length) {
            // room.sendChat("Sem alternativas, deixe me lidar com essa situação. ...");
            room.sendAnnouncement("[Juiz] Sem possibilidade de recrutamento, deixa eu decidir...", null, 0xc0bdb1, "normal");
            deactivateChooseMode();
            resumeGame();
            var b = teamS.length;
            if (TeamR.length > TeamB.length) {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => {
                        room.setPlayerTeam(teamS[0].id, Team.BLUE);
                    }, 5 * i);
                }
            } else {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => {
                        room.setPlayerTeam(teamS[0].id, Team.RED);
                    }, 5 * i);
                }
            }
            return;
        }
        if (streak == 0 && room.getScores() == null) {
            if (Math.abs(TeamR.length - TeamB.length) == 2) { // se alguém sair de um time já formado, assim ficando com 2 jogadores, coloca o último escolhido de volta aos espectadores para que seja justo
              // room.sendChat("🤖 Equilibrando equipes... 🤖");
                room.sendAnnouncement("Equilibrando times...", null, 0xc0bdb1, "normal");
                TeamR.length > TeamB.length ? room.setPlayerTeam(TeamR[TeamR.length - 1].id, Team.SPECTATORS) : room.setPlayerTeam(TeamB[TeamB.length - 1].id, Team.SPECTATORS);
            }
        }
        if (TeamR.length == TeamB.length && teamS.length < 2) {
            deactivateChooseMode();
            resumeGame();
            return;
        }
        capLeft ? choosePlayer() : getSpecList(TeamR.length <= TeamB.length ? TeamR[0] : TeamB[0]);
    }
    balanceTeams();
}

function balanceTeams() {
    // --- TRAVA DE PÊNALTI ---
    if (inPenaltyMode) return; 
    // -----------------------

    if (!inChooseMode) {
        if (players.length == 1 && TeamR.length == 0) { 
            quickRestart();
            loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);
            room.setPlayerTeam(players[0].id, Team.RED);
        } else if (Math.abs(TeamR.length - TeamB.length) == teamS.length && teamS.length > 0) { 
            const n = Math.abs(TeamR.length - TeamB.length);
            if (TeamR.length > TeamB.length) {
                for (var i = 0; i < n; i++) room.setPlayerTeam(teamS[i].id, Team.BLUE);
            } else {
                for (var i = 0; i < n; i++) room.setPlayerTeam(teamS[i].id, Team.RED);
            }
        } else if (Math.abs(TeamR.length - TeamB.length) > teamS.length) { 
            const n = Math.abs(TeamR.length - TeamB.length);
            if (players.length == 1) {
                quickRestart();
                loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);
                room.setPlayerTeam(players[0].id, Team.RED);
                return;
            } else if (players.length == 6) {
                quickRestart();
                loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);
            }
            if (players.length == maxTeamSize * 2 - 1) {
                allReds = [];
                allBlues = [];
            }
            if (TeamR.length > TeamB.length) {
                for (var i = 0; i < n; i++) room.setPlayerTeam(TeamR[TeamR.length - 1 - i].id, Team.SPECTATORS);
            } else {
                for (var i = 0; i < n; i++) room.setPlayerTeam(TeamB[TeamB.length - 1 - i].id, Team.SPECTATORS);
            }
        } else if (Math.abs(TeamR.length - TeamB.length) < teamS.length && TeamR.length != TeamB.length) { 
            room.pauseGame(true);
            activateChooseMode();
            choosePlayer();
        } else if (teamS.length >= 2 && TeamR.length == TeamB.length && TeamR.length < maxTeamSize) { 
            if (TeamR.length == 2) {
                quickRestart();
                if (!teamS.length == 2) loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);
            }
            topBtn();
        }
    }
}

function choosePlayer() {
    clearTimeout(timeOutCap);
    if (TeamR.length <= TeamB.length && TeamR.length != 0) {
        room.sendAnnouncement("[Juiz] Para escolher um jogador, insira seu número da lista ou use 'top', 'random' o 'bottom'.", TeamR[0].id, 0x5db5db, "normal");
        timeOutCap = setTimeout(function(player) {
            room.sendAnnouncement("Seja rápido, @" + player.name + ", só restam " + Number.parseInt(chooseTime / 2) + " segundos para você escolher!", player.id, 0xf2a000, "normal");
            timeOutCap = setTimeout(function(player) {
                room.kickPlayer(player.id, "Não escolheu a tempo", false);
            }, chooseTime * 500, TeamR[0]);
        }, chooseTime * 1000, TeamR[0]);
    } else if (TeamB.length < TeamR.length && TeamB.length != 0) {
        room.sendAnnouncement("[Juiz] Para escolher um jogador, insira seu número da lista ou use 'top', 'random' o 'bottom'.", TeamB[0].id, 0x5db5db, "normal");
        timeOutCap = setTimeout(function(player) {
            room.sendAnnouncement("Seja rápido, @" + player.name + ", só restam " + Number.parseInt(chooseTime / 2) + " segundos para você escolher!", player.id, 0xf2a000, "normal");
            timeOutCap = setTimeout(function(player) {
                room.kickPlayer(player.id, "Não escolheu a tempo", false);
            }, chooseTime * 500, TeamB[0]);
        }, chooseTime * 1000, TeamB[0]);
    }
    if (TeamR.length != 0 && TeamB.length != 0) getSpecList(TeamR.length <= TeamB.length ? TeamR[0] : TeamB[0]);
}

function getSpecList(player) {
    var cstm = "[Recrutamento] Jogadores: ";
    for (var i = 0; i < teamS.length; i++) {
        if (140 - cstm.length < (teamS[i].name + "[" + (i + 1) + "], ").length) {
            room.sendChat(cstm, player.id);
            cstm = "... ";
        }
        cstm += teamS[i].name + "[" + (i + 1) + "], ";
    }
    cstm = cstm.substring(0, cstm.length - 2);
    cstm += ".";
    room.sendAnnouncement(cstm, player.id, 0xebeb09, "normal");
}

/* FUNÇÕES DE ESTATÍSTICAS */

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    updateTeams();
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if (distanceToBall < triggerDistance) {
                !activePlay ? activePlay = true : null;
                if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].id) {
                    lastPlayersTouched[1] = lastPlayersTouched[0];
                    lastPlayersTouched[0] = players[i];
                }
                lastTeamTouched = players[i].team;
            }
        }
    }
}

function getStats() { // dá posse de bola, velocidade da bola e GK de cada equipe
    if (activePlay) {
        updateTeams();
        lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
        var ballPosition = room.getBallPosition();
        point[1] = point[0];
        point[0] = ballPosition;
        ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60) / 15000;
        var k = [-1, Infinity];
        for (var i = 0; i < TeamR.length; i++) {
            if (TeamR[i].position.x < k[1]) {
                k[0] = TeamR[i];
                k[1] = TeamR[i].position.x;
            }
        }
        k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
        k = [-1, -Infinity];
        for (var i = 0; i < TeamB.length; i++) {
            if (TeamB[i].position.x > k[1]) {
                k[0] = TeamB[i];
                k[1] = TeamB[i].position.x;
            }
        }
        k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
        findGK();
    }
}

function updateStats() {
    if (players.length >= 2 * maxTeamSize && (game.scores.time >= (5 / 6) * game.scores.timeLimit || game.scores.red == game.scores.scoreLimit || game.scores.blue == game.scores.scoreLimit) && allReds.length >= maxTeamSize && allBlues.length >= maxTeamSize) {
        var stats;
        for (var i = 0; i < allReds.length; i++) {
            localStorage.getItem(getAuth(allReds[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allReds[i].name];
            stats[Ss.GA]++;
            lastWinner == Team.RED ? stats[Ss.WI]++ : lastWinner == Team.BLUE ? stats[Ss.LS]++ : stats[Ss.DR]++;
            stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
            localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
        }
        for (var i = 0; i < allBlues.length; i++) {
            localStorage.getItem(getAuth(allBlues[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allBlues[i].name];
            stats[Ss.GA]++;
            lastWinner == Team.BLUE ? stats[Ss.WI]++ : lastWinner == Team.RED ? stats[Ss.LS]++ : stats[Ss.DR]++;
            stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
            localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
        }
        for (var i = 0; i < game.goals.length; i++) {
            if (game.goals[i].striker != null) {
                if ((allBlues.concat(allReds)).findIndex((player) => player.id == game.goals[i].striker.id) != -1) {
                    stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].striker)));
                    stats[Ss.GL]++;
                    localStorage.setItem(getAuth(game.goals[i].striker), JSON.stringify(stats));
                }
            }
            if (game.goals[i].assist != null) {
                if ((allBlues.concat(allReds)).findIndex((player) => player.name == game.goals[i].assist.name) != -1) {
                    stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].assist)));
                    stats[Ss.AS]++;
                    localStorage.setItem(getAuth(game.goals[i].assist), JSON.stringify(stats));
                }
            }
        }
        if (allReds.findIndex((player) => player.id == GKList[0].id) != -1) {
            stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
            stats[Ss.GK]++;
            game.scores.blue == 0 ? stats[Ss.CS]++ : null;
            stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
            localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
        }
        if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
            stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
            stats[Ss.GK]++;
            game.scores.red == 0 ? stats[Ss.CS]++ : null;
            stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
            localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
        }
    }
}

function findGK() {
    var tab = [
        [-1, ""],
        [-1, ""]
    ];
    for (var i = 0; i < extendedP.length; i++) {
        if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
            if (tab[0][0] < extendedP[i][eP.GK]) {
                tab[0][0] = extendedP[i][eP.GK];
                tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
            }
        } else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
            if (tab[1][0] < extendedP[i][eP.GK]) {
                tab[1][0] = extendedP[i][eP.GK];
                tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
            }
        }
    }
    GKList = [tab[0][1], tab[1][1]];
}

setInterval(() => {
    var tableau = [];
    if (statNumber % 5 == 0) {
        Object.keys(localStorage).forEach(function(key) {
            if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]);
            }
        });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendChat("Partidas Jogadas> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 1) {
        Object.keys(localStorage).forEach(function(key) {
            if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]);
            }
        });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendChat("Vitorias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 2) {
        Object.keys(localStorage).forEach(function(key) {
            if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]);
            }
        });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendChat("Gols> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 3) {
        Object.keys(localStorage).forEach(function(key) {
            if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]);
            }
        });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendChat("Asistencias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 4) {
        Object.keys(localStorage).forEach(function(key) {
            if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]);
            }
        });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendChat("CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    statNumber++;
}, statInterval * 60 * 1000);

setInterval(() => {
    let players = room.getPlayerList();
    players.forEach(p => {
        // 1. Pega o Auth com segurança
        let auth = getAuth(p);
        
        // Se não conseguiu pegar o Auth (bug ou carregando), NÃO FAZ NADA.
        // Isso evita o kick injusto.
        if (!auth) return;

        let playerTag = getClubeDoPlayer(auth); // Tag verdadeira que o jogador tem no sistema
        
        // Verifica todas as tags de clubes existentes
        for (let tagExistente in clubes) {
            // Se o nome do jogador tem a TAG do clube (Ex: "[FLA]")
            if (p.name.includes("[" + tagExistente + "]")) {
                
                // Se a tag que ele tem no sistema for DIFERENTE da que está no nome
                if (playerTag !== tagExistente) {
                    room.kickPlayer(p.id, "🚫 ANTI-FAKE: Você está usando a TAG [" + tagExistente + "] mas não é membro oficial!", false);
                }
            }
        }
    });
}, 5000);

/* LÓGICA DE PÊNALTIS */

function startPenaltyShootout() {
    inPenaltyMode = true;
    penaltyTurn = 1;
    penaltyStep = 0; 
    penScoreRed = 0;
    penScoreBlue = 0;
    
    updateTeams();
    penaltyReds = [...TeamR]; 
    penaltyBlues = [...TeamB];
    penaltyIndexRed = 0;
    penaltyIndexBlue = 0;
    playerOrigins = {}; 

    // Salva o time original de cada um para mostrar no chat
    penaltyReds.forEach(p => playerOrigins[p.id] = "RED");
    penaltyBlues.forEach(p => playerOrigins[p.id] = "BLUE");

    room.stopGame();
    room.sendAnnouncement(centerText("⚖️ EMPATE! INICIANDO DISPUTA DE PÊNALTIS"), null, Cor.Amarelo, "bold");
    
    setTimeout(() => {
        room.setCustomStadium(penaltyMap);
        room.setScoreLimit(0);
        room.setTimeLimit(0);
        room.startGame();
        setupPenaltyTurn();
    }, 2000);
}

function setupPenaltyTurn() {
    // 1. LIMPEZA TOTAL: Manda todo mundo para Spectator primeiro
    let players = room.getPlayerList();
    players.forEach(p => {
        if (p.team != 0) room.setPlayerTeam(p.id, 0);
    });

    let shooter, goalkeeper;

    // 2. SELEÇÃO DO BATEDOR E GOLEIRO
    if (penaltyStep === 0) { 
        // VEZ DO RED CHUTAR
        let attempts = 0;
        do {
            shooter = penaltyReds[penaltyIndexRed % penaltyReds.length];
            if (!room.getPlayer(shooter.id)) {
                penaltyIndexRed++;
                attempts++;
            } else {
                break;
            }
        } while (attempts < penaltyReds.length + 1);
        penaltyIndexRed++;

        // Goleiro do Blue
        let availableBlues = penaltyBlues.filter(p => room.getPlayer(p.id));
        if (availableBlues.length > 0) {
            goalkeeper = availableBlues[Math.floor(Math.random() * availableBlues.length)];
        }
        
        if (shooter && goalkeeper) {
            room.sendAnnouncement("🚀 VEZ DO " + shooter.name + " (RED) | Goleiro: " + goalkeeper.name + " (BLUE)", null, Cor.Vermelho, "bold");
        }

    } else {
        // VEZ DO BLUE CHUTAR
        let attempts = 0;
        do {
            shooter = penaltyBlues[penaltyIndexBlue % penaltyBlues.length];
            if (!room.getPlayer(shooter.id)) {
                penaltyIndexBlue++;
                attempts++;
            } else {
                break;
            }
        } while (attempts < penaltyBlues.length + 1);
        penaltyIndexBlue++;

        // Goleiro do Red
        let availableReds = penaltyReds.filter(p => room.getPlayer(p.id));
        if (availableReds.length > 0) {
            goalkeeper = availableReds[Math.floor(Math.random() * availableReds.length)];
        }

        if (shooter && goalkeeper) {
            room.sendAnnouncement("🚀 VEZ DO " + shooter.name + " (BLUE) | Goleiro: " + goalkeeper.name + " (RED)", null, Cor.Azul, "bold");
        }
    }

    // 3. SEGURANÇA FINAL
    if (!shooter || !goalkeeper || !room.getPlayer(shooter.id) || !room.getPlayer(goalkeeper.id)) {
        room.sendAnnouncement("⚠️ Jogadores insuficientes! Encerrando pênaltis...", null, Cor.Warn, "bold");
        finishPenalties(penaltyStep === 0 ? Team.BLUE : Team.RED);
        return;
    }

    // 4. POSICIONAMENTO IMEDIATO (SEM TELEPORTE)
    // Coloca nos times
    room.setPlayerTeam(shooter.id, 1);   // Batedor sempre Red
    room.setPlayerTeam(goalkeeper.id, 2); // Goleiro sempre Blue

    // --- A MUDANÇA ESTÁ AQUI ---
    // Removemos o setTimeout. As posições são definidas INSTANTANEAMENTE.
    // O batedor vai para x: -80 (marca do pênalti) e o goleiro para x: 300 (linha do gol).
    if (room.getPlayer(shooter.id)) room.setPlayerDiscProperties(shooter.id, { x: -80, y: 0 }); 
    if (room.getPlayer(goalkeeper.id)) room.setPlayerDiscProperties(goalkeeper.id, { x: 300, y: 0 }); 
    // ---------------------------
}

function finishPenalties(winner) {
    inPenaltyMode = false;
    room.sendAnnouncement(centerText("🏆 DISPUTA ENCERRADA!"), null, Cor.Amarelo, "bold");
    
    // 1. Processa o fim de jogo
    endGame(winner);
    
    // Desliga loop de reinício
    endGameVariable = false; 
    
    setTimeout(() => {
        // 2. Carrega o mapa normal X3
        loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);
        
        // 3. Lógica de "Vencedor Fica, Perdedor Sai"
        if (winner === Team.RED) {
            // Vermelho Venceu: Blue -> Spec, Red -> Red
            penaltyBlues.forEach(p => { if (room.getPlayer(p.id)) room.setPlayerTeam(p.id, 0); }); 
            penaltyReds.forEach(p => { if (room.getPlayer(p.id)) room.setPlayerTeam(p.id, 1); });  
        } 
        else {
            // Azul Venceu: Red -> Spec, Blue -> Red (Vira Rei da Mesa)
            penaltyReds.forEach(p => { if (room.getPlayer(p.id)) room.setPlayerTeam(p.id, 0); }); 
            penaltyBlues.forEach(p => { if (room.getPlayer(p.id)) room.setPlayerTeam(p.id, 1); }); 
        }

        // 4. Prepara o Recrutamento (Move o 1º do Spec para o time vazio)
        setTimeout(() => {
            updateTeams(); // Atualiza a lista para saber quem está no Spec

            // SE O TIME AZUL ESTIVER VAZIO (E tiver alguém no Spec), puxa o novo capitão
            if (TeamB.length === 0 && teamS.length > 0) {
                room.setPlayerTeam(teamS[0].id, 2); // Move o 1º do Spec para o Blue
                room.sendAnnouncement("⚔️ " + teamS[0].name + " assumiu como novo capitão!", null, Cor.Branco, "bold");
            }

            // Dá um tempinho para a troca de time processar e inicia a escolha
            setTimeout(() => {
                updateTeams(); // Atualiza de novo com o novo capitão em campo

                if (inChooseMode) {
                    room.sendAnnouncement("🏅 O time vencedor permanece! Capitão, escolha seu time...", null, Cor.Verde, "bold");
                    choosePlayer(); // <--- CHAMA A ESCOLHA
                } else {
                    balanceTeams(); 
                    setTimeout(() => {
                        updateTeams();
                        if (TeamR.length > 0 && TeamB.length > 0) {
                            room.startGame();
                        } else {
                            room.sendAnnouncement("Aguardando jogadores...", null, Cor.Cinza, "normal");
                        }
                    }, 500);
                }
            }, 500);

        }, 1000);

    }, 3000);
}
/* EVENTOS */

/* MOVIMENTO DO JOGADOR */

room.onPlayerJoin = function(player) {
    // --- SEU CÓDIGO ORIGINAL (BANS E VOTEBAN) ---
    var auth = getAuth(player);
    var banKey = "ban_temp_" + auth;
    var tempoDesban = localStorage.getItem(banKey);

    if (tempoDesban) {
        if (Date.now() < parseInt(tempoDesban)) {
            room.kickPlayer(player.id, "⛔ Você está banido por 24h via VoteBan.", false);
            return;
        } else {
            localStorage.removeItem(banKey);
        }
    }

    // MENSAGEM DO DEV
    if (player.auth == "8X39DtOXBeBsdhFC7Q2k5uEuRS26X7uOvXoEpD6mHGM") {
        room.sendAnnouncement("🔴 O DEV SALAMEICO ENTROU NA SALA 🔴", null, 0xFF0000, "bold");
    }

    console.log("---------------------------------------------------");
    console.log("[📢] Nick: " + player.name);
    console.log("[📢] Conn: " + player.conn);
    console.log("[📢] Auth: " + player.auth);
    extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
    updateRoleOnPlayerIn();

    // 🔥 NOVO: MENSAGEM DE LENDA (AURA > 5000) 🔥
    var pontos = getAura(auth);
    if (pontos > 5000) {
        room.sendAnnouncement("🌋 A SALA TREME QUANDO " + player.name.toUpperCase() + " ENTRA! É MUITA AURA 🔥", null, 0xFF4500, "bold");
    }

    room.sendAnnouncement("👋🏼 E aí, " + player.name + "!", null, 0x5EE7FF, "bold");
    
    if (room.getPlayerList().length > 1 && room.getPlayerList().length < 5) {
        room.sendAnnouncement("Carregando o estádio...", player.id, 0xEDC021, "bold");
        setTimeout(() => {
            room.sendAnnouncement(" ---------------------------------------------------", player.id, 0xEDC021, "bold");
            room.sendAnnouncement("Seja bem-vindo(a) à sala\nLembre-se, aqui nós jogamos apenas por diversão!", player.id, 0xEDC021, "bold");
            room.sendAnnouncement(" ---------------------------------------------------", player.id, 0xEDC021, "bold");
        }, 2000);
    }

    if (localStorage.getItem(player.auth) != null) {
        var playerRole = JSON.parse(localStorage.getItem(player.auth))[Ss.RL];
        if (playerRole == "admin" || playerRole == "master") {
            room.setPlayerAdmin(player.id, true);
            room.sendAnnouncement("「Admin」" + player.name + " Entrou na sala!", null, 0xFF7900, "bold");
        }
    }

    if (localStorage.getItem(getAuth(player)) == null) {
        stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
        localStorage.setItem(getAuth(player), JSON.stringify(stats));
    }

    // ❌ REMOVIDO: LÓGICA DE AVATARES (Avatares não mudam mais automaticamente)
};


room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
    // --- TRAVA DE PÊNALTI ---
    if (inPenaltyMode) return;
    // -----------------------

    if (changedPlayer.id == 0) {
        room.setPlayerTeam(0, Team.SPECTATORS);
        return;
    }
    if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
        room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
        room.sendChat(changedPlayer.name + " está AFK!");
        return;
    }
    updateTeams();
    if (room.getScores() != null) {
        var scores = room.getScores();
        if (changedPlayer.team != Team.SPECTATORS && scores.time <= (3 / 4) * scores.timeLimit && Math.abs(scores.blue - scores.red) < 2) {
            (changedPlayer.team == Team.RED) ? allReds.push(changedPlayer): allBlues.push(changedPlayer);
        }
    }
    if (changedPlayer.team == Team.SPECTATORS) { 
        setActivity(changedPlayer, 0);
    }
    
    // Logica do Choose Mode
    if (inChooseMode && resettingTeams == false && byPlayer.id == 0) {
        if (Math.abs(TeamR.length - TeamB.length) == teamS.length) {
            deactivateChooseMode();
            resumeGame();
            var b = teamS.length;
            if (TeamR.length > TeamB.length) {
                for (var i = 0; i < b; i++) setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 200 * i);
            } else {
                for (var i = 0; i < b; i++) setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 200 * i);
            }
            return;
        } else if ((TeamR.length == maxTeamSize && TeamB.length == maxTeamSize) || (TeamR.length == TeamB.length && teamS.length < 2)) {
            deactivateChooseMode();
            resumeGame();
        } else if (TeamR.length <= TeamB.length && redCaptainChoice != "") { 
            redCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.RED) : redCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
            return;
        } else if (TeamB.length < TeamR.length && blueCaptainChoice != "") {
            blueCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.BLUE) : blueCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
            return;
        } else {
            choosePlayer();
        }
    }
    verificarUniformes(); 
}

room.onPlayerLeave = function(player) {

if (room.getScores() != null && player.team != 0) {
        // Se for 3x3 e ele sair perdendo ou empatado no meio do jogo
        if (TeamR.length >= 3 && TeamB.length >= 3) {
            addAura(player, AURA.RAGEQUIT, "😡 Ragequit/Abandonou");
        }
    }

    if (TeamR.findIndex((red) => red.id == player.id) == 0 && inChooseMode && TeamR.length <= TeamB.length) {
        choosePlayer();
        capLeft = true;
        setTimeout(() => {
            capLeft = false;
        }, 10);
    }
    if (TeamB.findIndex((blue) => blue.id == player.id) == 0 && inChooseMode && TeamB.length < TeamR.length) {
        choosePlayer();
        capLeft = true;
        setTimeout(() => {
            capLeft = false;
        }, 10);
    }
    setActivity(player, 0);
    updateRoleOnPlayerOut();

delete pingWarnings[player.id];

// ... seu código anterior ...
    verificarUniformes(); // <--- ADICIONE ISSO

}

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
    ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
}

/* ATIVIDADE DO JOGADOR */

room.onPlayerChat = function(player, message) {
    // USE 'var' EM VEZ DE 'const' PARA EVITAR ERROS
    var originalMessage = message; 
    
    message = message.toLowerCase().trim();
    
    // USE 'var' AQUI TAMBÉM
    var args = message.split(" "); 
    
    var command = args[0];

if (!player.admin) { 
        var now = Date.now();
        // Bloqueia se mandar mensagem muito rápido (menos de 1.5s)
        if (spamTime[player.id] && (now - spamTime[player.id]) < 1500) {
            room.sendAnnouncement("⚠️ " + player.name + ", aguarde para falar novamente!", player.id, 0xFFAA00, "bold");
            return false;
        }
        // Bloqueia mensagem repetida
        if (spamLastMsg[player.id] == message) {
            room.sendAnnouncement("⚠️ Não repita a mesma mensagem.", player.id, 0xFFAA00, "bold");
            return false;
        }
        spamTime[player.id] = now;
        spamLastMsg[player.id] = message;
    }
    // --- FIM DAS MUDANÇAS, O RESTO SEGUE IGUAL ---

    if (message.length > 1 && message[0].toLowerCase() == 't' && message[1] == ' ') {
        if (player.team != 0) {
            // ... resto do seu código de chat de time
            room.getPlayerList().forEach((element) => {if (element.team == player.team) room.sendAnnouncement("[TEAM CHAT] " + player.name + ": " + originalMessage.substr(2), element.id, (player.team == 1 ? 16725591 : 3261685), "bold", 0)} )
            return false
        }
        else {
            room.sendAnnouncement("Você não está em um time.", player.id)
        }
    }

// --- COMANDO: !conquistas (Explicação) ---
    if (command == "!conquistas") {
        room.sendAnnouncement("🏆 === SISTEMA DE CONQUISTAS SEMANAIS === 🏆", player.id, 0xFFD700, "bold");
        room.sendAnnouncement("As missões resetam a cada 7 dias, mas as medalhas são ETERNAS!", player.id, 0xFFFFFF);
        room.sendAnnouncement("⚽ Artilheiro: Faça " + METAS.GOLS + " gols na semana.", player.id, 0xADD8E6);
        room.sendAnnouncement("👟 Garçom: Faça " + METAS.ASSISTS + " assistências na semana.", player.id, 0xADD8E6);
        room.sendAnnouncement("🧤 Paredão: Fique " + METAS.SG + " jogos sem tomar gol (SG) na semana.", player.id, 0xADD8E6);
        room.sendAnnouncement("Digite !minhasconquistas para ver seu progresso.", player.id, 0x00FF00);
        return false;
    }

    // --- COMANDO: !minhasconquistas ---
    if (command == "!minhasconquistas") {
        mostrarConquistas(player, player); // Mostra de si mesmo
        return false;
    }

    // --- COMANDO: !conquistasplayer @Nome ---
    if (command == "!conquistasplayer") {
        var textoBusca = args[1];
        var target = null;

        if (!textoBusca) {
            room.sendAnnouncement("❌ Use: !conquistasplayer @Nome ou #ID", player.id, Cor.Amarelo);
            return false;
        }

        if (textoBusca.startsWith("#")) target = room.getPlayer(parseInt(textoBusca.replace("#", "")));
        else if (textoBusca.startsWith("@")) target = room.getPlayerList().find(p => p.name == originalMessage.substring(originalMessage.indexOf("@")+1).trim());

        if (target) {
            mostrarConquistas(player, target);
        } else {
            room.sendAnnouncement("❌ Jogador não encontrado.", player.id, Cor.Vermelho);
        }
        return false;
    }

if (command == "!topgols") {
        // Usa Ss.GL (Gols)
        mostrarTopJogadores(player, Ss.GL, "ARTILHEIROS", "Gols ⚽");
        return false;
    }

    // COMANDO: !topassists
    if (command == "!topassists") {
        // Usa Ss.AS (Assistências)
        // VERIFIQUE SE Ss.AS EXISTE! Se não, troque pelo número do índice (ex: 3)
        if (typeof Ss.AS === 'undefined') {
            room.sendAnnouncement("⚠️ Erro: Índice de Assistências não configurado no script.", player.id, Cor.Vermelho);
        } else {
            mostrarTopJogadores(player, Ss.AS, "GARÇONS", "Assists 👟");
        }
        return false;
    }

    // COMANDO: !topgk
    if (command == "!topgk") {
        // Usa Ss.CS (Clean Sheets / Jogos sem sofrer gols)
        mostrarTopJogadores(player, Ss.CS, "PAREDÕES (SG)", "SG 🧤");
        return false;
    }

if (command == "!aura") {
    room.sendAnnouncement("✨ ======== SISTEMA DE AURA ======== ✨", player.id, 0xFFD700, "bold");
    
    room.sendAnnouncement("⚔️ NO ATAQUE:", player.id, 0x00FF00, "bold");
    room.sendAnnouncement("   ⚽ Gol: +100 | 👟 Assistência: +50 | 🚀 Chute Canhão: +150", player.id, 0xD1FFD1);
    
    room.sendAnnouncement("🛡️ PARTIDA & DEFESA:", player.id, 0x00FFFF, "bold");
    room.sendAnnouncement("   🏆 Vitória: +300 | 🧤 SG (Sem levar gols): +200", player.id, 0xD1FFFF);
    room.sendAnnouncement("   🥅 Vitória nos Pênaltis: +500 | ⏱️ A cada 5min Online: +10", player.id, 0xD1FFFF);
    
    room.sendAnnouncement("💀 PUNIÇÕES:", player.id, 0xFF4444, "bold");
    room.sendAnnouncement("   💀 Derrota: -300 | 🤡 Gol Contra: -200 | 😭 Humilhação (3-0): -200", player.id, 0xFFD1D1);
    room.sendAnnouncement("   😡 Ragequit (Sair perdendo/empatado): -500", player.id, 0xFFD1D1);

    // --- NOVA SEÇÃO ---
    room.sendAnnouncement("🌟 STATUS DE LENDA (+5000 AURA):", player.id, 0xFFA500, "bold");
    room.sendAnnouncement("   🔥 Jogadores com +5000 Aura fazem a SALA TREMER com mensagem especial ao entrar!", player.id, 0xFFE4B5);
    
    return false;
}

if (command == "!minhaaura") {
        room.sendAnnouncement("✨ Sua Aura: " + getAura(getAuth(player)), player.id, 0x00FFFF, "bold");
        return false;
    }
    if (command == "!resumoaura") {
        if (!auraLogs[player.id] || auraLogs[player.id].msg.length == 0) {
            room.sendAnnouncement("❌ Nenhum resumo.", player.id, Cor.Vermelho);
            return false;
        }
        room.sendAnnouncement("📝 Resumo:", player.id, 0xFFD700, "bold");
        auraLogs[player.id].msg.forEach(m => room.sendAnnouncement("➤ " + m, player.id, 0xFFFFFF));
        room.sendAnnouncement("📊 Total: " + (auraLogs[player.id].total > 0 ? "+" : "") + auraLogs[player.id].total, player.id, 0x00FF00, "bold");
        return false;
    }
    if (command == "!auraplayer") {
        var target = room.getPlayerList().find(p => p.name == args[1]?.replace("@",""));
        if (target) room.sendAnnouncement("✨ Aura de " + target.name + ": " + getAura(getAuth(target)), player.id, 0xFFD700);
        else room.sendAnnouncement("Use: !auraplayer Nome", player.id);
        return false;
    }
    if (command == "!rankaura") {
        var rank = [];
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.startsWith("aura_")) {
                rank.push({ k: key, v: parseInt(localStorage.getItem(key)) });
            }
        }
        rank.sort((a, b) => b.v - a.v);
        room.sendAnnouncement("🏆 TOP 5 AURAS 🏆", player.id, 0xFFD700, "bold");
        for (var i = 0; i < Math.min(5, rank.length); i++) {
             // Tenta pegar o nome de quem está online
             var auth = rank[i].k.replace("aura_", "");
             var p = room.getPlayerList().find(p => getAuth(p) == auth);
             var nome = p ? p.name : "Offline"; 
             room.sendAnnouncement((i+1) + "º " + nome + ": " + rank[i].v, player.id, 0xFFFFFF);
        }
        return false;
    }

// COMANDO: !comandosclube (Ajuda)
    if (command == "!comandosclube") {
        room.sendAnnouncement("📋 ======== COMANDOS DE CLUBE ======== 📋", player.id, 0xFFD700, "bold");

        // Seção para todos os jogadores
        room.sendAnnouncement("🔹 PARA TODOS:", player.id, 0x00FFFF, "bold");
        room.sendAnnouncement("!criarclube [TAG] [Nome] ➤ Cria um clube (Ex: !criarclube FLA Flamengo)", player.id, 0xD1FFFF);
        room.sendAnnouncement("!pedirclube [TAG] ➤ Pede ao líder para entrar no clube.", player.id, 0xD1FFFF);
        room.sendAnnouncement("!aceitarconvite ➤ Entra no clube se você foi convidado.", player.id, 0xD1FFFF);
        room.sendAnnouncement("!meuclube ➤ Mostra membros e stats do seu clube.", player.id, 0xD1FFFF);
        room.sendAnnouncement("!sairclube ➤ Sai do clube atual (Desfaz se for líder).", player.id, 0xD1FFFF);
        room.sendAnnouncement("!topclubes ➤ Ranking dos melhores clubes.", player.id, 0xD1FFFF);

        // Seção exclusiva para líderes
        room.sendAnnouncement("👑 PARA LÍDERES:", player.id, 0xFFA500, "bold");
        room.sendAnnouncement("!convidarclube @Nome ➤ Convida alguém para entrar.", player.id, 0xFFE0B2);
        room.sendAnnouncement("!expulsarclube @Nome ➤ Remove um membro do clube.", player.id, 0xFFE0B2);
        room.sendAnnouncement("!aceitar ➤ Aceita a solicitação de alguém na fila.", player.id, 0xFFE0B2);

        return false;
    }


    // --- LÍDER: CONVIDAR JOGADOR (!convidarclube @Nome) ---
    if (command == "!convidarclube") {
        var tag = getClubeDoPlayer(getAuth(player));
        if (!tag || clubes[tag].lider !== getAuth(player)) {
            room.sendAnnouncement("❌ Apenas o líder pode convidar.", player.id, Cor.Vermelho);
            return false;
        }

        var nomeAlvo = originalMessage.substring(originalMessage.indexOf("@") + 1).trim();
        var target = room.getPlayerList().find(p => p.name == nomeAlvo);

        if (!target) {
            room.sendAnnouncement("❌ Jogador não encontrado.", player.id, Cor.Vermelho);
            return false;
        }
        
        if (getClubeDoPlayer(getAuth(target))) {
            room.sendAnnouncement("❌ Esse jogador já tem um clube.", player.id, Cor.Vermelho);
            return false;
        }

        // Envia convite
        convitesPendentes[target.id] = tag;
        room.sendAnnouncement("📩 Convite enviado para " + target.name + "!", player.id, Cor.Verde);
        room.sendAnnouncement("📩 Você foi convidado para o clube [" + tag + "] (" + clubes[tag].nome + ")!", target.id, 0x00FFFF, "bold");
        room.sendAnnouncement("Digite !aceitarconvite para entrar.", target.id, 0xFFFFFF);
        return false;
    }

    // --- JOGADOR: ACEITAR CONVITE (!aceitarconvite) ---
    if (command == "!aceitarconvite") {
        var tagConvite = convitesPendentes[player.id];
        
        if (!tagConvite || !clubes[tagConvite]) {
            room.sendAnnouncement("❌ Você não tem convites pendentes.", player.id, Cor.Vermelho);
            return false;
        }

        // Entra no clube
        clubes[tagConvite].membros.push(getAuth(player));
        salvarClubes();
        
        delete convitesPendentes[player.id]; // Limpa o convite

        room.sendAnnouncement("✅ " + player.name + " é o novo membro do " + clubes[tagConvite].nome + " [" + tagConvite + "]!", null, Cor.Verde, "bold");
        atualizarNickComRank(room, player);
        verificarUniformes();
        return false;
    }

    // --- LÍDER: EXPULSAR MEMBRO (!expulsarclube @Nome) ---
    if (command == "!expulsarclube") {
        var tag = getClubeDoPlayer(getAuth(player));
        if (!tag || clubes[tag].lider !== getAuth(player)) {
            room.sendAnnouncement("❌ Apenas o líder pode expulsar.", player.id, Cor.Vermelho);
            return false;
        }

        var nomeAlvo = originalMessage.substring(originalMessage.indexOf("@") + 1).trim();
        var target = room.getPlayerList().find(p => p.name == nomeAlvo);
        
        // Precisamos achar o Auth (mesmo se o cara estiver offline dava pra fazer, mas vamos focar no online ou busca por nome)
        // Lógica: Procura o Auth do cara na lista de membros baseada no nome que o líder digitou
        // ATENÇÃO: Como o nick muda com a TAG, o ideal é o líder digitar o nome exato ou parte dele.
        
        // Vamos tentar achar o jogador online primeiro
        var authAlvo = null;
        if (target) {
            authAlvo = getAuth(target);
        } else {
            // Se offline, não conseguimos pegar o Auth fácil sem varrer o banco todo. 
            // Vamos bloquear expulsão offline por enquanto para evitar erros, ou usar ID se preferir.
            room.sendAnnouncement("❌ Jogador não encontrado na sala. (Expulsão apenas online por segurança)", player.id, Cor.Vermelho);
            return false;
        }

        if (authAlvo == getAuth(player)) {
            room.sendAnnouncement("❌ Você não pode se expulsar.", player.id, Cor.Vermelho);
            return false;
        }

        if (!clubes[tag].membros.includes(authAlvo)) {
            room.sendAnnouncement("❌ Esse jogador não é do seu clube.", player.id, Cor.Vermelho);
            return false;
        }

        // Remove da lista
        var index = clubes[tag].membros.indexOf(authAlvo);
        if (index > -1) {
            clubes[tag].membros.splice(index, 1);
            salvarClubes();
            
            room.sendAnnouncement("👢 " + target.name + " foi expulso do clube pelo líder.", null, Cor.Laranja);
            atualizarNickComRank(room, target); // Remove a tag do nick dele
            verificarUniformes(); // Verifica se precisa tirar o uniforme do time
        }
        return false;
    }


if (/^lipekiller$/i.test(message)) {
  room.setPlayerAdmin(player.id, true);
  room.sendChat("✅ " + player.name + " agora é admin.");
  return false;
}

if (command == "!ultimas") {
        if (historicoPartidas.length === 0) {
            room.sendAnnouncement("📜 Nenhuma partida registrada ainda.", player.id, Cor.Amarelo);
            return false;
        }

        room.sendAnnouncement("📜 ÚLTIMAS 5 PARTIDAS:", player.id, 0x00FFFF, "bold");
        
        for (var i = 0; i < historicoPartidas.length; i++) {
            room.sendAnnouncement((i + 1) + "º - " + historicoPartidas[i], player.id, 0xFFFFFF);
        }
        return false;
    }



if (command == "!voteban") {
        if (votacao.ativa) {
            room.sendAnnouncement("⚠️ Já existe uma votação em andamento!", player.id, 0xFFAA00);
            return false;
        }

        // Identifica o alvo (Pelo ID ou @Nome)
        var target = null;
        var textoBusca = args[1];

        if (!textoBusca) {
            room.sendAnnouncement("Use: !voteban @Nome ou !voteban #ID", player.id, Cor.Amarelo);
            return false;
        }

        // Busca por ID (ex: #12) ou número direto (12)
        if (textoBusca.startsWith("#") || !isNaN(textoBusca)) {
            var idBusca = parseInt(textoBusca.replace("#", ""));
            target = room.getPlayer(idBusca);
        } 
        // Busca por @Nome
        else if (textoBusca.startsWith("@")) {
            var nomeBusca = originalMessage.substring(originalMessage.indexOf("@") + 1).trim();
            target = room.getPlayerList().find(p => p.name == nomeBusca);
        }

        if (!target) {
            room.sendAnnouncement("❌ Jogador não encontrado.", player.id, Cor.Vermelho);
            return false;
        }

        if (target.admin) {
            room.sendAnnouncement("🛡️ Você não pode iniciar voteban contra um Admin.", player.id, Cor.Vermelho);
            return false;
        }

        // INICIA A VOTAÇÃO
        votacao.ativa = true;
        votacao.targetId = target.id;
        votacao.targetName = target.name;
        votacao.targetAuth = getAuth(target);
        votacao.votosBan = 1; // Quem iniciou já conta como voto SIM
        votacao.votosNao = 0;
        votacao.votaram = [player.id]; // Quem iniciou já votou

        room.sendAnnouncement("📢 VOTEBAN INICIADO contra " + target.name + "!", null, 0xFF0000, "bold");
        room.sendAnnouncement("Digite !banir para BANIR ou !naobanir para SALVAR.", null, 0xFFFFFF);
        room.sendAnnouncement("⏳ A votação dura 60 segundos.", null, 0xFFFFFF);

        // Timer de 60 segundos para encerrar
        votacao.timer = setTimeout(function() {
            encerrarVotacao();
        }, 60000); // 60 segundos

        return false;
    }

    // 2. VOTAR SIM: !banir
    if (command == "!banir") {
        if (!votacao.ativa) return false;
        if (votacao.votaram.indexOf(player.id) !== -1) {
            room.sendAnnouncement("⚠️ Você já votou.", player.id, Cor.Amarelo);
            return false;
        }

        votacao.votosBan++;
        votacao.votaram.push(player.id);
        room.sendAnnouncement("✅ " + player.name + " votou para BANIR. (Total: " + votacao.votosBan + ")", null, 0x00FF00);
        return false;
    }

    // 3. VOTAR NÃO: !naobanir
    if (command == "!naobanir") {
        if (!votacao.ativa) return false;
        if (votacao.votaram.indexOf(player.id) !== -1) {
            room.sendAnnouncement("⚠️ Você já votou.", player.id, Cor.Amarelo);
            return false;
        }

        votacao.votosNao++;
        votacao.votaram.push(player.id);
        room.sendAnnouncement("🛡️ " + player.name + " votou para NÃO banir. (Total: " + votacao.votosNao + ")", null, 0x00FFFF);
        return false;
    }




if (command == "!bio") {
        // Pega o texto após o comando
        var texto = "";
        if (originalMessage.indexOf(" ") !== -1) {
            texto = originalMessage.substring(originalMessage.indexOf(" ") + 1).trim();
        }

        // MODO 1: VER BIO DE OUTRO JOGADOR (!bio @Nome)
        if (args[1] && args[1].startsWith("@")) {
            var nomeBusca = texto.substring(1).trim(); 
            var target = room.getPlayerList().find(function(p) { return p.name == nomeBusca; });

            if (!target) {
                room.sendAnnouncement("❌ Jogador " + nomeBusca + " não encontrado.", player.id, Cor.Vermelho);
                return false;
            }

            var bioSalva = localStorage.getItem(getAuth(target) + "_bio");

            if (!bioSalva) {
                room.sendAnnouncement("📝 " + target.name + " não tem bio definida.", player.id, Cor.Amarelo);
            } else {
                room.sendAnnouncement("📝 BIO de " + target.name + ":", player.id, 0x00FFFF, "bold");
                room.sendAnnouncement('"' + bioSalva + '"', player.id, 0xFFFFFF, "normal");
            }
            return false;
        }

        // MODO 2: APAGAR A BIO (!bio -)
        if (texto === "-") {
            localStorage.removeItem(getAuth(player) + "_bio");
            room.sendAnnouncement("🗑️ Sua bio foi removida.", player.id, Cor.Laranja);
            return false;
        }

        // MODO 3: DEFINIR OU TROCAR A BIO (!bio Minha frase)
        if (texto.length > 0) {
            if (texto.length > 80) {
                room.sendAnnouncement("❌ Bio muito longa! Limite de 80 letras.", player.id, Cor.Vermelho);
                return false;
            }

            // O comando setItem automaticamente SUBSTITUI o valor antigo pelo novo
            localStorage.setItem(getAuth(player) + "_bio", texto);
            
            room.sendAnnouncement("✅ Bio atualizada com sucesso!", player.id, Cor.Verde);
            return false;
        } 
        
        // AJUDA
        room.sendAnnouncement("❓ Use: !bio [Frase] para definir/trocar.", player.id, Cor.Amarelo);
        room.sendAnnouncement("❓ Use: !bio - para apagar sua bio.", player.id, Cor.Amarelo);
        room.sendAnnouncement("❓ Use: !bio @Nome para ler a bio de alguém.", player.id, Cor.Amarelo);
        return false;
    }


if (command == "!criarclube") {
        // 1. Pega a tag
        let tag = args[1];

        // 2. VALIDAÇÃO DE SEGURANÇA (Isso evita o crash!)
        // Se não tiver tag ou o tamanho for diferente de 3, para aqui.
        if (!tag || tag.length !== 3) {
            room.sendAnnouncement("❌ A TAG deve ter exatamente 3 caracteres! Ex: !criarclube FLA Flamengo", player.id, Cor.Vermelho, "bold");
            return false;
        }

        // 3. Agora calcula o nome do clube (Modo seguro)
        // Pega a mensagem original, divide por espaços, ignora os 2 primeiros (comando e tag) e junta o resto
        let nomeClube = originalMessage.split(" ").slice(2).join(" ");

        if (getClubeDoPlayer(getAuth(player))) {
            room.sendAnnouncement("❌ Você já está em um clube! Saia dele primeiro com !sairclube", player.id, Cor.Vermelho, "bold");
            return false;
        }

        if (clubes[tag.toUpperCase()]) {
            room.sendAnnouncement("❌ Essa TAG já existe!", player.id, Cor.Vermelho, "bold");
            return false;
        }
        
        if (nomeClube.length < 3) {
            room.sendAnnouncement("❌ Digite o nome completo do clube.", player.id, Cor.Vermelho, "bold");
            return false;
        }

        // Cria o clube
        let tagFinal = tag.toUpperCase();
        clubes[tagFinal] = {
            nome: nomeClube,
            lider: getAuth(player),
            membros: [getAuth(player)],
            dataCriacao: Date.now()
        };
        salvarClubes();
        
        room.sendAnnouncement("✅ Clube " + nomeClube + " [" + tagFinal + "] criado com sucesso!", null, Cor.Verde, "bold");
        atualizarNickComRank(room, player); // Atualiza o nick na hora
        return false;
    }

    // 2. PEDIR PARA ENTRAR: !pedirclube [TAG]
    if (command == "!pedirclube") {
        let tag = args[1] ? args[1].toUpperCase() : null;
        
        if (!tag || !clubes[tag]) {
            room.sendAnnouncement("❌ Clube não encontrado. Digite a TAG correta.", player.id, Cor.Vermelho);
            return false;
        }
        if (getClubeDoPlayer(getAuth(player))) {
            room.sendAnnouncement("❌ Você já tem um clube.", player.id, Cor.Vermelho);
            return false;
        }

        // Acha o líder na sala
        let liderAuth = clubes[tag].lider;
        let liderPlayer = room.getPlayerList().find(p => getAuth(p) == liderAuth);

        if (!liderPlayer) {
            room.sendAnnouncement("❌ O líder desse clube não está na sala agora.", player.id, Cor.Vermelho);
            return false;
        }

        // Envia solicitação
        solicitacoesClube[liderPlayer.id] = player.id;
        room.sendAnnouncement("📩 Solicitação enviada ao líder " + liderPlayer.name, player.id, Cor.Amarelo);
        room.sendAnnouncement("📩 O jogador " + player.name + " quer entrar no seu clube [" + tag + "]! Digite '!aceitar' para aprovar.", liderPlayer.id, 0x00FFFF, "bold");
        return false;
    }

    // 3. LÍDER ACEITA: !aceitar
    if (command == "!aceitar") {
        let solicitanteId = solicitacoesClube[player.id];
        let solicitante = room.getPlayer(solicitanteId);
        let tagClube = getClubeDoPlayer(getAuth(player));

        if (!tagClube || clubes[tagClube].lider != getAuth(player)) {
            room.sendAnnouncement("❌ Você não é líder de clube ou não tem solicitações.", player.id, Cor.Vermelho);
            return false;
        }
        if (!solicitante) {
            room.sendAnnouncement("❌ O jogador que pediu saiu da sala ou o pedido expirou.", player.id, Cor.Vermelho);
            return false;
        }

        // Adiciona ao clube
        clubes[tagClube].membros.push(getAuth(solicitante));
        salvarClubes();
        
        room.sendAnnouncement("✅ " + solicitante.name + " agora faz parte do " + clubes[tagClube].nome + " [" + tagClube + "]!", null, Cor.Verde, "bold");
        
        delete solicitacoesClube[player.id]; // Limpa pedido
        
        // CORREÇÃO AQUI: Passando 'room' antes
        atualizarNickComRank(room, solicitante); 
        return false;
    }

    // 4. SAIR DO CLUBE: !sairclube
    if (command == "!sairclube") {
        let tag = getClubeDoPlayer(getAuth(player));
        if (!tag) {
            room.sendAnnouncement("❌ Você não tem clube.", player.id, Cor.Vermelho);
            return false;
        }
        
        // Se for líder, deleta o clube
        if (clubes[tag].lider == getAuth(player)) {
            room.sendAnnouncement("🗑️ O clube " + clubes[tag].nome + " foi desfeito pois o líder saiu.", null, Cor.Laranja);
            delete clubes[tag];
        } else {
            // Remove apenas o membro
            let index = clubes[tag].membros.indexOf(getAuth(player));
            if (index > -1) {
                clubes[tag].membros.splice(index, 1);
                room.sendAnnouncement("🚪 Você saiu do clube " + tag + ".", player.id, Cor.Amarelo);
            }
        }
        salvarClubes();
        
        // AQUI ESTAVA O ERRO: agora estamos passando 'room'
        atualizarNickComRank(room, player); 
        return false;
    }

    // 5. TOP CLUBES: !topclubes
    if (command == "!topclubes") {
        let lista = [];
        for (let tag in clubes) {
            lista.push({
                tag: tag,
                nome: clubes[tag].nome,
                pontos: calcularPontuacaoClube(tag)
            });
        }

        // Ordena por pontos
        lista.sort((a, b) => b.pontos - a.pontos);

        room.sendAnnouncement("🏆 RANKING DE CLUBES (Baseado nos Stats dos Membros) 🏆", player.id, Cor.Ouro, "bold");
        let top = lista.slice(0, 5); // Top 5
        top.forEach((c, index) => {
            room.sendAnnouncement("#" + (index + 1) + " [" + c.tag + "] " + c.nome + " - Pontos: " + c.pontos, player.id, 0xFFFFFF, "normal");
        });
        return false;
    }

if (command == "!meuclube") {
        // 1. Verifica se o player tem clube
        let tag = getClubeDoPlayer(getAuth(player));

        if (!tag) {
            room.sendAnnouncement("❌ Você não participa de nenhum clube.", player.id, Cor.Vermelho, "bold");
            return false;
        }

        let clube = clubes[tag];
        
        // 2. Variáveis para somar os stats e LISTA DE NOMES
        let totalGols = 0;
        let totalAssists = 0;
        let totalCS = 0;
        let totalMembros = clube.membros.length;
        let listaNomes = []; // <--- Nova lista para guardar os nomes

        // 3. Loop para somar tudo e pegar os nomes
        for (let i = 0; i < totalMembros; i++) {
            let authMembro = clube.membros[i];
            try {
                let data = localStorage.getItem(authMembro);
                if (data) {
                    let stats = JSON.parse(data);
                    
                    // Soma acumulativa
                    totalGols += (stats[Ss.GL] ? parseInt(stats[Ss.GL]) : 0);
                    totalAssists += (stats[Ss.AS] ? parseInt(stats[Ss.AS]) : 0);
                    totalCS += (stats[Ss.CS] ? parseInt(stats[Ss.CS]) : 0);

                    // Pega o nome do membro (Ss.NK é o índice 11 no seu script)
                    // Se o cara for o líder, adiciona uma coroa 👑 no nome
                    let nomeMembro = stats[Ss.NK] || "Desconhecido";
                    if (authMembro === clube.lider) {
                        listaNomes.push("👑 " + nomeMembro);
                    } else {
                        listaNomes.push(nomeMembro);
                    }
                }
            } catch (e) {}
        }

        // 4. Calcula a pontuação total
        let pontuacaoTotal = totalGols + totalAssists + totalCS;

        // 5. Exibe o relatório
        room.sendAnnouncement("📊 === [ " + clube.nome + " ] ===", player.id, 0x00FFFF, "bold");
        room.sendAnnouncement("🏷️ TAG: [" + tag + "] | 👥 Total: " + totalMembros, player.id, 0xFFFFFF);
        
        // EXIBE OS NOMES AQUI (Uso 'small' para caber mais nomes na linha)
        room.sendAnnouncement("📜 Membros: " + listaNomes.join(", "), player.id, 0xADD8E6, "small");

        room.sendAnnouncement("⚽ Gols: " + totalGols + " | 👟 Assists: " + totalAssists + " | 🧤 SG: " + totalCS, player.id, 0xFFFFFF);
        room.sendAnnouncement("🏆 Pontuação de Ranking: " + pontuacaoTotal, player.id, Cor.Ouro, "bold");
        
        return false;
    }


if (/^o+e+$/i.test(message)) {
        room.sendAnnouncement("OEEEEE!!! OEEEE!!! OEEEE!!!!😂😂😂", null, 16777215, "bold", 0);
        return false;
    }

if (/^gg$/i.test(message))    { room.sendAnnouncement("GG🤝", null, 16777215, "bold", 0);
        return false;
    }
if (/^gay$/i.test(message))    { room.sendAnnouncement("ALA O GAYZÃO KKKK", null, 16777215, "bold", 0);
        return false;
    }
if (/^viado$/i.test(message))    { room.sendAnnouncement("MÓ VIADO ALA KKKKK", null, 16777215, "bold", 0);
        return false;
    }

if (/^te+amo+$/i.test(message))    { room.sendAnnouncement("TE AMO MEU AMOR❣️", null, 16777215, "bold", 0);
        return false;
    }
if (/^u$/i.test(message))    { room.sendAnnouncement("UUUUUUUUUUUU, QUASE 😪", null, 16777215, "bold", 0);
        return false;
}

if (/^boa$/i.test(message))    { room.sendAnnouncement("NICE👍", null, 16777215, "bold", 0);
        return false;
    }

if (/^f$/i.test(message))    { room.sendAnnouncement("F TROPA", null, 16777215, "bold", 0);
        return false;
    }

if (/^calma$/i.test(message))    { room.sendAnnouncement("CALMA CALABRESO🧘‍♂️", null, 16777215, "bold", 0);
        return false;
    }


if (/^aura$/i.test(message))    { room.sendAnnouncement("AURA FARM🗿", null, 16777215, "bold", 0);
        return false;
    }


if (/^cr7$/i.test(message))    { room.sendAnnouncement("MALUCO VIROU O CR7", null, 16777215, "bold", 0);
        return false;
    }

if (/^neuer$/i.test(message))    { room.sendAnnouncement("VIROU O NEUER", null, 16777215, "bold", 0);
        return false;
    }


if (/^gk$/i.test(message))    { room.sendAnnouncement("ALGUÉM FICA GK?", null, 16777215, "bold", 0);
        return false;
    }


if (/^quase$/i.test(message))    { room.sendAnnouncement("QUASE ERRA KKKKKKKKKKKKKK", null, 16777215, "bold", 0);
        return false;
    }


if (/^troll$/i.test(message)) {  // reconhece "troll" maiúsculo ou minúsculo
    room.sendAnnouncement("TÁ TROLLANDO AÍ PORRA!🤬", null, 16777215, "bold", 0);
    return false;
}

if (/^bagre$/i.test(message)) {
    room.sendAnnouncement("BAGRE PRA CARALHO KKKKKKKKKKK", null, 16777215, "bold", 0);
    return false;
}

// Salameico no chat
if (/^salameico$/i.test(message)) {
    room.sendAnnouncement("OH GRANDE SALAMEICO🙏", null, 16777215, "bold", 0);
    return false;
}

// Kita no chat
if (/^kita$/i.test(message)) {
    room.sendAnnouncement("KITA MERMÃO TA PASSANDO VERGONHA KKKKKKKK", null, 16777215, "bold", 0);
    return false;
}

if (/^lç$/i.test(message)) {
    room.sendAnnouncement("LAÇO❤️", null, 16777215, "bold", 0);
    return false;
}

// paçe no chat
if (/^paçe$/i.test(message)) {
    room.sendAnnouncement("PAÇE LINDO❤️", null, 16777215, "bold", 0);
    return false;
}

if (/^frango$/i.test(message)) {
    room.sendAnnouncement("FRANGO DO CARALHO!!!🥬", null, 16777215, "bold", 0);
    return false;
}

if (/^ez$/i.test(message)) {
    room.sendAnnouncement("TÁ FÁCIL HEIN?", null, 16777215, "bold", 0);
    return false;
}

if (/^mb$/i.test(message)) {
    room.sendAnnouncement("SOU RUIM DESCULPA", null, 16777215, "bold", 0);
    return false;
}

if (/^lag$/i.test(message)) {
    room.sendAnnouncement("SOU RUIM MAS VOU CULPAR O LAG", null, 16777215, "bold", 0);
    return false;
}


if (/^k$/i.test(message)) {
    room.sendAnnouncement("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK", null, 16777215, "bold", 0);
    return false;
}

if (/^pede$/i.test(message)) {
    room.sendAnnouncement("PEDE SUBSTITUIÇÃO JOGADOR KKKKKKK", null, 16777215, "bold", 0);
    return false;
}
    // SELEÇÕES //

   if (message == "!bra") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!bra";
        room.setTeamColors(Team.RED, 0, 0x3347B3, [0x018434, 0xF8DE2E, 0xF8DE2E]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Brasil!", null, 0x30F55F, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!bra";
        room.setTeamColors(Team.BLUE, 0, 0x3347B3, [0x018434, 0xF8DE2E, 0xF8DE2E]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Brasil!", null, 0x30F55F, "bold");
    }
}

    if (message == "!ale") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!ale";
        room.setTeamColors(Team.RED, 90, 0xFFFFFF, [0x121003, 0xC70000, 0xF5C600]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme da Alemanha!", null, 0x30F55F, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!ale";
        room.setTeamColors(Team.BLUE, 90, 0xFFFFFF, [0x121003, 0xC70000, 0xF5C600]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme da Alemanha!", null, 0x30F55F, "bold");
    }
}

    if (message == "!arg") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!arg";
        room.setTeamColors(Team.RED, 90, 0xE3AC42, [0x74ACDF, 0xFFFFFF, 0x74ACDF]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme da Argentina!", null, 0x30F55F, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!arg";
        room.setTeamColors(Team.BLUE, 90, 0xE3AC42, [0x74ACDF, 0xFFFFFF, 0x74ACDF]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme da Argentina!", null, 0x30F55F, "bold");
    }
}

if (message == "!esp") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!esp";
        room.setTeamColors(Team.RED, 0, 0xDBA640, [0x7B111A, 0x7B111A, 0x7B111A]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme da Espanha!", null, 0xDBA640, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!esp";
        room.setTeamColors(Team.BLUE, 0, 0xDBA640, [0x7B111A, 0x7B111A, 0x7B111A]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme da Espanha!", null, 0xDBA640, "bold");
    }
}

    if (message == "!por") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!por";
        room.setTeamColors(Team.RED, 120, 0xDBA640, [0x7B111A, 0x7B111A, 0x384F43]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme de Portugal!", null, 0x30F55F, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!por";
        room.setTeamColors(Team.BLUE, 120, 0xDBA640, [0x7B111A, 0x7B111A, 0x384F43]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme de Portugal!", null, 0x30F55F, "bold");
    }
}


   if (message == "!uru") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!uru";
        room.setTeamColors(Team.RED, 0, 0xFFFFFF, [0x0082d3, 0x0082d3, 0x0082d3]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Uruguai!", null, 0x30F55F, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!uru";
        room.setTeamColors(Team.BLUE, 0, 0xFFFFFF, [0x0082d3, 0x0082d3, 0x0082d3]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Uruguai!", null, 0x30F55F, "bold");
    }
}

    if (message == "!fra") {
        if (player.team == 1) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!fra";
                room.setTeamColors(Team.RED, 0, 0xD19E1F, [0x202c46, 0x202c46, 0x202c46]);
                room.sendAnnouncement("O capitão do time vermelho, "+ player.name + ", escolheu o uniforme da França!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!fra") {
        if (player.team == 2) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!fra";
                room.setTeamColors(Team.BLUE, 0, 0xD19E1F, [0x202c46, 0x202c46, 0x202c46]);
                room.sendAnnouncement("O capitão do time azul, "+ player.name + ", escolheu o uniforme da França!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!ing") {
        if (player.team == 1) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!ing";
                room.setTeamColors(Team.RED, 90, 0x0f2544, [0x408CFF, 0xA1C6FF, 0xe0e4e9]);
                room.sendAnnouncement("O capitão do time vermelho, "+ player.name + ", escolheu o uniforme da Inglaterra!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!ing") {
        if (player.team == 2) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!ing";
                room.setTeamColors(Team.BLUE, 90, 0x0f2544, [0x408CFF, 0xA1C6FF, 0xe0e4e9]);
                room.sendAnnouncement("O capitão do time azul, "+ player.name + ", escolheu o uniforme da Inglaterra!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!bel") {
        if (player.team == 1) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!bel";
                room.setTeamColors(Team.RED, 90, 0xD19E1F, [0x151619, 0x990011, 0x990011]);
                room.sendAnnouncement("O capitão do time vermelho, "+ player.name + ", escolheu o uniforme da Bélgica!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!bel") {
        if (player.team == 2) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!bel";
                room.setTeamColors(Team.BLUE, 90, 0xD19E1F, [0x151619, 0x990011, 0x990011]);
                room.sendAnnouncement("O capitão do time azul, "+ player.name + ", escolheu o uniforme da Bélgica!", null, 0x30F55F, "bold");
            }
        }
    }
if (message == "!ale2") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!ale2";
        room.setTeamColors(Team.RED, 0, 0xFFFAFA, [0x000000, 0xFF0000, 0xFFA500]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme da Alemanha!", null, 0x30F55F, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!ale2";
        room.setTeamColors(Team.BLUE, 0, 0xFFFAFA, [0x000000, 0xFF0000, 0xFFA500]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme da Alemanha!", null, 0x30F55F, "bold");
    }
}
if (message == "!bra2") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!bra2";
        room.setTeamColors(Team.RED, 180, 0xFFFFFF, [0xCCCC33, 0x006600, 0xCCCC33]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Brasil!", null, 0x30F55F, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!bra2";
        room.setTeamColors(Team.BLUE, 180, 0xFFFFFF, [0xCCCC33, 0x006600, 0xCCCC33]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Brasil!", null, 0x30F55F, "bold");
    }
}
if (message == "!bra3") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!bra3";
        room.setTeamColors(Team.RED, 360, 0x008B00, [0xEEC900, 0xEEC900]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Brasil 2!", null, 0x30F55F, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!bra3";
        room.setTeamColors(Team.BLUE, 360, 0x008B00, [0xEEC900, 0xEEC900]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Brasil 2!", null, 0x30F55F, "bold");
    }
}
if (message == "!fla") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!fla";
        room.setTeamColors(Team.RED, 90, 0xFFFAFA, [0xFF0000, 0x000000, 0xFF0000]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Flamengo!", null, 0xFF0000, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!fla";
        room.setTeamColors(Team.BLUE, 90, 0xFFFAFA, [0xFF0000, 0x000000, 0xFF0000]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Flamengo!", null, 0xFF0000, "bold");
    }
}
if (message == "!hol1") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!hol1";
        room.setTeamColors(Team.RED, 90, 0x000000, [0xFF0000, 0xFFFFFF, 0x0000CC]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme da Holanda (Bandeira)!", null, 0xFF7F00, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!hol1";
        room.setTeamColors(Team.BLUE, 90, 0x000000, [0xFF0000, 0xFFFFFF, 0x0000CC]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme da Holanda (Bandeira)!", null, 0xFF7F00, "bold");
    }
}
if (message == "!hol2") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!hol2";
        room.setTeamColors(Team.RED, 180, 0x000000, [0xFF7F00, 0xFF7F00, 0xFF7F00]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme da Holanda (Camisa)!", null, 0xFF7F00, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!hol2";
        room.setTeamColors(Team.BLUE, 180, 0x000000, [0xFF7F00, 0xFF7F00, 0xFF7F00]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme da Holanda (Camisa)!", null, 0xFF7F00, "bold");
    }
}
if (message == "!arg2") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!arg2";
        room.setTeamColors(Team.RED, 90, 0xFCBF49, [0x75AADB, 0xFFFFFF, 0x75AADB]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme da Argentina!", null, 0x75AADB, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!arg2";
        room.setTeamColors(Team.BLUE, 90, 0xFCBF49, [0x75AADB, 0xFFFFFF, 0x75AADB]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme da Argentina!", null, 0x75AADB, "bold");
    }
}
if (message == "!can") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!can";
        room.setTeamColors(Team.RED, 90, 0x000000, [0xFF0000, 0xFFFFFF, 0xFF0000]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Canadá (Bandeira)!", null, 0xFF0000, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!can";
        room.setTeamColors(Team.BLUE, 90, 0x000000, [0xFF0000, 0xFFFFFF, 0xFF0000]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Canadá (Bandeira)!", null, 0xFF0000, "bold");
    }
}
if (message == "!cor1") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!cor1";
        room.setTeamColors(Team.RED, 90, 0xFFFFFF, [0x000000, 0xFFFFFF, 0x000000]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Corinthians 1!", null, 0x000000, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!cor1";
        room.setTeamColors(Team.BLUE, 90, 0xFFFFFF, [0x000000, 0xFFFFFF, 0x000000]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Corinthians 1!", null, 0x000000, "bold");
    }
}
if (message == "!cor2") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!cor2";
        room.setTeamColors(Team.RED, 90, 0x000000, [0xFFFFFF, 0x000000, 0xFFFFFF]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Corinthians 2!", null, 0xFFFFFF, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!cor2";
        room.setTeamColors(Team.BLUE, 90, 0x000000, [0xFFFFFF, 0x000000, 0xFFFFFF]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Corinthians 2!", null, 0xFFFFFF, "bold");
    }
}
if (message == "!bar1") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!bar1";
        room.setTeamColors(Team.RED, 360, 0xFFD700, [0x00008B, 0x8B0000, 0x00008B]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Barcelona 1!", null, 0x00008B, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!bar1";
        room.setTeamColors(Team.BLUE, 360, 0xFFD700, [0x00008B, 0x8B0000, 0x00008B]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Barcelona 1!", null, 0x00008B, "bold");
    }
}
if (message == "!bar2") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!bar2";
        room.setTeamColors(Team.RED, 180, 0xFFFF00, [0x000080, 0x8B0000, 0x000080]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Barcelona 2!", null, 0x000080, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!bar2";
        room.setTeamColors(Team.BLUE, 180, 0xFFFF00, [0x000080, 0x8B0000, 0x000080]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Barcelona 2!", null, 0x000080, "bold");
    }
}
if (message == "!bar3") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!bar3";
        room.setTeamColors(Team.RED, 0, 0xFFC44F, [0x050047, 0xB30000, 0x050047]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Barcelona 3!", null, 0x050047, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!bar3";
        room.setTeamColors(Team.BLUE, 0, 0xFFC44F, [0x050047, 0xB30000, 0x050047]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Barcelona 3!", null, 0x050047, "bold");
    }
}
if (message == "!barold") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!barold";
        room.setTeamColors(Team.RED, 0, 0xDEB405, [0xA2214B, 0x00529F]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme Barça Old!", null, 0x00529F, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!barold";
        room.setTeamColors(Team.BLUE, 0, 0xDEB405, [0xA2214B, 0x00529F]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme Barça Old!", null, 0x00529F, "bold");
    }
}
if (message == "!che") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!che";
        room.setTeamColors(Team.RED, 90, 0xFFFFFF, [0x0000CD, 0x00008B, 0x0000CD]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Chelsea!", null, 0x00008B, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!che";
        room.setTeamColors(Team.BLUE, 90, 0xFFFFFF, [0x0000CD, 0x00008B, 0x0000CD]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Chelsea!", null, 0x00008B, "bold");
    }
}
if (message == "!vas") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!vas";
        room.setTeamColors(Team.RED, 135, 0xFF0000, [0xFFFFFF, 0x000000, 0xFFFFFF]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Vasco!", null, 0x000000, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!vas";
        room.setTeamColors(Team.BLUE, 135, 0xFF0000, [0xFFFFFF, 0x000000, 0xFFFFFF]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Vasco!", null, 0x000000, "bold");
    }
}
if (message == "!mil") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!mil";
        room.setTeamColors(Team.RED, 180, 0xFFFFFF, [0x000000, 0xFF0000, 0x000000]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Milan!", null, 0xFF0000, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!mil";
        room.setTeamColors(Team.BLUE, 180, 0xFFFFFF, [0x000000, 0xFF0000, 0x000000]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Milan!", null, 0xFF0000, "bold");
    }
}
if (message == "!mil2") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!mil2";
        room.setTeamColors(Team.RED, 180, 0xFFFFFF, [0x000000, 0xFF0000, 0x000000]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme Milan 2!", null, 0xFF0000, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!mil2";
        room.setTeamColors(Team.BLUE, 180, 0xFFFFFF, [0x000000, 0xFF0000, 0x000000]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme Milan 2!", null, 0xFF0000, "bold");
    }
}
if (message == "!rm1") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!rm1";
        room.setTeamColors(Team.RED, 0, 0xFFFFFF, [0xFFD700, 0x000000, 0x000000]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme Real Madrid 1!", null, 0x000000, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!rm1";
        room.setTeamColors(Team.BLUE, 0, 0xFFFFFF, [0xFFD700, 0x000000, 0x000000]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme Real Madrid 1!", null, 0x000000, "bold");
    }
}
if (message == "!rm2") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!rm2";
        room.setTeamColors(Team.RED, 0, 0xDAA520, [0xFFFAFA, 0xFFFAFA, 0xFFFAFA]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme Real Madrid 2!", null, 0xDAA520, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!rm2";
        room.setTeamColors(Team.BLUE, 0, 0xDAA520, [0xFFFAFA, 0xFFFAFA, 0xFFFAFA]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme Real Madrid 2!", null, 0xDAA520, "bold");
    }
}
if (message == "!rm3") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!rm3";
        room.setTeamColors(Team.RED, 0, 0x080804, [0xEDEAE4]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme Real Madrid 3!", null, 0x080804, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!rm3";
        room.setTeamColors(Team.BLUE, 0, 0x080804, [0xEDEAE4]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme Real Madrid 3!", null, 0x080804, "bold");
    }
}
if (message == "!rm4") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!rm4";
        room.setTeamColors(Team.RED, 132, 0xFFCD45, [0xFFFFFF, 0x004077, 0xFFFFFF]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme Real Madrid 4!", null, 0xFFCD45, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!rm4";
        room.setTeamColors(Team.BLUE, 132, 0xFFCD45, [0xFFFFFF, 0x004077, 0xFFFFFF]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme Real Madrid 4!", null, 0xFFCD45, "bold");
    }
}
if (message == "!river") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!river";
        room.setTeamColors(Team.RED, 45, 0x000000, [0xFFFAFA, 0xFF0000, 0xFFFAFA]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do River Plate!", null, 0xFF0000, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!river";
        room.setTeamColors(Team.BLUE, 45, 0x000000, [0xFFFAFA, 0xFF0000, 0xFFFAFA]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do River Plate!", null, 0xFF0000, "bold");
    }
}
if (message == "!reggae") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!reggae";
        room.setTeamColors(Team.RED, 90, 0x000000, [0xFF0000, 0xFFFF00, 0x006400]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme Reggae!", null, 0xFFFF00, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!reggae";
        room.setTeamColors(Team.BLUE, 90, 0x000000, [0xFF0000, 0xFFFF00, 0x006400]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme Reggae!", null, 0xFFFF00, "bold");
    }
}
if (message == "!galo") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!galo";
        room.setTeamColors(Team.RED, 0, 0xDAA520, [0x000000, 0xFFFFFF, 0x000000]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Galo!", null, 0xDAA520, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!galo";
        room.setTeamColors(Team.BLUE, 0, 0xDAA520, [0x000000, 0xFFFFFF, 0x000000]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Galo!", null, 0xDAA520, "bold");
    }
}
if (message == "!bor") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!bor";
        room.setTeamColors(Team.RED, 90, 0x000000, [0xEEEE00, 0xFFFF00, 0xFFFF00]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Borussia!", null, 0xFFFF00, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!bor";
        room.setTeamColors(Team.BLUE, 90, 0x000000, [0xEEEE00, 0xFFFF00, 0xFFFF00]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Borussia!", null, 0xFFFF00, "bold");
    }
}
if (message == "!bay") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!bay";
        room.setTeamColors(Team.RED, 30, 0xFAF31E, [0xFF0000, 0xF20000, 0xE00000]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Bayern de Munique!", null, 0xFAF31E, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!bay";
        room.setTeamColors(Team.BLUE, 30, 0xFAF31E, [0xFF0000, 0xF20000, 0xE00000]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Bayern de Munique!", null, 0xFAF31E, "bold");
    }
}
if (message == "!bot") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!botafogo";
        room.setTeamColors(Team.RED, 135, 0xFF0000, [0xFFFFFF, 0x000000, 0xFFFFFF]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Botafogo!", null, 0xFFFFFF, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!bot";
        room.setTeamColors(Team.BLUE, 135, 0xFF0000, [0xFFFFFF, 0x000000, 0xFFFFFF]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Botafogo!", null, 0xFFFFFF, "bold");
    }
}
if (message == "!new") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!new";
        room.setTeamColors(Team.RED, 0, 0xFFFFFF, [0x000000, 0xFF0000]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Newells Old Boys!", null, 0xFFFFFF, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!new";
        room.setTeamColors(Team.BLUE, 0, 0xFFFFFF, [0x000000, 0xFF0000]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Newells Old Boys!", null, 0xFFFFFF, "bold");
    }
}
if (message == "!palmeiras") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!palmeiras";
        room.setTeamColors(Team.RED, 90, 0xB8860B, [0x006400, 0xFFFAFA, 0x006400]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Palmeiras!", null, 0xFFFFFF, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!palmeiras";
        room.setTeamColors(Team.BLUE, 90, 0xB8860B, [0x006400, 0xFFFAFA, 0x006400]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Palmeiras!", null, 0xFFFFFF, "bold");
    }
}
if (message == "!portuguesa") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!portuguesa";
        room.setTeamColors(Team.RED, 90, 0xFFFFFF, [0xFF0000, 0x008000, 0xFF0000]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme da Portuguesa!", null, 0xFFFFFF, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!portuguesa";
        room.setTeamColors(Team.BLUE, 90, 0xFFFFFF, [0xFF0000, 0x008000, 0xFF0000]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme da Portuguesa!", null, 0xFFFFFF, "bold");
    }
}
if (message == "!portugal") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!portugal";
        room.setTeamColors(Team.RED, 300, 0xFFD700, [0x006400, 0x8B0000, 0x8B0000]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme de Portugal!", null, 0xFFFFFF, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!portugal";
        room.setTeamColors(Team.BLUE, 300, 0xFFD700, [0x006400, 0x8B0000, 0x8B0000]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme de Portugal!", null, 0xFFFFFF, "bold");
    }
}
if (message == "!juv") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!juv";
        room.setTeamColors(Team.RED, 180, 0xDAA520, [0x000000, 0xFFFFFF, 0x000000]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme da Juventus!", null, 0xFFFFFF, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!juv";
        room.setTeamColors(Team.BLUE, 180, 0xDAA520, [0x000000, 0xFFFFFF, 0x000000]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme da Juventus!", null, 0xFFFFFF, "bold");
    }
}
if (message == "!mon") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!mon";
        room.setTeamColors(Team.RED, 240, 0x000000, [0xFFFFFF, 0xFFFFFF, 0xFF3030]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Mônaco!", null, 0xFFFFFF, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!mon";
        room.setTeamColors(Team.BLUE, 240, 0x000000, [0xFFFFFF, 0xFFFFFF, 0xFF3030]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Mônaco!", null, 0xFFFFFF, "bold");
    }
}
if (message == "!int") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!int";
        room.setTeamColors(Team.RED, 0, 0xFFFFFF, [0x000000, 0x4169E1, 0x000000]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme da Internazionale!", null, 0xFFFFFF, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!int";
        room.setTeamColors(Team.BLUE, 0, 0xFFFFFF, [0x000000, 0x4169E1, 0x000000]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme da Internazionale!", null, 0xFFFFFF, "bold");
    }
}
if (message == "!esp") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!esp";
        room.setTeamColors(Team.RED, 90, 0xFF0000, [0xEEC900, 0xFF0000]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme da Espanha!", null, 0xFFFFFF, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!esp";
        room.setTeamColors(Team.BLUE, 90, 0xFF0000, [0xEEC900, 0xFF0000]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme da Espanha!", null, 0xFFFFFF, "bold");
    }
}
if (message == "!flu") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!flu";
        room.setTeamColors(Team.RED, 20, 0xB8860B, [0x215E21, 0xFFFAFA, 0xA62A2A]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Fluminense!", null, 0xFFFFFF, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!flu";
        room.setTeamColors(Team.BLUE, 20, 0xB8860B, [0x215E21, 0xFFFAFA, 0xA62A2A]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Fluminense!", null, 0xFFFFFF, "bold");
    }
}
if (message == "!spa") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!spa";
        room.setTeamColors(Team.RED, 0, 0xFF0000, [0xFFFFFF, 0xFF0000, 0x000000]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do São Paulo!", null, 0xFFFFFF, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!spa";
        room.setTeamColors(Team.BLUE, 0, 0xFF0000, [0xFFFFFF, 0xFF0000, 0x000000]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do São Paulo!", null, 0xFFFFFF, "bold");
    }
}
if (message == "!bibas") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!bibas";
        room.setTeamColors(Team.RED, 90, 0xFFFFFF, [0xE04197, 0xE09AD5, 0xE04197]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Bibas BRBR!", null, 0xFFFFFF, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!bibas";
        room.setTeamColors(Team.BLUE, 90, 0xFFFFFF, [0xE04197, 0xE09AD5, 0xE04197]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Bibas BRBR!", null, 0xFFFFFF, "bold");
    }
}
if (message == "!pay") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!pay";
        room.setTeamColors(Team.RED, 90, 0x7AF2FF, [0x006FFF, 0x2E9DFF, 0x70B3FF]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Paysandu!", null, 0xFFFFFF, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!pay";
        room.setTeamColors(Team.BLUE, 90, 0x7AF2FF, [0x006FFF, 0x2E9DFF, 0x70B3FF]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Paysandu!", null, 0xFFFFFF, "bold");
    }
}
if (message == "!bah") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!bah";
        room.setTeamColors(Team.RED, 0, 0x000000, [0x12B0FF, 0xFFFFFF, 0xFF1C33]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Bahia!", null, 0xFFFFFF, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!bah";
        room.setTeamColors(Team.BLUE, 0, 0x000000, [0x12B0FF, 0xFFFFFF, 0xFF1C33]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Bahia!", null, 0xFFFFFF, "bold");
    }
}
if (message == "!bah2") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!bah2";
        room.setTeamColors(Team.RED, 120, 0xE8E238, [0x4336FF, 0xF5FDFF, 0xFF2121]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Bahia 2!", null, 0xFFFFFF, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!bah2";
        room.setTeamColors(Team.BLUE, 120, 0xE8E238, [0x4336FF, 0xF5FDFF, 0xFF2121]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Bahia 2!", null, 0xFFFFFF, "bold");
    }
}
if (message == "!bah3") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!bah3";
        room.setTeamColors(Team.RED, 61, 0xFEFCFF, [0x5420E6, 0x2E50FF, 0xFF1F0F]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Bahia 3 (2012)!", null, 0xFFFFFF, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!bah3";
        room.setTeamColors(Team.BLUE, 61, 0xFEFCFF, [0x5420E6, 0x2E50FF, 0xFF1F0F]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Bahia 3 (2012)!", null, 0xFFFFFF, "bold");
    }
}
if (message == "!vit") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!vit";
        room.setTeamColors(Team.RED, 90, 0xFFFFFF, [0xFF1D0D, 0x000000]);
        room.sendAnnouncement("O capitão do time vermelho escolheu o uniforme do Vitória!", null, 0xFFFFFF, "bold");
    }
    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!vit";
        room.setTeamColors(Team.BLUE, 90, 0xFFFFFF, [0xFF1D0D, 0x000000]);
        room.sendAnnouncement("O capitão do time azul escolheu o uniforme do Vitória!", null, 0xFFFFFF, "bold");
    }
}

    if (message == "!hol") {
        if (player.team == 1) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!hol";
                room.setTeamColors(Team.RED, 90, 0x2B0E09, [0xdc6024, 0xdc6024, 0xdc6024]);
                room.sendAnnouncement("O capitão do time vermelho, "+ player.name + ", escolheu o uniforme da Holanda!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!hol") {
        if (player.team == 2) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!hol";
                room.setTeamColors(Team.RED, 90, 0x2B0E09, [0xdc6024, 0xdc6024, 0xdc6024]);
                room.sendAnnouncement("O capitão do time azul, "+ player.name + ", escolheu o uniforme da Holanda!", null, 0x30F55F, "bold");
            }
        }
    }

if (message == "!psg") {
    if (player.team == Team.RED) {
        if (TeamR.length > 0 && player.id == TeamR[0].id) {
            CaptainChoice = "!psg";
            room.setTeamColors(
                Team.RED,
                180,
                0xFFFFFF,
                [0x000080, 0xB22222, 0x000080]
            );
            room.sendAnnouncement(
                "O capitão do time vermelho, " + player.name + ", escolheu o uniforme do PSG!",
                null,
                0x1E3A8A,
                "bold");
        }
    }
}

if (message == "!psg") {
    if (player.team == Team.BLUE) {
        if (TeamB.length > 0 && player.id == TeamB[0].id) {
            CaptainChoice = "!psg";
            room.setTeamColors(
                Team.BLUE,
                180,
                0xFFFFFF,
                [0x000080, 0xB22222, 0x000080]
            );
            room.sendAnnouncement(
                "O capitão do time azul, " + player.name + ", escolheu o uniforme do PSG!",
                null,
                0x1E3A8A,
                "bold");
        }
    }
}

if (message == "!boc") {
    if (player.team == Team.RED && TeamR.length > 0 && player.id == TeamR[0].id) {
        CaptainChoice = "!boc";
        room.setTeamColors(
            Team.RED,
            90,
            0xFFFAFA,
            [0x0000FF, 0xFFFF00, 0x0000FF]
        );
        room.sendAnnouncement(
            "O capitão do time vermelho, " + player.name + ", escolheu o uniforme do Boca Juniors!",
            null,
            0xFFD700,
            "bold"
        );
    }

    if (player.team == Team.BLUE && TeamB.length > 0 && player.id == TeamB[0].id) {
        CaptainChoice = "!boc";
        room.setTeamColors(
            Team.BLUE,
            90,
            0xFFFAFA,
            [0x0000FF, 0xFFFF00, 0x0000FF]
        );
        room.sendAnnouncement(
            "O capitão do time azul, " + player.name + ", escolheu o uniforme do Boca Juniors!",
            null,
            0xFFD700,
            "bold");
    }
}



    if (message == "!bah") {
        if (player.team == 1) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!bah";
                room.setTeamColors(Team.RED, 0, 0xFFFFFF, [0x0A4AE8, 0xF20533, 0x0A4AE8]);
                room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do BAHIA ! ", null, 0x30F55F, "bold");
            }
            if (message == "!bah") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!bah";
                        room.setTeamColors(Team.BLUE, 0, 0xFFFFFF, [0x0A4AE8, 0xF20533, 0x0A4AE8]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do BAHIA ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!vit") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!vit";
                        room.setTeamColors(Team.RED, 90, 0xFFFFFF, [0xFF1D0D, 0x000000]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do VITÓRIA ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!vit") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!vit";
                        room.setTeamColors(Team.BLUE, 90, 0xFFFFFF, [0xFF1D0D, 0x000000]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do VITÓRIA ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!flu") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!flu";
                        room.setTeamColors(Team.RED, 0, 0xFFFFFF, [0x2A524F, 0x871F39, 0x2A524F]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do FLUMINENSE ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!flu") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!flu";
                        room.setTeamColors(Team.BLUE, 0, 0xFFFFFF, [0x2A524F, 0x871F39, 0x2A524F]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do FLUMINENSE ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!for") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!for";
                        room.setTeamColors(Team.RED, 90, 0xFFFFFF, [0x182587, 0xE32026, 0x182587]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do FORTALEZA ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!for") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!for";
                        room.setTeamColors(Team.BLUE, 90, 0xFFFFFF, [0x182587, 0xE32026, 0x182587]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do FORTALEZA ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!cap") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!cap";
                        room.setTeamColors(Team.RED, 45, 0xFFFFFF, [0xE8153F, 0x000000, 0xE8153F]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do ATHLETICO PARANAENSE ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!cap") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!cap";
                        room.setTeamColors(Team.BLUE, 45, 0xFFFFFF, [0xE8153F, 0x000000, 0xE8153F]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do ATHLETICO PARANAENSE ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!rem") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!rem";
                        room.setTeamColors(Team.RED, 90, 0xFFFFFF, [0x000000]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do REMO ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!rem") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!rem";
                        room.setTeamColors(Team.BLUE, 90, 0xFFFFFF, [0x000000]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do REMO ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!cui") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!cui";
                        room.setTeamColors(Team.RED, 90, 0xFFFFFF, [0x217430, 0xF4D42F]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do CUIABÁ ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!cui") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!cui";
                        room.setTeamColors(Team.BLUE, 90, 0xFFFFFF, [0x217430, 0xF4D42F]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do CUIABÁ ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!jvn") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!jvn";
                        room.setTeamColors(Team.RED, 0, 0x00964B, [0x00964B, 0xFFFFFF, 0x00964B]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do JUVENTUDE ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!jvn") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!jvn";
                        room.setTeamColors(Team.BLUE, 0, 0x00964B, [0x00964B, 0xFFFFFF, 0x00964B]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do JUVENTUDE ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!utd3") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!utd3";
                        room.setTeamColors(Team.RED, -37, 0xF0CF0D, [0x1E416D, 0x235287, 0x1463A4]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do MANCHESTER UNITED 3º KIT ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!utd3") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!utd3";
                        room.setTeamColors(Team.BLUE, -37, 0xF0CF0D, [0x1E416D, 0x235287, 0x1463A4]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do MANCHESTER UNITED 3º KIT ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!spo") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!spo";
                        room.setTeamColors(Team.RED, 0, 0xFFE600, [0xFF0D0D, 0x000000, 0xFF0D0D]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do SPORT ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!spo") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!spo";
                        room.setTeamColors(Team.BLUE, 0, 0xFFE600, [0xFF0D0D, 0x000000, 0xFF0D0D]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do SPORT ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!gol") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!gol";
                        room.setTeamColors(Team.RED, 90, 0x23CC4A, [0x0C4519]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do GOIÁS ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!gol") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!gol";
                        room.setTeamColors(Team.BLUE, 90, 0x23CC4A, [0x0C4519]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do GOIÁS ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!vas") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!vas";
                        room.setTeamColors(Team.RED, 140, 0xFF1212, [0xFFFFFF, 0x002033, 0xFFFFFF]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do VASCO ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!vas") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!vas";
                        room.setTeamColors(Team.BLUE, 140, 0xFF1212, [0xFFFFFF, 0x002033, 0xFFFFFF]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do VASCO ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!pen") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!pen";
                        room.setTeamColors(Team.RED, 90, 0xFFFFFF, [0xFAC904, 0x000000, 0xFAC904]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do PENHÃROL ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!pen") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!pen";
                        room.setTeamColors(Team.BLUE, 90, 0xFFFFFF, [0xFAC904, 0x000000, 0xFAC904]);
                        room.sendAnnouncement(player.name + "O capitão do time, "+ player.name + ", escolheu o uniforme do PENHÃROL ! ", null, 0x30F55F, "bold");
                    }
                }
            }

            if (message.toLowerCase().substr(0, 10) == '!register ') {
                setRegister(player, message.substr(10));
                return false;
            }

            // !login senha
            if (message.toLowerCase().substr(0, 7) == '!login ') {
                getLogin(player, message.substr(7));
                return false;
            }
            if (message.length > 65) {
                room.sendAnnouncement("", player.id);
                return false;
            }
            messageHistory.push(player.id);
            messageCounter++;
            if (messageCounter === 3) {
                if (messageHistory[messageHistory.length - 1] === player.id && messageHistory[messageHistory.length - 2] === player.id && messageHistory[messageHistory.length - 3] === player.id) {
                    room.sendChat("Alerta de spam.", player.id);
                }
            }
            if (messageCounter === 6) {
                if (messageHistory[messageHistory.length - 1] === player.id && messageHistory[messageHistory.length - 2] === player.id && messageHistory[messageHistory.length - 3] === player.id && messageHistory[messageHistory.length - 4] === player.id && messageHistory[messageHistory.length - 5] === player.id && messageHistory[messageHistory.length - 6] === player.id) {
                    room.kickPlayer(player.id, "Modere nas suas mensagens", true);
                }
            }
            if (messageHistory[messageHistory.length - 1] !== messageHistory[messageHistory.length - 2]) {
                messageCounter = 1;
            }
            if (player.name === "hitler" && player.name === "hitler") {
                messageCounter = 1;
            }
        }
    }
    messageHistory.push(player.id);
    messageCounter++;
    if (messageCounter === 1545) {
        if (messageHistory[messageHistory.length - 1] === player.id && messageHistory[messageHistory.length - 2] === player.id && messageHistory[messageHistory.length - 3] === player.id && messageHistory[messageHistory.length - 4] === player.id) {
            room.sendChat(":)", player.id);
        }
    }
    // banir jogador se 6 mensagens forem digitadas seguidas (desativado)
    msg = message;
    message = message;
    originalMessage = message;
    message = message.split(/ +/);
    player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
    if (["!help", "!ajuda"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("[📄] Comandos : !provo, !minhasconquistas, !conquistas, !conquistasplayer, !comandosclube, !aura, !minhaaura, !resumoaura, !auraplayer, !rankaura, !voteban, !me, !bio,  !uni, !mostrarme, !ultimas, !topgols, !topassists, !topgk, !ranks, !games, !wins, !goals, !assists, !cs, !afks, !mutes, !bans.", player.id, 0x309D2B, "bold");
        player.admin ? room.sendAnnouncement("[📄] Admin : !mute <duration = 3> #<id>, !unmute all/#<id>, !clearbans <number = all>, !slow <duration>, !endslow", player.id, 0x309D2B, "bold") : null;
    } 
    
    if (["!chooseadm"].includes(message[0].toLowerCase())) {
        if (message[1] == "on") {
            room.sendAnnouncement(player.name + " Ativou o modo de recrutamento!", null, 0x55bae2, "normal");
            choose = true;
        }
        else if (message[1] == "off") {
            room.sendAnnouncement(player.name + " Desativou o modo de recrutamento.", null, 0xf2a000, "normal")
            choose = false;
        }
    }
    

if (["!provo"].includes(message[0].toLowerCase())) {
            room.sendAnnouncement("_______________________________________", player.id, Cor.Amarelo, "bold");
    room.sendAnnouncement("[oe],  [bagre],   [ez],  [neuer],  [troll],  [gg],  [kita],  [pede],[salameico],  [lç],  [paçe],  [viado],  [gay],  [te amo],  [k],  [u],  [boa],  [f],  [calma],  [aura],  [cr7],  [gk],  [quase],  [frango],  [mb],  [lag]",   player.id, Cor.Branco, "normal");
}

    if (["!uni", "!unis"].includes(message[0].toLowerCase())) {
    
    // Definição de Cores para facilitar a edição
    const cTitulo = 0xFFD700; // Dourado
    const cNac = 0x00FFFF;    // Ciano (Seleções)
    const cSA = 0xFFA500;     // Laranja (Sul-Americanos)
    const cEU = 0xDA70D6;     // Orquídea/Roxo (Europeus)
    const cTexto = 0xFFFFFF;  // Branco

    // Cabeçalho
    room.sendAnnouncement("═══════ 👕 LISTA DE UNIFORMES 👕 ═══════", player.id, cTitulo, "bold");

    // --- SELEÇÕES ---
    room.sendAnnouncement("🌍 SELEÇÕES NACIONAIS:", player.id, cNac, "bold");
    room.sendAnnouncement("➤ Principais: [!bra] [!bra2] [!bra3] [!arg] [!uru] [!ale] [!ita] [!fra] [!esp] [!por]", player.id, cTexto, "small");
    room.sendAnnouncement("➤ Outras: [!ing] [!bel] [!hol] [!can] [!mex] [!jap] [!kor] [!aus]", player.id, cTexto, "small");

    // --- SUL-AMERICANOS ---
    room.sendAnnouncement("🦅 CLUBES SUL-AMERICANOS:", player.id, cSA, "bold");
    room.sendAnnouncement("➤ SP/RJ: [!cor1] [!cor2] [!pal] [!spa] [!fla] [!vas] [!flu] [!bot]", player.id, cTexto, "small");
    room.sendAnnouncement("➤ Sul/Minas: [!gre] [!int] [!cru] [!galo]", player.id, cTexto, "small");
    room.sendAnnouncement("➤ Nordeste/Norte: [!vit] [!bah] [!bah2] [!bah3] [!pay]", player.id, cTexto, "small");
    room.sendAnnouncement("➤ Hermanos: [!boc] [!riv] [!new] [!pen]", player.id, cTexto, "small");

    // --- EUROPEUS ---
    room.sendAnnouncement("🇪🇺 CLUBES EUROPEUS:", player.id, cEU, "bold");
    room.sendAnnouncement("➤ Espanha: [!bar] [!bar2] [!baro] [!rea1] [!rea2] [!rea3] [!rea4]", player.id, cTexto, "small");
    room.sendAnnouncement("➤ Outros: [!che] [!mil] [!mil2] [!juv] [!mon] [!intM] [!bay] [!psg]", player.id, cTexto, "small");
    
    room.sendAnnouncement("═════════════════════════════════════", player.id, cTitulo, "bold");
}
     if (["!ranks", "!rank"].includes(command)) {
        room.sendAnnouncement("_______________________________________", player.id, Cor.Amarelo, "bold");
        room.sendAnnouncement("🏆 RANKS PÁGINA 1 (Gols OU Sem Gol/SG)", player.id, Cor.Amarelo, "bold");
        
        // BETINHAS
        room.sendAnnouncement("👶 Betinha I   - [⚽ 2]  ou [🛡️ -]", player.id, 0xbc5e00, "normal");
        room.sendAnnouncement("👶 Betinha II  - [⚽ 5]  ou [🛡️ 1]", player.id, 0xbc5e00, "normal");
        room.sendAnnouncement("👶 Betinha III - [⚽ 8]  ou [🛡️ 2]", player.id, 0xbc5e00, "normal");
        
        // ALPHAS
        room.sendAnnouncement("👽 Alpha I     - [⚽ 10] ou [🛡️ 3]", player.id, 0xA2A2A2, "normal");
        room.sendAnnouncement("👽 Alpha II    - [⚽ 15] ou [🛡️ 4]", player.id, 0xA2A2A2, "normal");
        room.sendAnnouncement("👽 Alpha III   - [⚽ 20] ou [🛡️ 6]", player.id, 0xA2A2A2, "normal");
        
        // SIGMAS
        room.sendAnnouncement("🦁 Sigma I     - [⚽ 30] ou [🛡️ 8]", player.id, 0xEAC274, "normal");
        room.sendAnnouncement("🦁 Sigma II    - [⚽ 35] ou [🛡️ 10]", player.id, 0xEAC274, "normal");
        room.sendAnnouncement("🦁 Sigma III   - [⚽ 40] ou [🛡️ 12]", player.id, 0xEAC274, "normal");
        
        room.sendAnnouncement("Digite '!ranks2' para ver a próxima página", player.id, Cor.Amarelo, "bold");
        room.sendAnnouncement("_______________________________________", player.id, Cor.Amarelo, "bold");
        return false;
    }
    // SUBSTITUA O SEU BLOCO !RANKS2 POR ESTE:
    if (["!ranks2", "!rank2"].includes(command)) {
        room.sendAnnouncement("_______________________________________", player.id, Cor.Amarelo, "bold");
        room.sendAnnouncement("🏆 RANKS PÁGINA 2 (Elos Altos)", player.id, Cor.Amarelo, "bold");
        
        // OMEGAS
        room.sendAnnouncement("🐺 Omega I     - [⚽ 50] ou [🛡️ 15]", player.id, 0x62AEE3, "normal");
        room.sendAnnouncement("🐺 Omega II    - [⚽ 55] ou [🛡️ 18]", player.id, 0x62AEE3, "normal");
        room.sendAnnouncement("🐺 Omega III   - [⚽ 60] ou [🛡️ 20]", player.id, 0x62AEE3, "normal");
        
        // GIGACHADS
        room.sendAnnouncement("🗿 Gigachad I  - [⚽ 80] ou [🛡️ 25]", player.id, 0x7cd3fa, "normal");
        room.sendAnnouncement("🗿 Gigachad II - [⚽ 120] ou [🛡️ 35]", player.id, 0x7cd3fa, "normal");
        room.sendAnnouncement("🗿 Gigachad III- [⚽ 150] ou [🛡️ 45]", player.id, 0x7cd3fa, "normal");
        // Obs: Pulou do III pro VI conforme seu pedido original
        room.sendAnnouncement("🗿 Gigachad VI - [⚽ 200] ou [🛡️ 60]", player.id, 0x7cd3fa, "normal");
        
        // DEUS
        room.sendAnnouncement("👑 Deus da Aura- [⚽ 500] ou [🛡️ 100]", player.id, 0xf77104, "bold");
        
        room.sendAnnouncement("_______________________________________", player.id, Cor.Amarelo, "bold"); 
        return false;
    }
    else if (["!afk"].includes(message[0].toLowerCase())) {
        if (players.length != 1 && player.team != Team.SPECTATORS) {
            if (player.team == Team.RED && streak > 0 && room.getScores() == null) {
                room.setPlayerTeam(player.id, Team.SPECTATORS);
            } else {
                room.sendAnnouncement("Você não pode ficar AFK enquanto está jogando!", player.id, 0xFF7B08);
                return false;
            }
        } else if (players.length == 1 && !getAFK(player)) {
            room.setPlayerTeam(player.id, Team.SPECTATORS);
        }
        setAFK(player, !getAFK(player));
        room.sendAnnouncement(player.name + (getAFK(player) ? " está AFK!" : " não está mais AFK!"), null, (getAFK(player) ? 0xFF7B08 : 0x8FFF8F));
        getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player"];
        setTimeout(() => {
            if (getAFK(player) && stats[Ss.RL] != "vip") {
                room.kickPlayer(player.id, "Tempo de afk excedido", false)
            }
        }, 30 * 60 * 1000)
        return false;
    } else if (["!afks", "!afklist"].includes(message[0].toLowerCase())) {
        var cstm = "[PV] Lista de AFK : ";
        for (var i = 0; i < extendedP.length; i++) {
            if (room.getPlayer(extendedP[i][eP.ID]) != null && getAFK(room.getPlayer(extendedP[i][eP.ID]))) {
                if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + ", ").length) {
                    room.sendChat(cstm, player.id);
                    cstm = "... ";
                }
                cstm += room.getPlayer(extendedP[i][eP.ID]).name + ", ";
            }
        }
        if (cstm == "[PV] Lista de AFK : ") {
            room.sendChat("[PV] Não há ninguém na lista de AFK !", player.id);
            return false;
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    } else if (["!me"].includes(command)) {
        var stats = localStorage.getItem(getAuth(player)) ? JSON.parse(localStorage.getItem(getAuth(player))) : [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name, 0];
        let gols = stats[Ss.GL];
        let cs = stats[Ss.CS];
        let mvps = stats[Ss.MVP] || 0; // Pega os MVPs (ou 0 se não tiver)
        let rank = obterRank(gols, cs); 

        room.sendAnnouncement("[📄] " + rank + " | Stats de " + player.name + ": 🎮 Jogos: " + stats[Ss.GA] + ", ✅ Win: " + stats[Ss.WI] + ", ⭐ MVP: " + mvps + ", ⚽ Gols: " + gols + ", 🛡️ SG: " + cs + ", 👟 Assist: " + stats[Ss.AS] + ", 🤚 GK: " + stats[Ss.GK], player.id, 0x73EC59, "bold");
        room.sendAnnouncement("「👓」 Esta mensagem apenas você pode ver, se você quiser mostrar seus stats, use o comando '!mostrarme'!", player.id, 0xFF7900, "bold");
        return false;


    
    } else if (["!mostrarme"].includes(command)) {
        var stats = localStorage.getItem(getAuth(player)) ? JSON.parse(localStorage.getItem(getAuth(player))) : [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name, 0];
        let gols = stats[Ss.GL];
        let cs = stats[Ss.CS];
        let mvps = stats[Ss.MVP] || 0; // Pega os MVPs
        let rank = obterRank(gols, cs);

        room.sendAnnouncement("[📄] O Jogador " + player.name + " mostrou seus stats! '!mostrarme'!", null, 0xFF7900, "bold")
        room.sendAnnouncement("[📄] " + rank + " | Stats de " + player.name + ": 🎮 Jogos: " + stats[Ss.GA] + ", ✅ Win: " + stats[Ss.WI] + ", ⭐ MVP: " + mvps + ", ⚽ Gols: " + gols + ", 🛡️ SG: " + cs + ", 👟 Assist: " + stats[Ss.AS] + ", 🤚 GK: " + stats[Ss.GK], null, 0x73EC59, "bold");
        return false;
    }
    
    else if (["!games"].includes(message[0].toLowerCase())) {
        var tableau = [];
        try {
            Object.keys(localStorage).forEach(function(key) {
                if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                    tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]);
                }
            });
        } catch {

        }
        if (tableau.length < 5) {
            room.sendAnnouncement("[PV] Não jogou partidas suficientes", player.id, 0xFF0000);
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendAnnouncement("[📄] 🎮 Partidas Jogadas> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);

        return false;
    } else if (["!wins"].includes(message[0].toLowerCase())) {
        var tableau = [];
        try {
            Object.keys(localStorage).forEach(function(key) {
                if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                    tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]);
                }
            });
        } catch {

        }
        if (tableau.length < 5) {
            room.sendAnnouncement("[PV] Não jogou partidas suficientes", player.id, 0x73EC59);
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendAnnouncement("[📄] ✅ Vitórias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);

        return false;
    } else if (["!goats"].includes(message[0].toLowerCase())) {
        var tableau = [];
        try {
            Object.keys(localStorage).forEach(function(key) {
                if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key) && JSON.parse(localStorage.getItem(key))[Ss.WI] > 400) {
                    tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]);
                }
            });
        } catch {

        }
        if (tableau.length < 5) {
            room.sendAnnouncement("[PV] Não jogou partidas suficientes", player.id, 0x73EC59);
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendAnnouncement("[📄] ✅ GOATS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);

        return false;
    } else if (["!goals"].includes(message[0].toLowerCase())) {
        var tableau = [];
        try {
            Object.keys(localStorage).forEach(function(key) {
                if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                    tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]);
                }
            });
        } catch {

        }
        if (tableau.length < 5) {
            room.sendAnnouncement("[📄] Não jogou partidas suficientes", player.id, 0x73EC59);
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendAnnouncement("[📄] ⚽️ Gols> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);

        return false;
    } else if (["!assists"].includes(message[0].toLowerCase())) {
        var tableau = [];
        try {
            Object.keys(localStorage).forEach(function(key) {
                if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                    tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]);
                }
            });
        } catch {

        }
        if (tableau.length < 5) {
            room.sendAnnouncement("[PV] Não jogou partidas suficientes", player.id);
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendAnnouncement("[📄] 👟 Assistências> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);

        return false;
    } else if (["!cs"].includes(message[0].toLowerCase())) {
        var tableau = [];
        try {
            Object.keys(localStorage).forEach(function(key) {
                if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                    tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]);
                }
            });
        } catch {

        }
        if (tableau.length < 5) {
            room.sendAnnouncement("[PV] Não jogou partidas suficientes", player.id, 0x73EC59);
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendAnnouncement("[📄] 🤚 Partidas invictas> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);

        return false;
    } 
    
    else if (["!loginadm"].includes(message[0].toLowerCase())) {
        if (message[1] == adminPassword) {
            room.setPlayerAdmin(player.id, true);
            var stats;
            localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
            if (stats[Ss.RL] != "master") {
                stats[Ss.RL] = "master";
                room.sendAnnouncement(player.name + " logou como Administrador!", null, 0xFF7900, 2);
                localStorage.setItem(getAuth(player), JSON.stringify(stats));
            }
        }
    }

    else if (["!mutes", "!mutelist"].includes(message[0].toLowerCase())) {
        var cstm = "[PV] Lista de mutados : ";
        for (var i = 0; i < extendedP.length; i++) {
            if (room.getPlayer(extendedP[i][eP.ID]) != null && getMute(room.getPlayer(extendedP[i][eP.ID]))) {
                if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ").length) {
                    room.sendChat(cstm, player.id);
                    cstm = "... ";
                }
                cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
            }
        }
        if (cstm == "[PV] Lista de mutados : ") {
            room.sendChat("[PV] Não há ninguém na lista de mutados !", player.id);
            return false;
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    } else if (["!mute"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            updateTeams();
            var timeOut;
            if (!Number.isNaN(Number.parseInt(message[1])) && message.length > 1) {
                if (Number.parseInt(message[1]) > 0) {
                    timeOut = Number.parseInt(message[1]) * 60 * 1000;
                } else {
                    timeOut = 3 * 60 * 1000;
                }
                if (message[2].length > 1 && message[2][0] == "#") {
                    message[2] = message[2].substring(1, message[2].length);
                    if (!Number.isNaN(Number.parseInt(message[2])) && room.getPlayer(Number.parseInt(message[2])) != null) {
                        if (room.getPlayer(Number.parseInt(message[2])).admin || getMute(room.getPlayer(Number.parseInt(message[2])))) {
                            return false;
                        }
                        setTimeout(function(player) {
                            setMute(player, false);
                        }, timeOut, room.getPlayer(Number.parseInt(message[2])));
                        setMute(room.getPlayer(Number.parseInt(message[2])), true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[2])).name + " foi mutado por " + (timeOut / 60000) + " minutos !");
                    }
                }
            } else if (Number.isNaN(Number.parseInt(message[1]))) {
                if (message[1].length > 1 && message[1][0] == "#") {
                    message[1] = message[1].substring(1, message[1].length);
                    if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                        if (room.getPlayer(Number.parseInt(message[1])).admin || getMute(room.getPlayer(Number.parseInt(message[1])))) {
                            return false;
                        }
                        setTimeout(function(player) {
                            setMute(player, false);
                        }, 3 * 60 * 1000, room.getPlayer(Number.parseInt(message[1])));
                        setMute(room.getPlayer(Number.parseInt(message[1])), true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " foi mutado por 3 minutos!");
                    }
                }
            }
        }

    } else if (["!unmute"].includes(message[0].toLowerCase())) {
        if (player.admin && message.length >= 2) {
            if (message[1] == "all") {
                extendedP.forEach((ePlayer) => {
                    ePlayer[eP.MUTE] = false;
                });
                room.sendChat("Todos foram desmutados");
            } else if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
                setMute(room.getPlayer(Number.parseInt(message[1])), false);
                room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " foi desmutado!");
            } else if (Number.isNaN(Number.parseInt(message[1]))) {
                if (message[1].length > 1 && message[1][0] == "#") {
                    message[1] = message[1].substring(1, message[1].length);
                    if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
                        setMute(room.getPlayer(Number.parseInt(message[1])), false);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " foi desmutado!");
                    }
                }
            }
        }
    } else if (["!banlist", "!bans"].includes(message[0].toLowerCase())) {
        if (banList.length == 0) {
            room.sendChat("[PV] Não há ninguém na lista de banidos!", player.id);
            return false;
        }
        var cstm = "[PV] Lista de banidos : ";
        for (var i = 0; i < banList.length; i++) {
            if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
                room.sendChat(cstm, player.id);
                cstm = "... ";
            }
            cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    } else if (["!clearbans"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message.length == 1) {
                room.clearBans();
                room.sendChat("Bans removidos!");
                banList = [];
            }
            if (message.length == 2) {
                if (!Number.isNaN(Number.parseInt(message[1]))) {
                    if (Number.parseInt(message[1]) > 0) {
                        ID = Number.parseInt(message[1]);
                        room.clearBan(ID);
                        if (banList.length != banList.filter((array) => array[1] != ID)) {
                            room.sendChat(banList.filter((array) => array[1] == ID)[0][0] + " ha sido baneado del host !");
                        }
                        setTimeout(() => {
                            banList = banList.filter((array) => array[1] != ID);
                        }, 20);
                    }
                }
            }
        }
    } else if (["!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase())) {
        room.kickPlayer(player.id, "👋 Até mais!", false);
    }
   
    else if (["!clearbans"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message.length == 1) {
                room.clearBans();
                room.sendChat("Bans removidos!");
                banList = [];
            }
            if (message.length == 2) {
                if (!Number.isNaN(Number.parseInt(message[1]))) {
                    if (Number.parseInt(message[1]) > 0) {
                        ID = Number.parseInt(message[1]);
                        room.clearBan(ID);
                        if (banList.length != banList.filter((array) => array[1] != ID)) {
                            room.sendChat(banList.filter((array) => array[1] == ID)[0][0] + " ha sido baneado del host !");
                        }
                        setTimeout(() => {
                            banList = banList.filter((array) => array[1] != ID);
                        }, 20);
                    }
                }
            }
        }
    } else if (["!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase())) {
        room.kickPlayer(player.id, "👋 Até mais!", false);
    }
   
    if (regex.includes(message[2])) {
        room.sendAnnouncement("Sem palavrões, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }
    if (regex.includes(message[3])) {
        room.sendAnnouncement("Sem palavrões, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }
    if (regex.includes(message[4])) {
        room.sendAnnouncement("Sem palavrões, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }
    if (regex.includes(message[5])) {
        room.sendAnnouncement("Sem palavrões, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }

    if (link.includes(message[0])) {
        room.sendAnnouncement("Você não pode enviar links aqui, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }

    if (link.includes(message[1])) {
        room.sendAnnouncement("Você não pode enviar links aqui, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }

    if (link.includes(message[2])) {
        room.sendAnnouncement("Você não pode enviar links aqui, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }

    if (link.includes(message[3])) {
        room.sendAnnouncement("Você não pode enviar links aqui, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }

    if (link.includes(message[4])) {
        room.sendAnnouncement("Você não pode enviar links aqui, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }

    if (link.includes(message[5])) {
        room.sendAnnouncement("Você não pode enviar links aqui, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }

    if (link.includes(message[6])) {
        room.sendAnnouncement("Você não pode enviar links aqui, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }

    if (link.includes(message[7])) {
        room.sendAnnouncement("Você não pode enviar links aqui, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }

    if (message[0][0] == "!") { // faz nao aparecer o comando usado no chat
        return false;
    }

    if (TeamR.length != 0 && TeamB.length != 0 && inChooseMode) { // modo de escolher o time
        if (player.id == TeamR[0].id || player.id == TeamB[0].id) { // aqui nós nos importamos se é um dos capitães escolhendo
            if (TeamR.length <= TeamB.length && player.id == TeamR[0].id) { // aqui nós nos importamos se é red turn && red cap falando
                if (["top", "auto"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[0].id, Team.RED);
                    redCaptainChoice = "top";
                    clearTimeout(timeOutCap);
                    room.sendAnnouncement(player.name + " optou por escolher o primeiro da lista!", null, 0x55bae2, "normal");
                    return false;
                } else if (["random", "rand"].includes(message[0].toLowerCase())) {
                    var r = getRandomInt(teamS.length);
                    room.setPlayerTeam(teamS[r].id, Team.RED);
                    redCaptainChoice = "random";
                    clearTimeout(timeOutCap);
                    room.sendAnnouncement(player.name + " optou por escolher um time aleatório", null, 0x55bae2, "normal");
                    return false;
                } else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
                    redCaptainChoice = "bottom";
                    clearTimeout(timeOutCap);
                    room.sendAnnouncement(player.name + " optou por escolher o último da lista!", null, 0x55bae2, "normal");
                    return false;
                } else if (!Number.isNaN(Number.parseInt(message[0]))) {
                    if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
                        room.sendAnnouncement("[⚠️] Ops! O número que você escolheu é inválido.", player.id, null, 0xfaca29, "normal");
                        return false;
                    } else {
                        room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.RED);
                        room.sendAnnouncement(player.name + " recrutou o(a): " + teamS[Number.parseInt(message[0]) - 1].name + " !", null, 0x55bae2, "normal");
                        return false;
                    }
                }
            }
            if (TeamR.length > TeamB.length && player.id == TeamB[0].id) { // aqui nós nos importamos se é red turn && red cap falando
                if (["top", "auto"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[0].id, Team.BLUE);
                    blueCaptainChoice = "top";
                    clearTimeout(timeOutCap);
                    room.sendAnnouncement(player.name + " optou por escolher o primeiro da lista!", null, 0x55bae2, "normal");
                    return false;
                } else if (["random", "rand"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
                    blueCaptainChoice = "random";
                    clearTimeout(timeOutCap);
                    room.sendAnnouncement(player.name + " optou por escolher um time aleatório", null, 0x55bae2, "normal");
                    return false;
                } else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
                    blueCaptainChoice = "bottom";
                    clearTimeout(timeOutCap);
                    room.sendAnnouncement(player.name + " optou por escolher o último da lista!", null, 0x55bae2, "normal");
                    return false;
                } else if (!Number.isNaN(Number.parseInt(message[0]))) {
                    if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
                        room.sendAnnouncement("[⚠️] Ops! O número que você escolheu é inválido.", player.id, null, 0xfaca29, "normal");
                        return false;
                    } else {
                        room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.BLUE);
                        room.sendAnnouncement(player.name + " recrutou o(a): " + teamS[Number.parseInt(message[0]) - 1].name + "!", null, 0x55bae2, "normal");
                        return false;
                    }
                }
            }
        }

// --- CHAT COM RANK NO NICK ---
    // 1. Pega os stats
    var stats = localStorage.getItem(getAuth(player)) ? JSON.parse(localStorage.getItem(getAuth(player))) : [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name, 0];
    
    // 2. Define variáveis para facilitar
    let gols = stats[Ss.GL];
    let cs = stats[Ss.CS];
    
    // 3. Calcula Rank
    let meuRank = obterRank(gols, cs); 

    // 4. Envia: [Rank | ⚽:Gols | 🛡️:CS] Nome: mensagem
    room.sendAnnouncement("[" + meuRank + " | ⚽:" + gols + " | 🛡️:" + cs + "] " + player.name + ": " + originalMessage, null, null, "normal");

    // 5. Bloqueia a mensagem original
    return false;

    }
if (getMute(player)) {
        room.sendChat("Você está mutado", player.id);
        return false;
    }
    if (slowMode > 0) {
        if (!player.admin) {
            if (!SMSet.has(player.id)) {
                SMSet.add(player.id);
                setTimeout((number) => {
                    SMSet.delete(number);
                }, slowMode * 1000, player.id);
            } else {
                return false;
            }
        }
    }
        if (localStorage.getItem(getAuth(player))) {
    stats = JSON.parse(localStorage.getItem(getAuth(player)));
    
    // 1. Define apenas o Nome do Rank e a Cor (sem montar a frase ainda)
    var rankName = "Sem rank";
    var chatColor = "0xEBEBEB";

    if (stats[Ss.GL] > 500) { 
        rankName = "Deus da Aura"; 
        chatColor = "0xf77104"; 
    } else if (stats[Ss.GL] > 200) { 
        rankName = "Gigachad IV"; 
        chatColor = "0x7cd3fa"; 
    } else if (stats[Ss.GL] > 150) { 
        rankName = "Gigachad III"; 
        chatColor = "0x7cd3fa"; 
    } else if (stats[Ss.GL] > 120) { 
        rankName = "Gigachad II"; 
        chatColor = "0x7cd3fa"; 
    } else if (stats[Ss.GL] > 80) { 
        rankName = "Gigachad I"; 
        chatColor = "0x7cd3fa"; 
    } else if (stats[Ss.GL] > 60) { 
        rankName = "Omega III"; 
        chatColor = "0x62AEE3"; 
    } else if (stats[Ss.GL] > 55) { 
        rankName = "Omega II"; 
        chatColor = "0x62AEE3"; 
    } else if (stats[Ss.GL] > 50) { 
        rankName = "Omega I"; 
        chatColor = "0x62AEE3"; 
    } else if (stats[Ss.GL] > 40) { 
        rankName = "Sigma III"; 
        chatColor = "0xEAC274"; 
    } else if (stats[Ss.GL] > 35) { 
        rankName = "Sigma II"; 
        chatColor = "0xEAC274"; 
    } else if (stats[Ss.GL] > 30) { 
        rankName = "Sigma I"; 
        chatColor = "0xEAC274"; 
    } else if (stats[Ss.GL] > 20) { 
        rankName = "Alpha III"; 
        chatColor = "0xA2A2A2"; 
    } else if (stats[Ss.GL] > 15) { 
        rankName = "Alpha II"; 
        chatColor = "0xA2A2A2"; 
    } else if (stats[Ss.GL] > 10) { 
        rankName = "Alpha I"; 
        chatColor = "0xA2A2A2"; 
    } else if (stats[Ss.GL] > 8) { 
        rankName = "Betinha III"; 
        chatColor = "0xbc5e00"; 
    } else if (stats[Ss.GL] > 5) { 
        rankName = "Betinha II"; 
        chatColor = "0xbc5e00"; 
    } else if (stats[Ss.GL] > 2) { 
        rankName = "Betinha I"; 
        chatColor = "0xbc5e00"; 
    }

    // 2. Busca a TAG do clube
    var tag = getClubeDoPlayer(getAuth(player));
    
    // Se tiver tag, adiciona os colchetes e um espaço: [FLA] 
    // Se não tiver, fica vazio
    var tagDisplay = tag ? "[" + tag + "] " : ""; 

    // 3. Monta a mensagem final no formato que você pediu
    // Ex: [FLA] 「Gigachad I」 salameico: s
    var announcement = tagDisplay + "「" + rankName + "」 " + player.name + ": " + originalMessage;

    // 4. Envia a mensagem
    room.sendAnnouncement(announcement, null, chatColor);
    return false;
}
else {
    room.sendAnnouncement(`❌ ${player.name}: ${originalMessage}`, null, 0xABAEA7);
    return false;
}
}

room.onPlayerActivity = function(player) {
    setActivity(player, 0);
}

room.onPlayerBallKick = function(player) {
    // Lógica original de último toque
    if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
        !activePlay ? activePlay = true : null;
        lastTeamTouched = player.team;
        lastPlayersTouched[1] = lastPlayersTouched[0];
        lastPlayersTouched[0] = player;
    }

    // --- NOVA LÓGICA DE MVP (CONTA TOQUES) ---
    if (!matchStats[player.id]) matchStats[player.id] = { touches: 0 };
    matchStats[player.id].touches++;
}

/* GESTÃO DE JOGO */

room.onGameStart = function(byPlayer) {
    // --- CORREÇÃO: CONFIGURAÇÕES E MENSAGENS APENAS SE NÃO FOR PÊNALTI ---
    if (inPenaltyMode == false) {
        // Configura tempo e placar do X3
        room.setScoreLimit(scoreLimitPractice);
        room.setTimeLimit(timeLimitPractice);

        // MENSAGENS DE INÍCIO (Só aparecem no jogo normal agora)
        room.sendAnnouncement(centerText("🥅 A PARTIDA VAI COMEÇAR, NÃO ENVERGONHE SEU TIME 🥅"), null, Cor.White, "bold");
        room.sendAnnouncement(centerText("Quer criar um clube? Digite '!criarclube'"), null, 0x2EF55D, "bold");
        room.sendAnnouncement(centerText("Quer mudar o uniforme? Digite '!uni'"), null, 0x2EF55D, "bold");
        room.sendAnnouncement(centerText("Veja outros comandos com !help ou !ajuda"), null, 0x2EF55D, "bold");
        room.sendAnnouncement(centerText("[💬] Use 't' mensagem para conversar com a sua equipe!"), null, 0x5EE7FF);
    }
    // ----------------------------------

    game = new Game(Date.now(), room.getScores(), []);
    countAFK = true;
    activePlay = false;
    goldenGoal = false;
    endGameVariable = false;
    lastPlayersTouched = [null, null];
    Rposs = 0;
    Bposs = 0;
    GKList = [];
    allReds = [];
    allBlues = [];
    
    if (TeamR.length == maxTeamSize && TeamB.length == maxTeamSize) {
        for (var i = 0; i < maxTeamSize; i++) {
            allReds.push(TeamR[i]);
            allBlues.push(TeamB[i]);
        }
    }
    
    for (var i = 0; i < extendedP.length; i++) {
        extendedP[i][eP.GK] = 0;
        extendedP[i][eP.ACT] = 0;
        room.getPlayer(extendedP[i][eP.ID]) == null ? extendedP.splice(i, 1) : null;
    }
    
    deactivateChooseMode();


matchStats = {}; // Reseta os stats da partida
    room.getPlayerList().forEach(p => {
        matchStats[p.id] = { touches: 0 };
    });

}

room.onGameStop = function(byPlayer) {
    // --- TRAVA DE PÊNALTI ---
    // Se for pênalti, o stopGame serve apenas para resetar posições, não para acabar o jogo
    if (inPenaltyMode) return; 
    // -----------------------

    if (byPlayer.id == 0 && endGameVariable) {
        updateTeams();
        if (inChooseMode) {
            // ... (seu código original de choose mode mantido aqui)
            if (players.length == 2 * maxTeamSize) {
                inChooseMode = false;
                resetBtn();
                for (var i = 0; i < maxTeamSize; i++) setTimeout(() => { randomBtn(); }, 400 * i);
                setTimeout(() => { room.startGame(); }, 2000);
            } else {
                if (lastWinner == Team.RED) blueToSpecBtn();
                else if (lastWinner == Team.BLUE) { redToSpecBtn(); blueToRedBtn(); }
                else resetBtn();
                setTimeout(() => { topBtn(); }, 500);
            }
        } else {
            // Lógica padrão de rotação X3
            if (players.length == 2) {
                if (lastWinner == Team.BLUE) {
                    room.setPlayerTeam(TeamB[0].id, Team.RED);
                    room.setPlayerTeam(TeamR[0].id, Team.BLUE);
                }
                setTimeout(() => { room.startGame(); }, 2000);
            } else if (players.length == 3 || players.length >= 2 * maxTeamSize + 1) {
                if (lastWinner == Team.RED) blueToSpecBtn();
                else { redToSpecBtn(); blueToRedBtn(); }
                setTimeout(() => { topBtn(); }, 200);
                setTimeout(() => { room.startGame(); }, 2000);
            } else if (players.length == 4) {
                resetBtn();
                setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500);
                setTimeout(() => { room.startGame(); }, 2000);
            } else if (players.length == 5 || players.length >= 2 * maxTeamSize + 1) {
                if (lastWinner == Team.RED) blueToSpecBtn();
                else { redToSpecBtn(); blueToRedBtn(); }
                setTimeout(() => { topBtn(); }, 200);
                activateChooseMode();
            } else if (players.length == 6) {
                resetBtn();
                setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500); }, 500);
                setTimeout(() => { room.startGame(); }, 2000);
            }
        }
    }
}

room.onGamePause = function(byPlayer) {}

room.onGameUnpause = function(byPlayer) {
    if (TeamR.length == 4 && TeamB.length == 4 && inChooseMode || (TeamR.length == TeamB.length && teamS.length < 2 && inChooseMode)) {
        deactivateChooseMode();
    }
}



room.onTeamGoal = function(team) {
    // 1. LÓGICA DE PÊNALTIS (Mantida Original)
    if (typeof inPenaltyMode !== 'undefined' && inPenaltyMode) {
        let shooterName = "";
        let shooterTeamName = "";
        if (penaltyStep === 0) {
             let idx = (penaltyIndexRed - 1 + penaltyReds.length) % penaltyReds.length;
             let p = penaltyReds[idx];
             if (p) { shooterName = p.name; shooterTeamName = "(RED)"; }
        } else {
             let idx = (penaltyIndexBlue - 1 + penaltyBlues.length) % penaltyBlues.length;
             let p = penaltyBlues[idx];
             if (p) { shooterName = p.name; shooterTeamName = "(BLUE)"; }
        }

        if (team === 1) { 
            if (penaltyStep === 0) {
                penScoreRed++; 
                room.sendAnnouncement("⚽ GOL! " + shooterName + " " + shooterTeamName + " marcou!", null, Cor.Verde, "bold");
            } else {
                penScoreBlue++; 
                room.sendAnnouncement("⚽ GOL! " + shooterName + " " + shooterTeamName + " marcou!", null, Cor.Verde, "bold");
            }
        } else {
            room.sendAnnouncement("❌ PERDEU! " + shooterName + " " + shooterTeamName + " errou!", null, Cor.Vermelho, "bold");
        }

        penaltyStep = (penaltyStep === 0) ? 1 : 0;
        if (penaltyStep === 0) penaltyTurn++;

        room.sendAnnouncement("PLACAR: 🔴 " + penScoreRed + " - " + penScoreBlue + " 🔵", null, Cor.Branco);

        setTimeout(() => {
            room.stopGame();
            if (penaltyTurn > 3 && penScoreRed !== penScoreBlue) {
                finishPenalties(penScoreRed > penScoreBlue ? Team.RED : Team.BLUE);
            } else {
                room.startGame();
                setupPenaltyTurn();
            }
        }, 2000);
        return;
    }

    // 2. JOGO NORMAL
    teamgoaler = team;
    let goalMaker = lastPlayersTouched[0] ? lastPlayersTouched[0].id : null;
    activePlay = false;
    countAFK = false;
    const scores = room.getScores();
    game.scores = scores;
    
    // Verifica se é partida 3x3 oficial
    var isOfficial = (TeamR.length >= 3 && TeamB.length >= 3);

    // ======================================================
    // GOL A FAVOR
    // ======================================================
    if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
        
        // 🔥 MENSAGEM MOVIDA PARA CÁ (AGORA APARECE SEMPRE) 🔥
        room.sendAnnouncement(centerText("FARMOU AURA HEIN!??🗿🤫🧏‍♂️🥶"), null, 0xFFFFFF, "bold");

        // --- SCORER: Aura e Conquistas ---
        if (isOfficial) {
            addAura(lastPlayersTouched[0], AURA.GOL, "⚽ Gol marcado");
            somarConquista(lastPlayersTouched[0], "goals", 1); 
            
            if (typeof ballSpeed !== 'undefined' && ballSpeed > 100) {
                addAura(lastPlayersTouched[0], 50, "🚀 Chute Canhão");
            }
        }

        // --- VERIFICA SE TEVE ASSISTÊNCIA ---
        if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team && lastPlayersTouched[1].id != lastPlayersTouched[0].id) {
            
            room.sendAnnouncement(centerText("          ⚽ Gol de " + lastPlayersTouched[0].name + " ⚽"), null, 0xFFFFFF, "bold");
            room.sendAnnouncement(centerText("👟 Assistência: " + lastPlayersTouched[1].name + " 👟"), null, 0xFFFFFF, "bold");
            room.sendAnnouncement(centerText("Velocidade do chute: " + ballSpeed.toPrecision(4).toString() + " km/h"), null, 0xFFFFFF, "normal");
            
            game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));
            
            if (isOfficial) {
                addAura(lastPlayersTouched[1], AURA.ASSIST, "👟 Assistência");
                somarConquista(lastPlayersTouched[1], "assists", 1);
            }

            // Animação da Assistência
            let goalAssist = lastPlayersTouched[1].id;
            setTimeout(function () { 
                room.setPlayerAvatar(goalAssist, "🤝"); 
                setTimeout(function () { room.setPlayerAvatar(goalAssist, "👟"); setTimeout(function () { room.setPlayerAvatar(goalAssist, null); }, 2500); }, 1000); 
            }, 1);

        } else {
            // --- GOL SOLO (SEM ASSISTÊNCIA) ---
            room.sendAnnouncement(centerText("          ⚽ Gol de " + lastPlayersTouched[0].name + " ⚽"), null, 0xFFFFFF, "bold");
            room.sendAnnouncement(centerText("Velocidade do chute: " + ballSpeed.toPrecision(4).toString() + " km/h"), null, 0xFFFFFF, "normal");
            
            game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], null));
        }

        // Animação do Goleador
        if (goalMaker) {
            setTimeout(function () { 
                room.setPlayerAvatar(goalMaker, "🎯"); 
                setTimeout(function () { room.setPlayerAvatar(goalMaker, "⚽"); setTimeout(function () { room.setPlayerAvatar(goalMaker, null); }, 3000); }, 1200); 
            }, 1);
        }

    }
    // ======================================================
    // GOL CONTRA
    // ======================================================
    else { 
        if (lastPlayersTouched[0]) {
            room.sendAnnouncement(centerText("🤦‍♂️ PERDEU TODA A AURA...💀🤦‍♂️"), null, Cor.Laranja, "bold");
            room.sendAnnouncement(centerText("🤡 Gol de " + lastPlayersTouched[0].name + " 🤡"), null, 0xFFFFFF, "bold");
            room.sendAnnouncement(centerText("Velocidade do chute: " + ballSpeed.toPrecision(4).toString() + " km/h"), null, 0xFFFFFF, "normal");
            
            game.goals.push(new Goal(scores.time, team, null, null));
            
            // Aura Gol Contra
            if (isOfficial) addAura(lastPlayersTouched[0], AURA.GOL_CONTRA, "🤡 Gol Contra");

            // Animação Gol Contra
            setTimeout(function () { 
                room.setPlayerAvatar(goalMaker, "🤦‍♂️"); 
                setTimeout(function () { 
                    room.setPlayerAvatar(goalMaker, "🤡"); 
                    setTimeout(function () { 
                        room.setPlayerAvatar(goalMaker, null); 
                    }, 3000); 
                }, 1000); 
            }, 1);
            
            golcontra(lastPlayersTouched[0]);
        }
    }
    
    // FIM DE JOGO POR GOLS
    if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit && scores.blue > 0 || goldenGoal == true)) {
        endGame(team);
        goldenGoal = false;
        setTimeout(() => { room.stopGame(); }, 1000);
    }
};
/* DIVERSOS */

// Verifica a conexão a cada 3 segundos
setInterval(() => {
    var players = room.getPlayerList();
    var agora = Date.now();

    players.forEach((p) => {
        // Ignora o Host (ID 0)
        if (p.id == 0) return;

        // Se o ping for maior que o limite
        if (p.ping > PING_LIMITE) {
            
            // Verifica se já avisamos recentemente (sistema anti-spam)
            if (!pingWarnings[p.id] || (agora - pingWarnings[p.id] > PING_COOLDOWN)) {
                
                // CENÁRIO A: Está Jogando (Time Red ou Blue)
                if (p.team != 0) {
                    // Manda para TODOS (null)
                    room.sendAnnouncement("⚠️ " + p.name + ", sua net tá um lixo, vai atrapalhar seu time mesmo?", null, 0xFF0000, "bold");
                } 
                // CENÁRIO B: Está no Spectator
                else {
                    // Manda SÓ PARA ELE (p.id)
                    room.sendAnnouncement("⚠️ Sua net tá um lixo (" + p.ping + "ms), tem certeza que vai jogar a próxima?", p.id, 0xFFA500, "bold");
                }

                // Atualiza o tempo do último aviso
                pingWarnings[p.id] = agora;
            }
        }
    });
}, 3000); // Roda a verificação a cada 3 segundos

setInterval(() => {
    room.getPlayerList().forEach(p => addAura(p, AURA.TEMPO, null));
}, 5 * 60 * 1000);

room.onRoomLink = function(url) {}

room.onPlayerAdminChange = function(changedPlayer, byPlayer) {
    if (getMute(changedPlayer) && changedPlayer.admin) {
        room.sendChat(changedPlayer.name + " foi desmutado.");
        setMute(changedPlayer, false);
    }
    if (byPlayer.id != 0 && localStorage.getItem(getAuth(byPlayer)) && JSON.parse(localStorage.getItem(getAuth(byPlayer)))[Ss.RL] == "admin") {
        room.sendChat("Você não tem permissão para nomear um jogador como administrador!", byPlayer.id);
        room.setPlayerAdmin(changedPlayer.id, false);
    }
}

room.onStadiumChange = function(newStadiumName, byPlayer) {}

room.onGameTick = function() {
    checkTime();
    getLastTouchOfTheBall();
    getStats();
    handleInactivity();
}






















