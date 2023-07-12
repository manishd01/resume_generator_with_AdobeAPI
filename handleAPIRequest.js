///Adobe document generration API request and getting pdf as response:
function handleAPIRequestfun(DOC_INPUT, JSON_INPUT) {
  const PDFServicesSdk = require("@adobe/pdfservices-node-sdk");
  const fs = require("fs");
  const OUTPUT = "./Output_PDFs/outputp.pdf";
  const credentials =
    PDFServicesSdk.Credentials.servicePrincipalCredentialsBuilder()
      .withClientId("25f3171611bf4731ac3d6fca6df4df17")
      .withClientSecret("p8e-N_vQ7wRU4VrD0-qiuCH2JwuMtCv1LTOS")
      .build();

  // Create an ExecutionContext using credentials
  const executionContext =
    li.PDFServicesSdk.ExecutionContext.create(credentials);

  // This creates an instance of the Export operation we're using, as well as specifying output type (DOCX)
  const documentMerge = PDFServicesSdk.DocumentMerge,
    documentMergeOptions = documentMerge.options,
    options = new documentMergeOptions.DocumentMergeOptions(
      JSON_INPUT,
      documentMergeOptions.OutputFormat.PDF
    );

  // Create a new operation instance using the options instance.
  const documentMergeOperation = documentMerge.Operation.createNew(options);

  // Set operation input document template from a source file.
  const input = PDFServicesSdk.FileRef.createFromLocalFile(DOC_INPUT);
  documentMergeOperation.setInput(input);

  // Execute the operation and Save the result to the specified location.
  documentMergeOperation
    .execute(executionContext)
    .then((result) => result.saveAsFile(OUTPUT))
    .catch((err) => {
      if (
        err instanceof PDFServicesSdk.Error.ServiceApiError ||
        err instanceof PDFServicesSdk.Error.ServiceUsageError
      ) {
        console.log("Exception encountered while executing operation", err);
      } else {
        console.log("Exception encountered while executing operation", err);
      }
    });
  // return OUTPUT;
  //downloading output file
  saveAs(blob, "./output.pdf");
}
exports.handleAPIRequestfun = handleAPIRequestfun; //exporting funciton
