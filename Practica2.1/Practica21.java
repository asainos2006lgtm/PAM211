public class Practica21 {
	
	public static int sumaSinEsquinas(int[][] matriz) {
		int n = matriz.length;
		int m = matriz[0].length;
		int suma = 0;
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < m; j++) {

				if (!((i == 0 && j == 0) || (i == 0 && j == m-1) ||
					(i == n-1 && j == 0) || (i == n-1 && j == m-1))) {
					suma += matriz[i][j];
				}
				
			}
		}
		return suma;
	}

	public static void main(String[] args) {
		int[][] matriz = {
			{2, 4, 5, 6},
			{8, 9, 10, 12},
			{12, 13, 15, 17},
			{18, 19, 21, 22}
		};
		int resultado = sumaSinEsquinas(matriz);
		System.out.println("Suma sin esquinas: " + resultado);
	}
}
