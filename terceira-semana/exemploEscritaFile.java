import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class exemploEscritaFile {
  
  private static final String caminhoArquivo = "/path/to/some/file.txt";

  public void escreverConteudoNoArquivo() {
    File meuArquivo = new File(caminhoArquivo);

    FileWriter escritorArquivo = null;
    BufferedWriter bufferedEscritor = null;

    try {
      escritorArquivo = new FileWriter(meuArquivo);
      bufferedEscritor = new BufferedWriter(escritorArquivo);
      bufferedEscritor.flush(); // Obtendo o conteudo do bufferd e escrevendo no arquivo. 

    } catch (IOException e) {
      e.printStackTrace();
    } finally {
      this.fecharObjetos(escritorArquivo, bufferedEscritor);
    }
  }

  private void fecharObjetos(FileWriter escritorArquivo, BufferedWriter bufferedEscritor) {
    try {
      escritorArquivo.close();
      bufferedEscritor.close();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
       
}
