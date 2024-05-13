import { positionSchema } from '@/pages/NewPosition'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { NewPositionSchema } from '@/api/openapi'
import { zodResolver } from '@hookform/resolvers/zod'

type PositionFormProps = {
  onSubmit(values: z.infer<typeof positionSchema>): Promise<void>
  position: NewPositionSchema
  isPending: boolean
}

export default function PositionForm({
  onSubmit,
  position,
  isPending,
}: PositionFormProps) {
  const form = useForm<z.infer<typeof positionSchema>>({
    resolver: zodResolver(positionSchema),
    defaultValues: position,
  })

  return (
    <div className='px-20'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8'
        >
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder='title'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <textarea
                    className='flex w-full border border-gray-700 p-2'
                    placeholder='description'
                    {...field}
                    rows={10}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='salary_range_start'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Salary Range Start</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='Salary Start'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='salary_range_end'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Salary Range End</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='Salary End'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            disabled={isPending}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
