document.addEventListener("DOMContentLoaded", function(){

  let drop_area1 = document.getElementById('drag-box-1');
  let drop_area2 = document.getElementById('drag-box-2');
  let mobs = document.getElementsByClassName('mob');
  console.log('mobs:', mobs);

  // Attaching dragstart event handler to mobs
    for (let i = 0; i < mobs.length; i++) {
        if (mobs[i].hasAttribute('draggable')) {
            mobs[i].addEventListener('dragstart', drag_start_handler);
        }
    }

  function drag_start_handler (ev){
        console.log('dragstart of ', ev.target);
        let index = Array.from(mobs).indexOf(ev.target);
        console.log('index of the mob startdragged : ', index);
        ev.dataTransfer.setData('text/plain', index);
        ev.dataTransfer.effectAllowed = "move";
        // ev.dataTransfer.effectAllowed = "move";
    }

    // 'dragenter' listener for the drop_area1
    drop_area1.addEventListener('dragenter', function(ev){
        console.log('dragenter', ev);
        this.classList.add('entered'); // Adding a css effect
        ev.dataTransfer.dropEffect = "move";
        // ev.preventDefault();
    });

    // 'dragleave' listener for the drop_area1
    drop_area1.addEventListener('dragleave', function(ev){
        console.log('dragleave');
        this.classList.remove('entered');
        // ev.preventDefault();
    });

    // 'dragover' listener for the drop_area1
    drop_area1.addEventListener('dragover', function(ev){
        console.log('dragover');
        this.classList.add('entered'); // Adding a css effect
        ev.preventDefault(); // Removes the forbidden icon when hovering drop zone
        ev.dataTransfer.dropEffect = "move";
    });

    // 'drop' listener for the drop_area1
    drop_area1.addEventListener('drop', function(ev){
        console.log('drop');
        // console.log(ev.dataTransfer);
        let mob_index = ev.dataTransfer.getData('text/plain');
        this.appendChild(mobs[mob_index]);
        console.log('mobs:', mobs);
        this.classList.remove('entered');
        // Removing some text inside if no mobs yet
        if (0 === this.getElementsByClassName('mob').length) {
            this.textContent = '';
        }
        ev.preventDefault();
    });

    // 'dragenter' listener for the drop_area2
    drop_area2.addEventListener('dragenter', function(ev){
        console.log('dragenter', ev);
        this.classList.add('entered'); // Adding a css effect
        ev.dataTransfer.dropEffect = "move";
        // ev.preventDefault();
    });

    // 'dragleave' listener for the drop_area2
    drop_area2.addEventListener('dragleave', function(ev){
        console.log('dragleave');
        this.classList.remove('entered');
        // ev.preventDefault();
    });

    // 'dragover' listener for the drop_area2
    drop_area2.addEventListener('dragover', function(ev){
        console.log('dragover');
        this.classList.add('entered'); // Adding a css effect
        ev.preventDefault(); // Removes the forbidden icon when hovering drop zone
        ev.dataTransfer.dropEffect = "move";
    });

    // 'drop' listener for the drop_area2
    drop_area2.addEventListener('drop', function(ev){
        console.log('drop');
        // console.log(ev.dataTransfer);
        let mob_index = ev.dataTransfer.getData('text/plain');
        this.appendChild(mobs[mob_index]);
        console.log('mobs:', mobs);
        this.classList.remove('entered');
        // Removing some text inside if no mobs yet
        if (0 === this.getElementsByClassName('mob').length) {
            this.textContent = '';
        }
        ev.preventDefault();
    });

});
