public List<ServiceProvider> readAndExtract(String path) throws Exception {
        JSONParser parser = new JSONParser();
        // Resource resource = new ClassPathResource(path);
        InputStream inputStream = getClass().getClassLoader().getResourceAsStream(path);
        // File file = inputStream.getFile();
        // Get json content as an Object
        Object obj = parser.parse(readFromInputStream(inputStream));
        // Cast the Object to Json Array
        org.json.simple.JSONArray arrayOfServiceProvider = (org.json.simple.JSONArray) obj;
        ObjectMapper mapper = new ObjectMapper();
        // Solving error when parsing | can't map attribute of type "instant"
        mapper.registerModule(new JavaTimeModule());
        // Ignore null Attribute
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        // Convert Json Array to String
        String jsonString = mapper.writeValueAsString(arrayOfServiceProvider.stream().toArray());
        // convert the string to a list of Products
        List<ServiceProvider> serviceProviders = Arrays.asList(mapper.readValue(jsonString, ServiceProvider[].class));
        return serviceProviders;
    }
