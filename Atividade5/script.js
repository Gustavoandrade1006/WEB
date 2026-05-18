function check() {
          let Trf = document.getElementById("Tarefa").value;
          if (Trf === "") {
               return
          }
          let prioridade = document.getElementById("Priorid").value;
          let p = document.createElement("p")
          let box = document.createElement("div")
          box.classList.add("card", "d-inline-block")
          p.innerHTML="Tarefa: "  + Trf + " | Prioridade: " + prioridade;
          box.appendChild(p)
          document.body.appendChild(box)
          document.getElementById("container").appendChild(box);

          if (prioridade === "Alta") {
                box.classList.add("bg-danger"); 
                } 

          else {
                box.classList.add("bg-success"); 
                }

               
        }