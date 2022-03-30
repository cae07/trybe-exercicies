import java.io.File;

public class trybe {
  
  /** Método de exemplo */
  public void metodoExemplo() {
    File meuFile = new File("/path/to/some/file.txt");

    boolean arquivoExiste = meuFile.exists();
    boolean podeExecutar = meuFile.canExecute();
    boolean podeLer = meuFile.canRead();
    boolean podeEscrever = meuFile.canWrite();
    boolean deletou = meuFile.delete(); // DELETA O ARQUIVO 
  }
}
