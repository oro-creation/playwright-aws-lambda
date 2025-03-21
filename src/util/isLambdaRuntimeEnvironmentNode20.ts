export default function isLambdaRuntimeEnvironmentNode20(): boolean {
  return ['AWS_Lambda_nodejs20.x', 'AWS_Lambda_nodejs22.x'].includes(
    process.env.AWS_EXECUTION_ENV as string
  );
}
