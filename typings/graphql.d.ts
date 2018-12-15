export interface SitePageConnectionSort {
  fields: (SitePageConnectionSortByFieldsEnum | null)[];

  order?: SitePageConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterSitePage {
  jsonName?: SitePageConnectionJsonNameQueryString | null;

  internalComponentName?: SitePageConnectionInternalComponentNameQueryString | null;

  path?: SitePageConnectionPathQueryString_2 | null;

  component?: SitePageConnectionComponentQueryString | null;

  componentChunkName?: SitePageConnectionComponentChunkNameQueryString | null;

  pluginCreator?: SitePageConnectionPluginCreatorInputObject | null;

  pluginCreatorId?: SitePageConnectionPluginCreatorIdQueryString_2 | null;

  componentPath?: SitePageConnectionComponentPathQueryString | null;

  id?: SitePageConnectionIdQueryString_2 | null;

  internal?: SitePageConnectionInternalInputObject_2 | null;
}

export interface SitePageConnectionJsonNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalComponentNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionComponentQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionComponentChunkNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorInputObject {
  resolve?: SitePageConnectionPluginCreatorResolveQueryString | null;

  id?: SitePageConnectionPluginCreatorIdQueryString | null;

  name?: SitePageConnectionPluginCreatorNameQueryString | null;

  version?: SitePageConnectionPluginCreatorVersionQueryString | null;

  pluginOptions?: SitePageConnectionPluginCreatorPluginOptionsInputObject | null;

  nodeAPIs?: SitePageConnectionPluginCreatorNodeApIsQueryList | null;

  pluginFilepath?: SitePageConnectionPluginCreatorPluginFilepathQueryString | null;

  packageJson?: SitePageConnectionPluginCreatorPackageJsonInputObject | null;

  parent?: SitePageConnectionPluginCreatorParentQueryString | null;

  internal?: SitePageConnectionPluginCreatorInternalInputObject | null;
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorIdQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
  path?: SitePageConnectionPluginCreatorPluginOptionsPathQueryString | null;

  name?: SitePageConnectionPluginCreatorPluginOptionsNameQueryString | null;

  pathCheck?: SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: (boolean | null)[] | null;

  nin?: (boolean | null)[] | null;
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonNameQueryString | null;

  description?: SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString | null;

  version?: SitePageConnectionPluginCreatorPackageJsonVersionQueryString | null;

  main?: SitePageConnectionPluginCreatorPackageJsonMainQueryString | null;

  license?: SitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null;

  dependencies?: SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList | null;

  devDependencies?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null;

  peerDependencies?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList | null;

  keywords?: SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString | null;

  version?: SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString | null;

  version?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null;

  version?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorParentQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: SitePageConnectionPluginCreatorInternalContentDigestQueryString | null;

  type?: SitePageConnectionPluginCreatorInternalTypeQueryString | null;

  owner?: SitePageConnectionPluginCreatorInternalOwnerQueryString | null;
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionComponentPathQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalInputObject_2 {
  type?: SitePageConnectionInternalTypeQueryString_2 | null;

  contentDigest?: SitePageConnectionInternalContentDigestQueryString_2 | null;

  description?: SitePageConnectionInternalDescriptionQueryString | null;

  owner?: SitePageConnectionInternalOwnerQueryString_2 | null;
}

export interface SitePageConnectionInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalDescriptionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionSort {
  fields: (SitePluginConnectionSortByFieldsEnum | null)[];

  order?: SitePluginConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
  resolve?: SitePluginConnectionResolveQueryString_2 | null;

  id?: SitePluginConnectionIdQueryString_2 | null;

  name?: SitePluginConnectionNameQueryString_2 | null;

  version?: SitePluginConnectionVersionQueryString_2 | null;

  pluginOptions?: SitePluginConnectionPluginOptionsInputObject_2 | null;

  nodeAPIs?: SitePluginConnectionNodeApIsQueryList_2 | null;

  pluginFilepath?: SitePluginConnectionPluginFilepathQueryString_2 | null;

  packageJson?: SitePluginConnectionPackageJsonInputObject_2 | null;

  internal?: SitePluginConnectionInternalInputObject_2 | null;
}

export interface SitePluginConnectionResolveQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
  path?: SitePluginConnectionPluginOptionsPathQueryString_2 | null;

  name?: SitePluginConnectionPluginOptionsNameQueryString_2 | null;

  pathCheck?: SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: (boolean | null)[] | null;

  nin?: (boolean | null)[] | null;
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
  name?: SitePluginConnectionPackageJsonNameQueryString_2 | null;

  description?: SitePluginConnectionPackageJsonDescriptionQueryString_2 | null;

  version?: SitePluginConnectionPackageJsonVersionQueryString_2 | null;

  main?: SitePluginConnectionPackageJsonMainQueryString_2 | null;

  license?: SitePluginConnectionPackageJsonLicenseQueryString_2 | null;

  dependencies?: SitePluginConnectionPackageJsonDependenciesQueryList_2 | null;

  devDependencies?: SitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null;

  peerDependencies?: SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null;

  keywords?: SitePluginConnectionPackageJsonKeywordsQueryList_2 | null;
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonDependenciesInputObject_2 | null;
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null;

  version?: SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonDevDependenciesInputObject_2 | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null;

  version?: SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null;

  version?: SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionInternalInputObject_2 {
  contentDigest?: SitePluginConnectionInternalContentDigestQueryString_2 | null;

  type?: SitePluginConnectionInternalTypeQueryString_2 | null;

  owner?: SitePluginConnectionInternalOwnerQueryString_2 | null;
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionSort {
  fields: (DirectoryConnectionSortByFieldsEnum | null)[];

  order?: DirectoryConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterDirectory {
  id?: DirectoryConnectionIdQueryString_2 | null;

  internal?: DirectoryConnectionInternalInputObject_2 | null;

  sourceInstanceName?: DirectoryConnectionSourceInstanceNameQueryString_2 | null;

  absolutePath?: DirectoryConnectionAbsolutePathQueryString_2 | null;

  relativePath?: DirectoryConnectionRelativePathQueryString_2 | null;

  extension?: DirectoryConnectionExtensionQueryString_2 | null;

  size?: DirectoryConnectionSizeQueryInteger_2 | null;

  prettySize?: DirectoryConnectionPrettySizeQueryString_2 | null;

  modifiedTime?: DirectoryConnectionModifiedTimeQueryString_2 | null;

  accessTime?: DirectoryConnectionAccessTimeQueryString_2 | null;

  changeTime?: DirectoryConnectionChangeTimeQueryString_2 | null;

  birthTime?: DirectoryConnectionBirthTimeQueryString_2 | null;

  root?: DirectoryConnectionRootQueryString_2 | null;

  dir?: DirectoryConnectionDirQueryString_2 | null;

  base?: DirectoryConnectionBaseQueryString_2 | null;

  ext?: DirectoryConnectionExtQueryString_2 | null;

  name?: DirectoryConnectionNameQueryString_2 | null;

  relativeDirectory?: DirectoryConnectionRelativeDirectoryQueryString_2 | null;

  dev?: DirectoryConnectionDevQueryInteger_2 | null;

  mode?: DirectoryConnectionModeQueryInteger_2 | null;

  nlink?: DirectoryConnectionNlinkQueryInteger_2 | null;

  uid?: DirectoryConnectionUidQueryInteger_2 | null;

  gid?: DirectoryConnectionGidQueryInteger_2 | null;

  rdev?: DirectoryConnectionRdevQueryInteger_2 | null;

  blksize?: DirectoryConnectionBlksizeQueryInteger_2 | null;

  ino?: DirectoryConnectionInoQueryInteger_2 | null;

  blocks?: DirectoryConnectionBlocksQueryInteger_2 | null;

  atimeMs?: DirectoryConnectionAtimeMsQueryFloat_2 | null;

  mtimeMs?: DirectoryConnectionMtimeMsQueryFloat_2 | null;

  ctimeMs?: DirectoryConnectionCtimeMsQueryFloat_2 | null;

  birthtimeMs?: DirectoryConnectionBirthtimeMsQueryFloat_2 | null;

  atime?: DirectoryConnectionAtimeQueryString_2 | null;

  mtime?: DirectoryConnectionMtimeQueryString_2 | null;

  ctime?: DirectoryConnectionCtimeQueryString_2 | null;

  birthtime?: DirectoryConnectionBirthtimeQueryString_2 | null;
}

export interface DirectoryConnectionIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionInternalInputObject_2 {
  contentDigest?: DirectoryConnectionInternalContentDigestQueryString_2 | null;

  type?: DirectoryConnectionInternalTypeQueryString_2 | null;

  description?: DirectoryConnectionInternalDescriptionQueryString_2 | null;

  owner?: DirectoryConnectionInternalOwnerQueryString_2 | null;
}

export interface DirectoryConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionInternalDescriptionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionAbsolutePathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionRelativePathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionExtensionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionSizeQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryConnectionPrettySizeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionModifiedTimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionAccessTimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionChangeTimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionBirthTimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionRootQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionDirQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionBaseQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionExtQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionDevQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryConnectionModeQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryConnectionNlinkQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryConnectionUidQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryConnectionGidQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryConnectionRdevQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryConnectionBlksizeQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryConnectionInoQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryConnectionBlocksQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryConnectionAtimeMsQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryConnectionMtimeMsQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryConnectionCtimeMsQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryConnectionBirthtimeMsQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryConnectionAtimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionMtimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionCtimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryConnectionBirthtimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionSort {
  fields: (FileConnectionSortByFieldsEnum | null)[];

  order?: FileConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterFile {
  id?: FileConnectionIdQueryString_2 | null;

  internal?: FileConnectionInternalInputObject_2 | null;

  sourceInstanceName?: FileConnectionSourceInstanceNameQueryString_2 | null;

  absolutePath?: FileConnectionAbsolutePathQueryString_2 | null;

  relativePath?: FileConnectionRelativePathQueryString_2 | null;

  extension?: FileConnectionExtensionQueryString_2 | null;

  size?: FileConnectionSizeQueryInteger_2 | null;

  prettySize?: FileConnectionPrettySizeQueryString_2 | null;

  modifiedTime?: FileConnectionModifiedTimeQueryString_2 | null;

  accessTime?: FileConnectionAccessTimeQueryString_2 | null;

  changeTime?: FileConnectionChangeTimeQueryString_2 | null;

  birthTime?: FileConnectionBirthTimeQueryString_2 | null;

  root?: FileConnectionRootQueryString_2 | null;

  dir?: FileConnectionDirQueryString_2 | null;

  base?: FileConnectionBaseQueryString_2 | null;

  ext?: FileConnectionExtQueryString_2 | null;

  name?: FileConnectionNameQueryString_2 | null;

  relativeDirectory?: FileConnectionRelativeDirectoryQueryString_2 | null;

  dev?: FileConnectionDevQueryInteger_2 | null;

  mode?: FileConnectionModeQueryInteger_2 | null;

  nlink?: FileConnectionNlinkQueryInteger_2 | null;

  uid?: FileConnectionUidQueryInteger_2 | null;

  gid?: FileConnectionGidQueryInteger_2 | null;

  rdev?: FileConnectionRdevQueryInteger_2 | null;

  blksize?: FileConnectionBlksizeQueryInteger_2 | null;

  ino?: FileConnectionInoQueryInteger_2 | null;

  blocks?: FileConnectionBlocksQueryInteger_2 | null;

  atimeMs?: FileConnectionAtimeMsQueryFloat_2 | null;

  mtimeMs?: FileConnectionMtimeMsQueryFloat_2 | null;

  ctimeMs?: FileConnectionCtimeMsQueryFloat_2 | null;

  birthtimeMs?: FileConnectionBirthtimeMsQueryFloat_2 | null;

  atime?: FileConnectionAtimeQueryString_2 | null;

  mtime?: FileConnectionMtimeQueryString_2 | null;

  ctime?: FileConnectionCtimeQueryString_2 | null;

  birthtime?: FileConnectionBirthtimeQueryString_2 | null;

  publicURL?: PublicUrlQueryString_4 | null;
}

export interface FileConnectionIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionInternalInputObject_2 {
  contentDigest?: FileConnectionInternalContentDigestQueryString_2 | null;

  type?: FileConnectionInternalTypeQueryString_2 | null;

  mediaType?: FileConnectionInternalMediaTypeQueryString_2 | null;

  description?: FileConnectionInternalDescriptionQueryString_2 | null;

  owner?: FileConnectionInternalOwnerQueryString_2 | null;
}

export interface FileConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionInternalMediaTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionInternalDescriptionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionAbsolutePathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionRelativePathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionExtensionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionSizeQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileConnectionPrettySizeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionModifiedTimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionAccessTimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionChangeTimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionBirthTimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionRootQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionDirQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionBaseQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionExtQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionDevQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileConnectionModeQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileConnectionNlinkQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileConnectionUidQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileConnectionGidQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileConnectionRdevQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileConnectionBlksizeQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileConnectionInoQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileConnectionBlocksQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileConnectionAtimeMsQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileConnectionMtimeMsQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileConnectionCtimeMsQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileConnectionBirthtimeMsQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileConnectionAtimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionMtimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionCtimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileConnectionBirthtimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface PublicUrlQueryString_4 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionSort {
  fields: (MarkdownRemarkConnectionSortByFieldsEnum | null)[];

  order?: MarkdownRemarkConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface FilterMarkdownRemark {
  id?: MarkdownRemarkConnectionIdQueryString_2 | null;

  internal?: MarkdownRemarkConnectionInternalInputObject_2 | null;

  frontmatter?: MarkdownRemarkConnectionFrontmatterInputObject_2 | null;

  excerpt?: ExcerptQueryString_4 | null;

  rawMarkdownBody?: MarkdownRemarkConnectionRawMarkdownBodyQueryString_2 | null;

  fileAbsolutePath?: MarkdownRemarkConnectionFileAbsolutePathQueryString_2 | null;

  html?: HtmlQueryString_4 | null;

  headings?: HeadingsQueryList_4 | null;

  timeToRead?: TimeToReadQueryInt_4 | null;

  tableOfContents?: TableOfContentsQueryString_4 | null;

  wordCount?: WordCountTypeName_4 | null;
}

export interface MarkdownRemarkConnectionIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionInternalInputObject_2 {
  content?: MarkdownRemarkConnectionInternalContentQueryString_2 | null;

  type?: MarkdownRemarkConnectionInternalTypeQueryString_2 | null;

  contentDigest?: MarkdownRemarkConnectionInternalContentDigestQueryString_2 | null;

  owner?: MarkdownRemarkConnectionInternalOwnerQueryString_2 | null;
}

export interface MarkdownRemarkConnectionInternalContentQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionFrontmatterInputObject_2 {
  title?: MarkdownRemarkConnectionFrontmatterTitleQueryString_2 | null;

  date?: MarkdownRemarkConnectionFrontmatterDateQueryString_2 | null;

  slug?: MarkdownRemarkConnectionFrontmatterSlugQueryString_2 | null;

  tags?: MarkdownRemarkConnectionFrontmatterTagsQueryList_2 | null;

  readNext?: MarkdownRemarkConnectionFrontmatterReadNextQueryString_2 | null;

  _PARENT?: MarkdownRemarkConnectionFrontmatterParentQueryString_2 | null;
}

export interface MarkdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionFrontmatterDateQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionFrontmatterSlugQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionFrontmatterTagsQueryList_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionFrontmatterReadNextQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionFrontmatterParentQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ExcerptQueryString_4 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionRawMarkdownBodyQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkConnectionFileAbsolutePathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface HtmlQueryString_4 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface HeadingsQueryList_4 {
  elemMatch?: HeadingsListElemTypeName_4 | null;
}

export interface HeadingsListElemTypeName_4 {
  value?: HeadingsListElemValueQueryString_4 | null;

  depth?: HeadingsListElemDepthQueryInt_4 | null;
}

export interface HeadingsListElemValueQueryString_4 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface HeadingsListElemDepthQueryInt_4 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface TimeToReadQueryInt_4 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface TableOfContentsQueryString_4 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface WordCountTypeName_4 {
  paragraphs?: WordCountParagraphsQueryInt_4 | null;

  sentences?: WordCountSentencesQueryInt_4 | null;

  words?: WordCountWordsQueryInt_4 | null;
}

export interface WordCountParagraphsQueryInt_4 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface WordCountSentencesQueryInt_4 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface WordCountWordsQueryInt_4 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface SitePageJsonNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageInternalComponentNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageComponentQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageComponentChunkNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorInputObject {
  resolve?: SitePagePluginCreatorResolveQueryString | null;

  id?: SitePagePluginCreatorIdQueryString | null;

  name?: SitePagePluginCreatorNameQueryString | null;

  version?: SitePagePluginCreatorVersionQueryString | null;

  pluginOptions?: SitePagePluginCreatorPluginOptionsInputObject | null;

  nodeAPIs?: SitePagePluginCreatorNodeApIsQueryList | null;

  pluginFilepath?: SitePagePluginCreatorPluginFilepathQueryString | null;

  packageJson?: SitePagePluginCreatorPackageJsonInputObject | null;

  parent?: SitePagePluginCreatorParentQueryString | null;

  internal?: SitePagePluginCreatorInternalInputObject | null;
}

export interface SitePagePluginCreatorResolveQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorIdQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
  path?: SitePagePluginCreatorPluginOptionsPathQueryString | null;

  name?: SitePagePluginCreatorPluginOptionsNameQueryString | null;

  pathCheck?: SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: (boolean | null)[] | null;

  nin?: (boolean | null)[] | null;
}

export interface SitePagePluginCreatorNodeApIsQueryList {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonInputObject {
  name?: SitePagePluginCreatorPackageJsonNameQueryString | null;

  description?: SitePagePluginCreatorPackageJsonDescriptionQueryString | null;

  version?: SitePagePluginCreatorPackageJsonVersionQueryString | null;

  main?: SitePagePluginCreatorPackageJsonMainQueryString | null;

  license?: SitePagePluginCreatorPackageJsonLicenseQueryString | null;

  dependencies?: SitePagePluginCreatorPackageJsonDependenciesQueryList | null;

  devDependencies?: SitePagePluginCreatorPackageJsonDevDependenciesQueryList | null;

  peerDependencies?: SitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null;

  keywords?: SitePagePluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonDependenciesInputObject | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonDependenciesNameQueryString | null;

  version?: SitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonDevDependenciesInputObject | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null;

  version?: SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonPeerDependenciesInputObject | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null;

  version?: SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorParentQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorInternalInputObject {
  contentDigest?: SitePagePluginCreatorInternalContentDigestQueryString | null;

  type?: SitePagePluginCreatorInternalTypeQueryString | null;

  owner?: SitePagePluginCreatorInternalOwnerQueryString | null;
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorInternalTypeQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePagePluginCreatorIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageComponentPathQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageInternalInputObject_2 {
  type?: SitePageInternalTypeQueryString_2 | null;

  contentDigest?: SitePageInternalContentDigestQueryString_2 | null;

  description?: SitePageInternalDescriptionQueryString | null;

  owner?: SitePageInternalOwnerQueryString_2 | null;
}

export interface SitePageInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageInternalDescriptionQueryString {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePageInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginResolveQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsInputObject_2 {
  path?: SitePluginPluginOptionsPathQueryString_2 | null;

  name?: SitePluginPluginOptionsNameQueryString_2 | null;

  pathCheck?: SitePluginPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface SitePluginPluginOptionsPathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: (boolean | null)[] | null;

  nin?: (boolean | null)[] | null;
}

export interface SitePluginNodeApIsQueryList_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPluginFilepathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonInputObject_2 {
  name?: SitePluginPackageJsonNameQueryString_2 | null;

  description?: SitePluginPackageJsonDescriptionQueryString_2 | null;

  version?: SitePluginPackageJsonVersionQueryString_2 | null;

  main?: SitePluginPackageJsonMainQueryString_2 | null;

  license?: SitePluginPackageJsonLicenseQueryString_2 | null;

  dependencies?: SitePluginPackageJsonDependenciesQueryList_2 | null;

  devDependencies?: SitePluginPackageJsonDevDependenciesQueryList_2 | null;

  peerDependencies?: SitePluginPackageJsonPeerDependenciesQueryList_2 | null;

  keywords?: SitePluginPackageJsonKeywordsQueryList_2 | null;
}

export interface SitePluginPackageJsonNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonMainQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonDependenciesInputObject_2 | null;
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
  name?: SitePluginPackageJsonDependenciesNameQueryString_2 | null;

  version?: SitePluginPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonDevDependenciesInputObject_2 | null;
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: SitePluginPackageJsonDevDependenciesNameQueryString_2 | null;

  version?: SitePluginPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonPeerDependenciesInputObject_2 | null;
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: SitePluginPackageJsonPeerDependenciesNameQueryString_2 | null;

  version?: SitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginInternalInputObject_2 {
  contentDigest?: SitePluginInternalContentDigestQueryString_2 | null;

  type?: SitePluginInternalTypeQueryString_2 | null;

  owner?: SitePluginInternalOwnerQueryString_2 | null;
}

export interface SitePluginInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePluginInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SiteSiteMetadataInputObject_2 {
  siteName?: SiteSiteMetadataSiteNameQueryString_2 | null;
}

export interface SiteSiteMetadataSiteNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePortQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SiteHostQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePathPrefixQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SitePolyfillQueryBoolean_2 {
  eq?: boolean | null;

  ne?: boolean | null;

  in?: (boolean | null)[] | null;

  nin?: (boolean | null)[] | null;
}

export interface SiteBuildTimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SiteIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SiteInternalInputObject_2 {
  contentDigest?: SiteInternalContentDigestQueryString_2 | null;

  type?: SiteInternalTypeQueryString_2 | null;

  owner?: SiteInternalOwnerQueryString_2 | null;
}

export interface SiteInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SiteInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface SiteInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryInternalInputObject_2 {
  contentDigest?: DirectoryInternalContentDigestQueryString_2 | null;

  type?: DirectoryInternalTypeQueryString_2 | null;

  description?: DirectoryInternalDescriptionQueryString_2 | null;

  owner?: DirectoryInternalOwnerQueryString_2 | null;
}

export interface DirectoryInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryInternalDescriptionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectorySourceInstanceNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryAbsolutePathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryRelativePathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryExtensionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectorySizeQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryPrettySizeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryModifiedTimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryAccessTimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryChangeTimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryBirthTimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryRootQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryDirQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryBaseQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryExtQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryRelativeDirectoryQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryDevQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryModeQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryNlinkQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryUidQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryGidQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryRdevQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryBlksizeQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryInoQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryBlocksQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryAtimeMsQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryMtimeMsQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryCtimeMsQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryBirthtimeMsQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface DirectoryAtimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryMtimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryCtimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface DirectoryBirthtimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileInternalInputObject_2 {
  contentDigest?: FileInternalContentDigestQueryString_2 | null;

  type?: FileInternalTypeQueryString_2 | null;

  mediaType?: FileInternalMediaTypeQueryString_2 | null;

  description?: FileInternalDescriptionQueryString_2 | null;

  owner?: FileInternalOwnerQueryString_2 | null;
}

export interface FileInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileInternalMediaTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileInternalDescriptionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileSourceInstanceNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileAbsolutePathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileRelativePathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileExtensionQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileSizeQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FilePrettySizeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileModifiedTimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileAccessTimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileChangeTimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileBirthTimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileRootQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileDirQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileBaseQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileExtQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileNameQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileRelativeDirectoryQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileDevQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileModeQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileNlinkQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileUidQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileGidQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileRdevQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileBlksizeQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileInoQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileBlocksQueryInteger_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileAtimeMsQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileMtimeMsQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileCtimeMsQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileBirthtimeMsQueryFloat_2 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface FileAtimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileMtimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileCtimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface FileBirthtimeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface PublicUrlQueryString_3 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkIdQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkInternalInputObject_2 {
  content?: MarkdownRemarkInternalContentQueryString_2 | null;

  type?: MarkdownRemarkInternalTypeQueryString_2 | null;

  contentDigest?: MarkdownRemarkInternalContentDigestQueryString_2 | null;

  owner?: MarkdownRemarkInternalOwnerQueryString_2 | null;
}

export interface MarkdownRemarkInternalContentQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkInternalTypeQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkInternalContentDigestQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkInternalOwnerQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkFrontmatterInputObject_2 {
  title?: MarkdownRemarkFrontmatterTitleQueryString_2 | null;

  date?: MarkdownRemarkFrontmatterDateQueryString_2 | null;

  slug?: MarkdownRemarkFrontmatterSlugQueryString_2 | null;

  tags?: MarkdownRemarkFrontmatterTagsQueryList_2 | null;

  readNext?: MarkdownRemarkFrontmatterReadNextQueryString_2 | null;

  _PARENT?: MarkdownRemarkFrontmatterParentQueryString_2 | null;
}

export interface MarkdownRemarkFrontmatterTitleQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkFrontmatterDateQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkFrontmatterSlugQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkFrontmatterTagsQueryList_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkFrontmatterReadNextQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkFrontmatterParentQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface ExcerptQueryString_3 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkRawMarkdownBodyQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface MarkdownRemarkFileAbsolutePathQueryString_2 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface HtmlQueryString_3 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface HeadingsQueryList_3 {
  elemMatch?: HeadingsListElemTypeName_3 | null;
}

export interface HeadingsListElemTypeName_3 {
  value?: HeadingsListElemValueQueryString_3 | null;

  depth?: HeadingsListElemDepthQueryInt_3 | null;
}

export interface HeadingsListElemValueQueryString_3 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface HeadingsListElemDepthQueryInt_3 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface TimeToReadQueryInt_3 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface TableOfContentsQueryString_3 {
  eq?: string | null;

  ne?: string | null;

  regex?: string | null;

  glob?: string | null;

  in?: (string | null)[] | null;

  nin?: (string | null)[] | null;
}

export interface WordCountTypeName_3 {
  paragraphs?: WordCountParagraphsQueryInt_3 | null;

  sentences?: WordCountSentencesQueryInt_3 | null;

  words?: WordCountWordsQueryInt_3 | null;
}

export interface WordCountParagraphsQueryInt_3 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface WordCountSentencesQueryInt_3 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export interface WordCountWordsQueryInt_3 {
  eq?: number | null;

  ne?: number | null;

  gt?: number | null;

  gte?: number | null;

  lt?: number | null;

  lte?: number | null;

  in?: (number | null)[] | null;

  nin?: (number | null)[] | null;
}

export enum SitePageConnectionSortByFieldsEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
}

export enum SitePageConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum SitePageDistinctEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
}

export enum SitePageGroupEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
}

export enum SitePluginConnectionSortByFieldsEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum SitePluginConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum SitePluginDistinctEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum SitePluginGroupEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum DirectoryConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum DirectoryConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum DirectoryDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum DirectoryGroupEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum FileConnectionSortByFieldsEnum {
  Id = 'id',
  Children = 'children',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  PublicUrl = 'publicURL',
}

export enum FileConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
}

export enum HeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export enum FileDistinctEnum {
  Id = 'id',
  Children = 'children',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum FileGroupEnum {
  Id = 'id',
  Children = 'children',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum MarkdownRemarkConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContent = 'internal___content',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterSlug = 'frontmatter___slug',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterReadNext = 'frontmatter___readNext',
  FrontmatterParent = 'frontmatter____PARENT',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  Html = 'html',
  Headings = 'headings',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
}

export enum MarkdownRemarkConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum MarkdownRemarkDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContent = 'internal___content',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterSlug = 'frontmatter___slug',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterReadNext = 'frontmatter___readNext',
  FrontmatterParent = 'frontmatter____PARENT',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
}

export enum MarkdownRemarkGroupEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContent = 'internal___content',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterSlug = 'frontmatter___slug',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterReadNext = 'frontmatter___readNext',
  FrontmatterParent = 'frontmatter____PARENT',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
}

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  forrepresentation of dates and times using the Gregorian calendar. */
export type Date = any;

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any;
