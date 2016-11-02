/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * Account
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SonomaClient.
 */
export interface Account {

    /**
     * Returns the user profile data
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getUserProfile(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    getUserProfile(callback: ServiceCallback<any>): void;

    /**
     * Updates the user profile and returns the updated user data
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.displayName] The full name of the user. Might for
     * example be first and last name
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    updateUserProfile(options: { displayName? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    updateUserProfile(callback: ServiceCallback<any>): void;

    /**
     * Returns a list of apps
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getApps(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    getApps(callback: ServiceCallback<any>): void;

    /**
     * Delete the api_token object with the specific id
     *
     * @param {string} apiTokenId The unique ID (UUID) of the api token
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteApiToken(apiTokenId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    deleteApiToken(apiTokenId: string, callback: ServiceCallback<any>): void;

    /**
     * Creates a new API token
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.description] The description of the token
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createApiToken(options: { description? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    createApiToken(callback: ServiceCallback<any>): void;
}

/**
 * @class
 * Apps
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SonomaClient.
 */
export interface Apps {

    /**
     * Gets the Xcode versions available to this app
     *
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getXCodeVersion(ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    getXCodeVersion(ownerName: string, appName: string, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * Temp
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SonomaClient.
 */
export interface Temp {

    /**
     * Returns a one-time websocket URL
     *
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postWebsocket(ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    postWebsocket(ownerName: string, appName: string, callback: ServiceCallback<any>): void;

    /**
     * Gets the repositories available from the source code host
     *
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.form] The selected form of the object. Possible
     * values include: 'lite', 'full'
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getRepositories(ownerName: string, appName: string, options: { form? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    getRepositories(ownerName: string, appName: string, callback: ServiceCallback<any>): void;

    /**
     * Returns the repository build configuration status of the app
     *
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getRepoConfig(ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    getRepoConfig(ownerName: string, appName: string, callback: ServiceCallback<any>): void;

    /**
     * Configures the repository for build
     *
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {string} repoUrl The repository url
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postRepoConfig(ownerName: string, appName: string, repoUrl: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    postRepoConfig(ownerName: string, appName: string, repoUrl: string, callback: ServiceCallback<any>): void;

    /**
     * Removes the configuration for the respository
     *
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    delteRepoConfig(ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    delteRepoConfig(ownerName: string, appName: string, callback: ServiceCallback<any>): void;

    /**
     * Updates a package.
     *
     * @param {string} packageId The ID of the package
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.status] The package state.<br>
     * <b>available</b>: The uploaded package has been distributed.<br>
     * <b>unavailable</b>: The uploaded package is not visible to the user. <br>
     * . Possible values include: 'available', 'unavailable'
     * 
     * @param {string} [options.releaseNotes] Release notes for this package.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    patchPackageInfo(packageId: string, ownerName: string, appName: string, options: { status? : string, releaseNotes? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    patchPackageInfo(packageId: string, ownerName: string, appName: string, callback: ServiceCallback<any>): void;

    /**
     * Return detailed information about available packages.
     *
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.filter] An OData style filter. Currently only
     * support the 'eq' comparision type. E.g. ?$filter=status eq 'Availabe'
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getPackages(ownerName: string, appName: string, options: { filter? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.PackageDetails[]>): void;
    getPackages(ownerName: string, appName: string, callback: ServiceCallback<models.PackageDetails[]>): void;

    /**
     * Commits or aborts the upload process for a package for the specified
     * application
     *
     * @param {string} uploadId The ID of the upload
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {string} status The desired operation for the upload. Possible
     * values include: 'committed', 'aborted'
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    patchUpload(uploadId: string, ownerName: string, appName: string, status: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    patchUpload(uploadId: string, ownerName: string, appName: string, status: string, callback: ServiceCallback<any>): void;

    /**
     * Begins the upload process for a new package for the specified application
     *
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postPackageUploads(ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    postPackageUploads(ownerName: string, appName: string, callback: ServiceCallback<any>): void;

    /**
     * Returns commit information for a batch of shas
     *
     * @param {string} shaCollection A collection of commit SHAs comma-delimited
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.form] The selected form of the object. Possible
     * values include: 'lite', 'full'
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getBatch(shaCollection: string, ownerName: string, appName: string, options: { form? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Branch[]>): void;
    getBatch(shaCollection: string, ownerName: string, appName: string, callback: ServiceCallback<models.Branch[]>): void;

    /**
     * Gets the download URI
     *
     * @param {number} buildId The build ID
     * 
     * @param {string} downloadType The download type. Possible values include:
     * 'build', 'symbols', 'logs'
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDownloads(buildId: number, downloadType: string, ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    getDownloads(buildId: number, downloadType: string, ownerName: string, appName: string, callback: ServiceCallback<void>): void;

    /**
     * Returns the build detail for the given build ID
     *
     * @param {number} buildId The build ID
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getBuild(buildId: number, ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Build>): void;
    getBuild(buildId: number, ownerName: string, appName: string, callback: ServiceCallback<models.Build>): void;

    /**
     * Updates the build properties
     *
     * @param {number} buildId The build ID
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.status] The build status
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    patchBuild(buildId: number, ownerName: string, appName: string, options: { status? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Build>): void;
    patchBuild(buildId: number, ownerName: string, appName: string, callback: ServiceCallback<models.Build>): void;

    /**
     * Returns the projects in the repository for the branch, for all toolsets
     *
     * @param {string} branch The branch name
     * 
     * @param {string} platform The desired platform for the project scan;
     * normally the same as the app platform. Possible values include: 'iOS',
     * 'Android'
     * 
     * @param {string} language The desired language for the project scan;
     * normally the same as the app language. Possible values include:
     * 'objective-c', 'swift', 'javascript', 'c#', 'java'
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getTollsetProjects(branch: string, platform: string, language: string, ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ToolsetProjects>): void;
    getTollsetProjects(branch: string, platform: string, language: string, ownerName: string, appName: string, callback: ServiceCallback<models.ToolsetProjects>): void;

    /**
     * Returns the projects for the branch (deprecated, use toolset_projects
     * instead)
     *
     * @param {string} branch The branch name
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getProjects(branch: string, ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Project[]>): void;
    getProjects(branch: string, ownerName: string, appName: string, callback: ServiceCallback<models.Project[]>): void;

    /**
     * Gets the branch configuration
     *
     * @param {string} branch The branch name
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getBranchConfig(branch: string, ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    getBranchConfig(branch: string, ownerName: string, appName: string, callback: ServiceCallback<any>): void;

    /**
     * Configures the branch for build
     *
     * @param {string} branch The branch name
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postBranchConfig(branch: string, ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.BranchConfiguration>): void;
    postBranchConfig(branch: string, ownerName: string, appName: string, callback: ServiceCallback<models.BranchConfiguration>): void;

    /**
     * Reconfigures the branch for build
     *
     * @param {string} branch The branch name
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putBranchConfig(branch: string, ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.BranchConfiguration>): void;
    putBranchConfig(branch: string, ownerName: string, appName: string, callback: ServiceCallback<models.BranchConfiguration>): void;

    /**
     * Deletes the branch build configuration
     *
     * @param {string} branch The branch name
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteBranchConfig(branch: string, ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SuccessResponse>): void;
    deleteBranchConfig(branch: string, ownerName: string, appName: string, callback: ServiceCallback<models.SuccessResponse>): void;

    /**
     * Returns the list of builds for the branch
     *
     * @param {string} branch The branch name
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getBranchBuilds(branch: string, ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Build[]>): void;
    getBranchBuilds(branch: string, ownerName: string, appName: string, callback: ServiceCallback<models.Build[]>): void;

    /**
     * Create a build
     *
     * @param {string} branch The branch name
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {boolean} [options.debug] Run build in debug mode
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    postBranchBuild(branch: string, ownerName: string, appName: string, options: { debug? : boolean, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Build[]>): void;
    postBranchBuild(branch: string, ownerName: string, appName: string, callback: ServiceCallback<models.Build[]>): void;

    /**
     * Returns the list of Git branches for this application
     *
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getBranches(ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    getBranches(ownerName: string, appName: string, callback: ServiceCallback<any>): void;
}

/**
 * @class
 * Test
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SonomaClient.
 */
export interface Test {

