import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import javax.annotation.processing.Filer;

public class exemploLeituraFile {
  private static final String caminhoArquivo = "/path/to/some/file.txt";

  public void lerConteudoDoArquivo() {
    File meuArquivo = new File(caminhoArquivo);
    FileReader leitorArquivo = null;
    BufferedReader bufferedLeitor = null;

    if (meuArquivo.exists()) {
      try {
        leitorArquivo = new FileReader(meuArquivo);
        bufferedLeitor = new BufferedReader(leitorArquivo);

        String conteudoLinha = bufferedLeitor.readLine();

        while(conteudoLinha != null) {
          System.out.println(conteudoLinha);
          conteudoLinha = bufferedLeitor.readLine();
        }

      } catch (IOException e) {
        e.printStackTrace();
      } finally {
        this.fecharObjetos(leitorArquivo, bufferedLeitor);
      }
    }
  }

  private void fecharObjetos(FileReader fileReader, BufferedReader bufferedReader) {
    try {
      fileReader.close();
      bufferedReader.close();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
