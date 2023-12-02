/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface ProjectsInterface extends Interface {
  getFunction(nameOrSignature: "createProject" | "projects"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createProject",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "projects",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "createProject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "projects", data: BytesLike): Result;
}

export interface Projects extends BaseContract {
  connect(runner?: ContractRunner | null): Projects;
  waitForDeployment(): Promise<this>;

  interface: ProjectsInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  createProject: TypedContractMethod<[title: string], [void], "payable">;

  projects: TypedContractMethod<
    [arg0: AddressLike],
    [[string, string] & { title: string; state: string }],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createProject"
  ): TypedContractMethod<[title: string], [void], "payable">;
  getFunction(
    nameOrSignature: "projects"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [[string, string] & { title: string; state: string }],
    "view"
  >;

  filters: {};
}