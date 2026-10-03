/* Estado de la demo compartido entre la tienda y su panel de administración.
   Vive solo en el navegador de quien la mira: no hay servidor ni planilla real. */
window.__SVR_DEMO__ = {
  llave: 'svr-demo-admin',
  inicial: {
    agotados: ['topialyse-palpebral'],
    inventario: {
      'sebia-active-gel': 18, 'sebia-gel-moussant-200': 32, 'sebia-gel-moussant-400': 4,
      'sebia-ampoule-az': 12, 'sebia-serum': 9, 'topialyse-huile-lavante': 21,
      'topialyse-baume-protect': 15, 'cicavit-creme-hppi': 27, 'sunsecure-extreme': 40,
      'sunsecure-blur': 3, 'sunsecure-blur-teinte': 0, 'sunsecure-fluide-photoage': 11,
      'sensifine-extreme': 7, 'sensifine-eau-micellaire': 24, 'clairial-ampoule': 6,
      'clairial-night-peel': 14, 'antiage-ampoule-c': 10, 'antiage-ampoule-b3': 2,
      'antiage-c20': 8, 'antiage-hyalu': 5
    }
  },
  leer: function () {
    try {
      var d = JSON.parse(localStorage.getItem(this.llave));
      if (d && Array.isArray(d.agotados)) return d;
    } catch (e) { /* sin almacenamiento: se usa el estado inicial */ }
    return JSON.parse(JSON.stringify(this.inicial));
  },
  guardar: function (d) {
    try { localStorage.setItem(this.llave, JSON.stringify(d)); } catch (e) { /* modo privado */ }
  }
};
