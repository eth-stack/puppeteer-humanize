import { z } from "zod";
import * as Schemas from "../schemas";
export type CharacterType = z.infer<typeof Schemas.CharacterTypeSchema>;
export type Delay = z.infer<typeof Schemas.DelaySchema>;
export type TypeMistake = z.infer<typeof Schemas.TypeMistakeSchema>;
export type TypeInto = z.infer<typeof Schemas.TypeIntoSchema>;
declare const TypeMistakeOptionsSchema: z.ZodObject<{
    chance: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    delay: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        chance: z.ZodDefault<z.ZodNumber>;
        min: z.ZodNumber;
        max: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        max: number;
        min: number;
        chance: number;
    }, {
        max: number;
        min: number;
        chance?: number | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    chance?: number | undefined;
    delay?: {
        max: number;
        min: number;
        chance: number;
    } | undefined;
}, {
    chance?: number | undefined;
    delay?: {
        max: number;
        min: number;
        chance?: number | undefined;
    } | undefined;
}>;
declare const TypeIntoOptionsSchema: z.ZodObject<{
    mistakes: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        chance: z.ZodDefault<z.ZodNumber>;
        delay: z.ZodDefault<z.ZodObject<{
            chance: z.ZodDefault<z.ZodNumber>;
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            max: number;
            min: number;
            chance: number;
        }, {
            max: number;
            min: number;
            chance?: number | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        chance: number;
        delay: {
            max: number;
            min: number;
            chance: number;
        };
    }, {
        chance?: number | undefined;
        delay?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
    }>>>;
    delays: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        all: z.ZodDefault<z.ZodObject<{
            chance: z.ZodDefault<z.ZodNumber>;
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            max: number;
            min: number;
            chance: number;
        }, {
            max: number;
            min: number;
            chance?: number | undefined;
        }>>;
        complete: z.ZodDefault<z.ZodObject<{
            chance: z.ZodDefault<z.ZodNumber>;
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            max: number;
            min: number;
            chance: number;
        }, {
            max: number;
            min: number;
            chance?: number | undefined;
        }>>;
        space: z.ZodDefault<z.ZodObject<{
            chance: z.ZodDefault<z.ZodNumber>;
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            max: number;
            min: number;
            chance: number;
        }, {
            max: number;
            min: number;
            chance?: number | undefined;
        }>>;
        punctuation: z.ZodDefault<z.ZodObject<{
            chance: z.ZodDefault<z.ZodNumber>;
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            max: number;
            min: number;
            chance: number;
        }, {
            max: number;
            min: number;
            chance?: number | undefined;
        }>>;
        termination: z.ZodDefault<z.ZodObject<{
            chance: z.ZodDefault<z.ZodNumber>;
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            max: number;
            min: number;
            chance: number;
        }, {
            max: number;
            min: number;
            chance?: number | undefined;
        }>>;
        cadence: z.ZodDefault<z.ZodObject<{
            chance: z.ZodDefault<z.ZodNumber>;
            min: z.ZodNumber;
            max: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            max: number;
            min: number;
            chance: number;
        }, {
            max: number;
            min: number;
            chance?: number | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        all: {
            max: number;
            min: number;
            chance: number;
        };
        complete: {
            max: number;
            min: number;
            chance: number;
        };
        space: {
            max: number;
            min: number;
            chance: number;
        };
        punctuation: {
            max: number;
            min: number;
            chance: number;
        };
        termination: {
            max: number;
            min: number;
            chance: number;
        };
        cadence: {
            max: number;
            min: number;
            chance: number;
        };
    }, {
        all?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        complete?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        space?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        punctuation?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        termination?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        cadence?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    mistakes?: {
        chance: number;
        delay: {
            max: number;
            min: number;
            chance: number;
        };
    } | undefined;
    delays?: {
        all: {
            max: number;
            min: number;
            chance: number;
        };
        complete: {
            max: number;
            min: number;
            chance: number;
        };
        space: {
            max: number;
            min: number;
            chance: number;
        };
        punctuation: {
            max: number;
            min: number;
            chance: number;
        };
        termination: {
            max: number;
            min: number;
            chance: number;
        };
        cadence: {
            max: number;
            min: number;
            chance: number;
        };
    } | undefined;
}, {
    mistakes?: {
        chance?: number | undefined;
        delay?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
    } | undefined;
    delays?: {
        all?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        complete?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        space?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        punctuation?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        termination?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
        cadence?: {
            max: number;
            min: number;
            chance?: number | undefined;
        } | undefined;
    } | undefined;
}>;
export type TypeMistakeOptions = z.input<typeof TypeMistakeOptionsSchema>;
export type TypeIntoOptions = z.input<typeof TypeIntoOptionsSchema>;
export {};
//# sourceMappingURL=schemas.d.ts.map