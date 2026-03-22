// types.ts

enum Environment {
  LOCAL = 'local',
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

enum TerraformBackendType {
  LOCAL = 'local',
  S3 = 's3',
  GCS = 'gcs',
  AFS = 'afs',
  AZURE_RBS = 'azurerm',
  ACSI = 'aci',
  HTTP = 'http',
  HTTPS = 'https',
}

class TerraformBackendConfig {
  constructor(
    public type: TerraformBackendType,
    public bucket: string,
    public key: string,
    public region: string,
    public endpoint: string,
    public skip_credentials_validation: boolean,
    public skip_region_validation: boolean,
    public force: boolean
  ) {}
}

class TerraformProviderConfig {
  constructor(
    public region: string,
    public access_key: string,
    public secret_key: string,
    public skip_credentials_validation: boolean,
    public skip_requesting_credentials: boolean,
    public skip_region_validation: boolean,
    public force: boolean
  ) {}
}

type TerraformConfig = {
  backend: TerraformBackendConfig;
  provider: TerraformProviderConfig;
};

type Env = {
  environment: Environment;
  config: TerraformConfig;
};