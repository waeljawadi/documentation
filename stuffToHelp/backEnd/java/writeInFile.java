public class DemoApplication {
    public static void main(String[] args) throws IOException {
        SpringApplication.run(DemoApplication.class, args);
        String thing = "T!!!!!!!!!!";
        writeInfile("/json/","/products.json",thing);
    }
    public static void writeInfile(String subDirectory,String file,String WhatToWrite) throws FileNotFoundException {
        String dir = DemoApplication.class.getResource(subDirectory).getFile();
        OutputStream os = new FileOutputStream(dir + file);
        final PrintStream printStream = new PrintStream(os);
        printStream.println(WhatToWrite);
        printStream.close();
    }
}
