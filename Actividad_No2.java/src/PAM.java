import java.util.Scanner;

class inicioPAM  {
    public String ReglamentoPOO() {
        return "=======REGLAMENTO POO========\n"
            + "1. Respeto\n"
            + "2. Importante la participacion activa  en orden\n"
            + "3. No entregar trabajos incompletos\n"
            + "4. No se aceptan exames fuera de tiempo\n"
            + "5. Plagio de trabajos = 0 para todos\n"
            + "6. 3 faltas = Fianl de parcial\n"
            + "7. Califocacion maxima en final es de 8";
    }

    public String LineamientosDeClassroom() {
        return "=======LINEAMENTOS DE CLASSROOM=========\n"
            + "1. Esntregar los trabajos para su revision\n"
            + "2. Entregar en PDF\n"
            + "3. Aviso de clases\n"
            + "4. Entregas autorizadas con rtetraso, calificacion maxima 5";
    }

    public String FechasParciales() {
        return "=======FECHAS PARCIALES=======\n"
            + "1. Primer parcial: 29 de Septiembre de 2025\n"
            + "2. Segundo parcial: 03 de Noviembre de 2025\n"
            + "3. Tercer parcial: 01 de Diciembre de 2025\n"
            + "4. Examen final: 08 de Diciembre de 2025";
    }

    public String PorcenyajesParciales() {
        return "========PORCENTAJES PARCIALES========\n"
            + "1. Primer parcial:    Evidencia de conocimiento 40%\n"
            + "                      Evidencia de desempeño 20%\n"
            + "                      Evidencia de producto 30%\n"
            + "                      Proyecto integrador 10%\n"

            + "2. Segundo parcial:   Evidencia de conocimiento 40%\n"
            + "                      Evidencia de desempeño 20%\n"
            + "                      Evidencia de producto 20%\n"
            + "                      Proyecto integrador 20%\n"

            + "3. Tercer parcial:  Evidencia de conocimiento 20%\n"
            + "                      Evidencia de desempeño 10%\n"
            + "                      Evidencia de producto 40%\n"
            + "                      Proyecto integrador 30%\n";
    }


}

public class PAM {
    public static void main(String[] args) {
        inicioPAM inicio = new inicioPAM();
        Scanner scanner = new Scanner(System.in);
        int opcion;

        do {
            System.out.println("Menu de opciones:");
            System.out.println("1. Reglamento POO");
            System.out.println("2. Lineamientos de Classroom");
            System.out.println("3. Fechas de parciales");
            System.out.println("4. Porcentajes de parciales");
            System.out.println("5. Salir");
            System.out.print("Seleccione una opcion (1-5): \n");
            opcion = scanner.nextInt();

            switch (opcion) {
                case 1:
                    System.out.println(inicio.ReglamentoPOO());
                    break;
                case 2:
                    System.out.println(inicio.LineamientosDeClassroom());
                    break;
                case 3:
                    System.out.println(inicio.FechasParciales());
                    break;
                case 4:
                    System.out.println(inicio.PorcenyajesParciales());
                    break;
                case 5:
                    System.out.println("Saliendo del programa...");
                    break;
                default:
                    System.out.println("Opcion invalida. Por favor, intente de nuevo.");
            }
            System.out.println();
        } while (opcion != 5);

        scanner.close();
    }

    
}