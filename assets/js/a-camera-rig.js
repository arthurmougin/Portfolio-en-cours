AFRAME.registerComponent('camerarig', {
    init: function () {
       //test mobile
        console.log(AFRAME.utils.device.isMobile());
        if(false){
            console.dir(this.el);
            let el = this.el;
            let camera = el.querySelector("#camera");
            console.log(camera.object3D.rotation);
            el.object3D.rotation.set(
                THREE.Math.degToRad(0),
                THREE.Math.degToRad(-camera.object3D.rotation),
                THREE.Math.degToRad(0)
            );
            el.object3D.rotation.x += Math.PI;
       }
    }
});