import { z } from 'zod'
import { schema } from '../schemas/test'

export type Tschema = z.infer<typeof schema>
