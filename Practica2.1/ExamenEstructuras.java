public class ExamenEstructuras {

public static boolean verificarPareja(int[][] m) {
    for (int i = 0; i < m.length; i++) {
        for (int j = 0; j < m[i].length; j++) {
           if (m[i][j] == m[i][j])
                   return true; 
           }
       }
    return false;
}

 public static void main(String[] args) {
        // Matriz m1 del examen
        int[][] m1 = {
            {4, 5, 6, 7},
            {3, 0, 17, 8},  // Tiene dos 8 (posición [1][2] y [1][3])
            {0, 1, 2, 10},  // Tiene tres 2
            {88, 87, 30, 54}
        };
        
        boolean resultado = verificarPareja(m1);
        System.out.println("¿La matriz contiene parejas de números iguales? " + resultado);
        // Esto imprimirá: true
    }
}
