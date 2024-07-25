import nipplejs from 'nipplejs';
import { useEffect, useRef } from 'react';

export const Joystick = () => {
  const joystickRef = useRef(null);

  useEffect(() => {
    // Créer le joystick
    const joystick = nipplejs.create({
      zone: joystickRef.current,
      mode: 'static', // Le joystick reste à une position fixe
      position: { left: '50%', top: '50%' }, // Position initiale du joystick
      color: 'blue', // Couleur du joystick
    });

    // Gérer l'événement de mouvement du joystick
    joystick.on('move', (evt, data) => {
      console.log('Move:', data);
    });

    // Gérer l'événement de fin de mouvement du joystick
    joystick.on('end', (evt, data) => {
      console.log('End:', data);
    });

    // Nettoyer le joystick à la désactivation du composant
    return () => {
      joystick.destroy();
    };
  }, []);

  return (
    <div
      ref={joystickRef}
      style={{ width: '200px', height: '200px', position: 'relative', background: '#ccc' }}
    />
  );
};