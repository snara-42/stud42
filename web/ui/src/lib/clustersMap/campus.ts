import { ICampus, ICluster } from './types';

/**
 * Campus class represents a campus in the cluster map. It contains the
 * campus name, emoji, extractor function, and the list of clusters.
 */
export class Campus implements Pick<ICampus, 'clusters'> {
  /**
   * List of clusters for this campus
   */
  clusters(): ICluster[] {
    throw new Error('Method not implemented.');
  }

  /**
   * Find a cluster by its identifier (e.g. "c1").
   * Returns undefined if not found. Otherwise, returns the cluster.
   */
  cluster(identifier: string): ICluster | undefined {
    return this.clusters().find(
      (cluster) => cluster.identifier() === identifier
    );
  }
}