interface Tarea {
    fechaExpiracion: Date;
    descripcion: string;
    completada: boolean;
}

class ToDo {
    private misTareas: Array<Tarea> = []
    getMisTareas() {
        return [...this.misTareas];
    }
    agregarTarea(nuevaTarea: Tarea) {
        this.misTareas = [...this.misTareas, nuevaTarea];
    }
    cambiarEstadoTarea(desc: string, comp: boolean): void {
        this.misTareas = this.misTareas.map(function (tarea) {
            return tarea.descripcion === desc ? { ...tarea, completada: comp } : tarea;
        })
    }
    tareasExpiradas(hoy: Date) {
        return this.misTareas.map(function (tarea) {
            if (tarea.fechaExpiracion < hoy) {
                return {
                    ...tarea,
                    descripcion: tarea.descripcion + (tarea.completada ? '(completada)' : '(expirada)')
                }
            }
            return tarea;
        })
    }
}

let todo = new ToDo
let hoy = new Date
hoy.setSeconds(0)
hoy.setMilliseconds(0)
hoy.setMinutes(0)
hoy.setHours(0)

let ayer = new Date
ayer.setDate(ayer.getDate() - 1)
ayer.setSeconds(0)
ayer.setMilliseconds(0)
ayer.setMinutes(0)
ayer.setHours(0)

todo.agregarTarea({ completada: false, descripcion: 'tarea1', 'fechaExpiracion': new Date })
todo.agregarTarea({ completada: true, descripcion: 'tarea2', 'fechaExpiracion': ayer })
todo.agregarTarea({ completada: false, descripcion: 'tarea3', 'fechaExpiracion': new Date })
todo.agregarTarea({ completada: false, descripcion: 'tarea4', 'fechaExpiracion': ayer })
todo.agregarTarea({ completada: false, descripcion: 'tarea5', 'fechaExpiracion': new Date })
todo.getMisTareas();

let mistareas = todo.getMisTareas()

todo.cambiarEstadoTarea('tarea2', true)

console.log(todo.tareasExpiradas(hoy)) 