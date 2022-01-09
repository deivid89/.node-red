// name: Status_Disjuntores
// outputs: 1
// initialize: // Code added here will be run once\n// whenever the node is started.\n
// finalize: // Code added here will be run when the\n// node is being stopped or re-deployed.\n
// info: 
var payload = msg.payload;
// Status do Disjuntor(52.20) de Saída do transformador 03 - TR3
if (msg.payload[0] == "0"){
    payload[0] = "Falha de comunicaçãoT";
    }
    if (payload[0] == "1"){
        payload[0] = "Ligado";
        }
        if (payload[0] == "2"){
            payload[0] = "Desligado";
            }

//Status do Disjuntor(52.21) de Saída 05 do transformador 03 - TR3
if (msg.payload[1] == "0"){
    payload[1] = "Falha de comunicaçãoT";
    }
    if (payload[1] == "1"){
        payload[1] = "Ligado";
        }
        if (payload[1] == "2"){
            payload[1] = "Desligado";
            }

//Status do Disjuntor(52.22) de Saída 06 do transformador 03 - TR3
if (msg.payload[2] == "0"){
    payload[2] = "Falha de comunicaçãoT";
    }
    if (payload[2] == "1"){
        payload[2] = "Ligado";
        }
        if (payload[2] == "2"){
            payload[2] = "Desligado";
            }

//Status do Disjuntor(52.2) de Saída do transformador 01 - TR1: 
if (msg.payload[3] == "0"){
    payload[3] = "Falha de comunicaçãoT";
    }
    if (payload[3] == "1"){
        payload[3] = "Ligado";
        }
        if (payload[3] == "2"){
            payload[3] = "Desligado";
            }

//Status do Disjuntor(52.3) de Saída do transformador 02 - TR2: 
if (msg.payload[4] == "0"){
    payload[4] = "Falha de comunicaçãoT";
    }
    if (payload[4] == "1"){
        payload[4] = "Ligado";
        }
        if (payload[4] == "2"){
            payload[4] = "Desligado";
            }

//Status do Disjuntor(52.4) de Saída 01 do transformador 01 - TR1:  
if (msg.payload[5] == "0"){
    payload[5] = "Falha de comunicaçãoT";
    }
    if (payload[5] == "1"){
        payload[5] = "Ligado";
        }
        if (payload[5] == "2"){
            payload[5] = "Desligado";
        }

//Status do Disjuntor(52.5) de Saída 02 do transformador 02 - TR2:   
if (msg.payload[6] == "0"){
    payload[6] = "Falha de comunicaçãoT";
    }
    if (payload[6] == "1"){
        payload[6] = "Ligado";
        }
        if (payload[6] == "2"){
            payload[6] = "Desligado";
            }

//Status do Disjuntor(52.7) de Saída 04 do transformador 02 - TR2:  
if (msg.payload[7] == "0"){
    payload[7] = "Falha de comunicaçãoT";
    }
    if (payload[7] == "1"){
        payload[7] = "Ligado";
        }
        if (payload[7] == "2"){
            payload[7] = "Desligado";
            }

//Status do Disjuntor(52.8) de Saída 03 do transformador 02 - TR2:  
if (msg.payload[8] == "0"){
    payload[8] = "Falha de comunicaçãoT";
    }
    if (payload[8] == "1"){
        payload[8] = "Ligado";
        }
        if (payload[8] == "2"){
            payload[8] = "Desligado";
            }

//Status do Disjuntor(52.23): Tala entre transformador 03 - TR3 e transformador 01 - TR1:
if (msg.payload[9] == "0"){
    payload[9] = "Falha de comunicaçãoT";
    }
    if (payload[9] == "1"){
        payload[9] = "Ligado";
        }
        if (payload[9] == "2"){
            payload[9] = "Desligado";
            }

//Status do Disjuntor(52.23): Tala entre transformador 03 - TR3 e transformador 01 - TR1:
if (msg.payload[10] == "0"){
    payload[10] = "Falha de comunicaçãoT";
    }
    if (payload[10] == "1"){
        payload[10] = "Ligado";
        }
        if (payload[10] == "2"){
            payload[10] = "Desligado";
            }



msg.payload[0] = (payload[0]);//Status do Disjuntor(52.20)
msg.payload[1] = (payload[1]);//Status do Disjuntor(52.21)
msg.payload[2] = (payload[2]);//Status do Disjuntor(52.22)
msg.payload[3] = (payload[3]);//Status do Disjuntor(52.02)
msg.payload[4] = (payload[4]);//Status do Disjuntor(52.03)
msg.payload[5] = (payload[5]);//Status do Disjuntor(52.04)
msg.payload[6] = (payload[6]);//Status do Disjuntor(52.05)
msg.payload[7] = (payload[7]);//Status do Disjuntor(52.07)
msg.payload[8] = (payload[8]);//Status do Disjuntor(52.08)
msg.payload[9] = (payload[9]);//Status do Disjuntor(52.23)
msg.payload[10] = (payload[10]);//Status do Disjuntor(52.23)

return msg;