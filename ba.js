 window.onload = function(){

      var canvas = document.getElementById("canvas");
      var c = canvas.getContext("2d");
      document.body.appendChild(canvas);
      var particles = {};
      var particleIndex = 0;
      var particleNum = 10;

    

      canvas.width = 300;
      canvas.height = 400;

    

      function Particle(){
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.vx = Math.random() * 10 - 5;
        this.vy = Math.random() * 10 - 5;

        particleIndex++;
        particles[particleIndex] = this;
        this.id = particleIndex;

        this.life = 0;
        this.maxLife = 100;
      }
      Particle.prototype.draw = function(){
        this.x += this.vx;
        this.y += this.vy;

        this.life++;
        if ( this.life > this.maxLife){
          delete particles[this.id];
        }

        c.fillStyle = "white";
        c.fillRect(this.x, this.y, Math.random() * 5, Math.random() * 5);
      }



      setInterval(function(){
      c.clearRect(0, 0, canvas.width, canvas.height);
        for ( var i = 0; i < particleNum; i++){
          new Particle();
        }



        for ( var i in particles){
          particles[i].draw();
        }

      }, 30);


     };