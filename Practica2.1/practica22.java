public class practica22 {
	public static int[][] matrizInversa(int[][] matriz) {
		int n = matriz.length;
		int m = matriz[0].length;
		int[][] inversa = new int[n][m];
		int total = n * m;
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < m; j++) {
				int pos = total - 1 - (i * m + j);
				int fila = pos / m;
				int col = pos % m;
				inversa[i][j] = matriz[fila][col];
			}
		}
		return inversa;
	}

	public static void imprimirMatriz(int[][] matriz) {
		for (int[] fila : matriz) {
			for (int elem : fila) {
				System.out.print(elem + " ");
			}
			System.out.println();
		}
	}

	public static void main(String[] args) {
		int[][] matriz = {
			{1, 2, 3, 4},
			{5, 6, 7, 8},
			{9, 10, 11, 12},
			{13, 14, 15, 16}
		};
		System.out.println("Matriz original:");
		imprimirMatriz(matriz);
		int[][] inversa = matrizInversa(matriz);
		System.out.println("Matriz inversa:");
		imprimirMatriz(inversa);
	}
}