    /**
     * Returns list of all test runs for a given test series
     *
     * @param {string} testSeriesSlug The slug of the test series
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getAllTestRunsForSeries(testSeriesSlug: string, ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TestRun[]>): void;
    getAllTestRunsForSeries(testSeriesSlug: string, ownerName: string, appName: string, callback: ServiceCallback<models.TestRun[]>): void;

    /**
     * Deletes a single test series
     *
     * @param {string} testSeriesSlug The slug of the test series
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteTestSeries(testSeriesSlug: string, ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteTestSeries(testSeriesSlug: string, ownerName: string, appName: string, callback: ServiceCallback<void>): void;

    /**
     * Updates name and slug of a test series
     *
     * @param {string} testSeriesSlug The slug of the test series
     * 
     * @param {string} name New name of the new test series
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    patchTestSeries(testSeriesSlug: string, name: string, ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TestSeries>): void;
    patchTestSeries(testSeriesSlug: string, name: string, ownerName: string, appName: string, callback: ServiceCallback<models.TestSeries>): void;

    /**
     * Returns list of all test series for an application
     *
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getAllTestSeries(ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TestSeries[]>): void;
    getAllTestSeries(ownerName: string, appName: string, callback: ServiceCallback<models.TestSeries[]>): void;

    /**
     * Creates new test series for an application
     *
     * @param {string} name Name of the new test series
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createTestSeries(name: string, ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
    createTestSeries(name: string, ownerName: string, appName: string, callback: ServiceCallback<any>): void;

    /**
     * Gets state of the test run
     *
     * @param {string} testRunId The ID of the test run
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getTestRunState(testRunId: string, ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TestRunState>): void;
    getTestRunState(testRunId: string, ownerName: string, appName: string, callback: ServiceCallback<models.TestRunState>): void;

    /**
     * Starts test run
     *
     * @param {string} testRunId The ID of the test run
     * 
     * @param {object} startOptions Option required to start the test run
     * 
     * @param {string} startOptions.testFramework Test framework used by tests.
     * 
     * @param {string} startOptions.deviceSelection Device selection string.
     * 
     * @param {string} [startOptions.locale] Locale that should be used to run
     * tests.
     * 
     * @param {string} [startOptions.testSeries] Name of the test series.
     * 
     * @param {object} [startOptions.testParameters] A JSON dictionary with
     * additional test parameters
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    startTestRun(testRunId: string, startOptions: models.TestCloudStartTestRunOptions, ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TestCloudStartTestRunResult>): void;
    startTestRun(testRunId: string, startOptions: models.TestCloudStartTestRunOptions, ownerName: string, appName: string, callback: ServiceCallback<models.TestCloudStartTestRunResult>): void;

    /**
     * Adds file with the given hash to a test run
     *
     * @param {string} testRunId The ID of the test run
     * 
     * @param {object} fileInfo File hash information
     * 
     * @param {string} fileInfo.fileType Type of the file. Possible values
     * include: 'dsym-file', 'app-file', 'test-file'
     * 
     * @param {string} fileInfo.checksum SHA256 hash of the file
     * 
     * @param {string} fileInfo.relativePath Relative path of the file
     * 
     * @param {string} [fileInfo.byteRange] Range of bytes required to verify
     * ownership of the file
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    uploadHash(testRunId: string, fileInfo: models.TestCloudFileHash, ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    uploadHash(testRunId: string, fileInfo: models.TestCloudFileHash, ownerName: string, appName: string, callback: ServiceCallback<void>): void;

    /**
     * Uploads file for a test run
     *
     * @param {string} testRunId The ID of the test run
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    startUploadingFile(testRunId: string, ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    startUploadingFile(testRunId: string, ownerName: string, appName: string, callback: ServiceCallback<void>): void;

    /**
     * Returns a single test runs
     *
     * @param {uuid} testRunId The ID of the test run
     * 
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getTestRun(testRunId: string, ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TestRun>): void;
    getTestRun(testRunId: string, ownerName: string, appName: string, callback: ServiceCallback<models.TestRun>): void;

    /**
     * Returns a list of test runs
     *
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getTestRuns(ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TestRun[]>): void;
    getTestRuns(ownerName: string, appName: string, callback: ServiceCallback<models.TestRun[]>): void;

    /**
     * Creates a new test run
     *
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createTestRun(ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    createTestRun(ownerName: string, appName: string, callback: ServiceCallback<void>): void;
}

/**
 * @class
 * Tests
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SonomaClient.
 */
export interface Tests {

    /**
     * Returns a list of available devices
     *
     * @param {string} ownerName The name of the owner
     * 
     * @param {string} appName The name of the application
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getDeviceConfigurations(ownerName: string, appName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DeviceConfiguration[]>): void;
    getDeviceConfigurations(ownerName: string, appName: string, callback: ServiceCallback<models.DeviceConfiguration[]>): void;
}
